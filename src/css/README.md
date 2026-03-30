# CSS Architecture

4chan XT's styles are split across several files that are inlined into the bundle at build time.

## File Overview

| File | Purpose |
|------|---------|
| `style.css` | Core layout and structural styles for all 4chan XT UI elements |
| `variableBase.css` | Theme-agnostic rules that consume `--xt-*` CSS variables |
| `yotsuba.css` | Variable definitions for the Yotsuba (red) theme |
| `yotsuba-b.css` | Variable definitions for the Yotsuba B (blue) theme |
| `futaba.css` | Variable definitions for the Futaba theme |
| `burichan.css` | Variable definitions for the Burichan theme |
| `photon.css` | Variable definitions for the Photon theme |
| `tomorrow.css` | Variable definitions for the Tomorrow (dark) theme |
| `spooky.css` | Variable definitions for the Spooky (dark) theme |
| `report.css` | Styles for the report dialog |
| `www.css` | Styles specific to the `www.4chan.org` landing page |
| `CSS.ts` | Collects and exports all CSS strings for the build |
| `style.ts` | Runtime style injection logic |

## CSS Variables

All custom properties are prefixed with `--xt-` and defined per-theme in the individual theme CSS files (e.g., `tomorrow.css` sets `--xt-background: #282A2E`). The `variableBase.css` file consumes these variables in theme-agnostic selectors, and `style.css` references them where needed for specific components.

For a **complete reference** of every `--xt-*` variable, its default value, and what it controls, see the user-facing documentation:

**[docs/Customization.md — CSS Custom Properties](../../docs/Customization.md#css-custom-properties)**

That page also documents all stable CSS class entry points for custom styling.

## Site-Specific Selector Placeholders

`variableBase.css` uses `$site$`-prefixed placeholder tokens (e.g., `$site$highlightable$reply`) that are replaced at build time with site-specific selectors. These allow the same CSS rules to work across different imageboard software (4chan, Tinyboard, etc.).

## Adding New Variables

When adding a new `--xt-*` variable:

1. Add a `var(--xt-your-variable, <fallback>)` reference in `style.css` or `variableBase.css`.
2. Optionally define theme-specific values in the theme files that need non-default colors (dark themes often need overrides).
3. Document the variable in `docs/Customization.md` under the appropriate category in the CSS Custom Properties section.