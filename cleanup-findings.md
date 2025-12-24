# Codebase Cleanup Findings

**Date**: 2025-12-24
**Branch**: `cleanup/dead-code-20251224`
**Automated Tools**: `depcheck`, `madge`, `eslint`, `purgecss`

## 1. Unused Dependencies
The following packages appear to be unused. Verify with the provided grep commands before removal.

| Package | Type | Status | Verification Command |
| :--- | :--- | :--- | :--- |
| `react-compare-slider` | dependency | **Likely Unused** (Replaced by custom slider?) | `git grep "react-compare-slider"` |
| `matter-js` | dependency | **Likely Unused** | `git grep "matter-js"` |
| `geist` | dependency | **Potential False Positive** (Font?) | `git grep "geist"` |
| `@tailwindcss/postcss` | devDependency | **False Positive** (Build tool) | N/A (Required for v4) |
| `tailwindcss` | devDependency | **False Positive** (Build tool) | N/A (Required for v4) |

> **Recommendation**: Remove `react-compare-slider` and `matter-js` after verification. Keep tailwind-related packages.

## 2. Unused Components & Identifiers (ESLint)
Automated scanning identified unused variables and imports.

- **`src/components/sections/hero.tsx`**:
  - `Link` (Import) - `git grep "Link" src/components/sections/hero.tsx`
  - `ArrowDown` (Import) - `git grep "ArrowDown" src/components/sections/hero.tsx`

- **`src/components/sections/approach.tsx`**:
  - `ChevronRight` (Import) - `git grep "ChevronRight" src/components/sections/approach.tsx`

- **`src/components/ui/magnetic-button.tsx`**:
  - `strength` (Prop) - Verify if this prop is intended for future use.

## 3. Static Assets (Potential Dead Weight)
Boilerplate assets found in `public/`.

- [ ] `public/next.svg`
- [ ] `public/vercel.svg`
- [ ] `public/globe.svg`
- [ ] `public/window.svg`
- [ ] `public/file.svg`

> **Recommendation**: Delete these if the landing page is fully custom and does not use the default Next.js template.

## 4. Backup Directory
A large directory `backup_old_site/` exists.
- **Action**: Confirm if this should be archived outside the repo or deleted.

## 5. CSS Audit (PurgeCSS)
PurgeCSS identified potential unused selectors, but due to Tailwind's utility generation, many are likely false positives involving dynamic classes or third-party libraries.
- Flagged: `.glass-card`, `.text-gradient-neon`
- **Note**: `.glass-card` IS used in `projects.tsx` and `globals.css`. PurgeCSS missed it due to parser limitations with the TSX structure or pathing.
- **Verdict**: Manual review of `globals.css` recommended over automated purging for this project size.

## Action Plan
1.  Run `npm uninstall react-compare-slider matter-js`.
2.  Remove unused imports in `hero.tsx` and `approach.tsx`.
3.  Delete `public/next.svg` and related boilerplate icons.
4.  (Optional) Delete `backup_old_site`.
