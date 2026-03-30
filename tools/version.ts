#!/usr/bin/env bun

import { $ } from 'bun';
import { join } from 'path';

// Parse command line arguments or environment variable
function parseArgs(): { mode: 'dev' | 'release'; customVersion?: string } {
  // Check environment variable first
  const envMode = process.env.VERSION_MODE;
  const envReleaseVersion = process.env.RELEASE_VERSION;

  if (envMode === 'dev') {
    return { mode: 'dev' };
  } else if (envMode === 'release') {
    return { mode: 'release', customVersion: envReleaseVersion };
  }

  // Fall back to command line arguments
  const args = process.argv.slice(2);

  if (args.includes('--dev')) {
    return { mode: 'dev' };
  } else if (args.includes('--release')) {
    const releaseIndex = args.indexOf('--release');
    const customVersion = args[releaseIndex + 1];
    // Check if the next argument exists and doesn't start with --
    if (customVersion && !customVersion.startsWith('--')) {
      return { mode: 'release', customVersion };
    }
    return { mode: 'release' };
  } else {
    console.error('Error: Must specify either --dev or --release flag, or set VERSION_MODE environment variable');
    console.error('Usage: bun tools/version.ts [--dev | --release [version]]');
    console.error('   or: VERSION_MODE=dev bun tools/version.ts');
    console.error('   or: VERSION_MODE=release RELEASE_VERSION=2026.3.29.1 bun tools/version.ts');
    console.error('   or: bun tools/version.ts --release 2026.3.29.1');
    process.exit(1);
  }
}

// Get the current git commit SHA
async function getGitCommitSha(): Promise<string> {
  try {
    const result = await $`git rev-parse --short HEAD`.text();
    return `dev-${result.trim()}`;
  } catch (error) {
    console.error('Error getting git commit SHA:', error);
    process.exit(1);
  }
}

// Strip prefix characters from version string
// Example: "XT-v2026.2.1-pre" -> "2026.2.1-pre"
// Example: "XT-v2026.3.29.1" -> "2026.3.29.1"
function stripVersionPrefix(version: string): string {
  // Match the first occurrence of a digit, and keep everything from there
  const match = version.match(/\d.*/);
  return match ? match[0] : version;
}

// Get today's date components
function getTodayComponents(): { year: number; month: number; day: number } {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1, // getMonth() returns 0-11
    day: now.getDate(),
  };
}

// Get existing tags that match today's CalVer date and determine the next sub-version.
// Tags are expected in the format: XT-vYYYY.M.D or XT-vYYYY.M.D.N
async function getNextSubVersion(year: number, month: number, day: number): Promise<number> {
  const datePrefix = `XT-v${year}.${month}.${day}`;

  try {
    // List all tags matching today's date prefix
    // Use an array to pass arguments, preventing shell glob expansion of the `.*` pattern
    const patterns = [datePrefix, `${datePrefix}.*`];
    const result = await $`git tag --list ${patterns}`.text();
    const tags = result.trim().split('\n').filter(Boolean);

    if (tags.length === 0) {
      return 0;
    }

    // Parse sub-version numbers from matching tags
    let maxSubVersion = -1;
    const baseDateVersion = `${year}.${month}.${day}`;

    for (const tag of tags) {
      const version = stripVersionPrefix(tag);

      if (version === baseDateVersion) {
        // Tag like XT-v2026.3.29 (no sub-version) — treat as sub-version 0
        maxSubVersion = Math.max(maxSubVersion, 0);
      } else {
        // Tag like XT-v2026.3.29.N — extract N
        const match = version.match(new RegExp(`^${baseDateVersion.replace(/\./g, '\\.')}\\.(\\d+)$`));
        if (match) {
          maxSubVersion = Math.max(maxSubVersion, parseInt(match[1], 10));
        }
      }
    }

    // Next sub-version is one higher than the max found
    return maxSubVersion + 1;
  } catch {
    // If git tag listing fails (e.g. no git repo), start at 0
    return 0;
  }
}

// Generate CalVer version in format YYYY.M.D.N
// The sub-version N is determined by checking existing git tags for today's date.
// First release of the day is YYYY.M.D.0, second is YYYY.M.D.1, etc.
async function getCalVerVersion(): Promise<string> {
  const { year, month, day } = getTodayComponents();
  const subVersion = await getNextSubVersion(year, month, day);

  return `${year}.${month}.${day}.${subVersion}`;
}

// Get the current date/time in ISO format
function getCurrentDateTime(): string {
  return new Date().toISOString();
}

// Generate version based on mode
async function generateVersion(mode: 'dev' | 'release', customVersion?: string): Promise<string> {
  if (mode === 'dev') {
    return await getGitCommitSha();
  } else {
    return customVersion ? stripVersionPrefix(customVersion) : await getCalVerVersion();
  }
}

// Update version.json
async function updateVersionJson(mode: 'dev' | 'release', customVersion?: string): Promise<void> {
  const versionFilePath = join(import.meta.dir, '..', 'version.json');

  try {
    const version = await generateVersion(mode, customVersion);
    const date = getCurrentDateTime();

    const versionData = {
      version,
      date
    };

    await Bun.write(versionFilePath, JSON.stringify(versionData, null, 2) + '\n');

    console.log(`Updated version.json (${mode} mode):`);
    console.log(`  version: ${version}`);
    console.log(`  date: ${date}`);
  } catch (error) {
    console.error('Error updating version.json:', error);
    process.exit(1);
  }
}

// Run the update
const { mode, customVersion } = parseArgs();
await updateVersionJson(mode, customVersion);