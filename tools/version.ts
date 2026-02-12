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
    console.error('   or: VERSION_MODE=release RELEASE_VERSION=1.0.0 bun tools/version.ts');
    console.error('   or: bun tools/version.ts --release 1.0.0');
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
function stripVersionPrefix(version: string): string {
  // Match the first occurrence of a digit, and keep everything from there
  const match = version.match(/\d.*/);
  return match ? match[0] : version;
}

// Generate CalVer version in format YYYY.M.D
function getCalVerVersion(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // getMonth() returns 0-11
  const day = now.getDate();

  return `${year}.${month}.${day}`;
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
    return customVersion ? stripVersionPrefix(customVersion) : getCalVerVersion();
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
