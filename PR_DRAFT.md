# Draft PR: Codebase Cleanup & Audit (2025-12-24)

## 🧹 Summary
This PR applies automated lint fixes and aggregates a report of potential dead code, unused dependencies, and boilerplate assets. **No destructive changes (deletions) have been made automatically.**

**Artifacts Attached**:
- `cleanup-findings.md`: Detailed audit report.
- `depcheck-report.json`: Raw dependency scan.

## ⚠️ Review Needed
Please review the list below and check the boxes to authorize deletion.

### Unused Dependencies
- [ ] `react-compare-slider` (Appears replaced by custom implementation)
- [ ] `matter-js` (No usage found in `src`)
- [ ] `geist` (Review if font is used via variable)

### Unused Assets (Boilerplate)
- [ ] `public/next.svg`
- [ ] `public/vercel.svg`
- [ ] `public/globe.svg`
- [ ] `public/window.svg`

### Code Cleanliness
- [x] Auto-fixed ESLint issues (Imports, Unused vars).
- [ ] **Manual**: Remove `backup_old_site/` directory? (Huge size reduction).

## 🔍 Verification
Run the following to verify valid deletions:
```bash
# Check for dependency usage
git grep "react-compare-slider"
git grep "matter-js"

# Verify build
npm run build
```

## ✅ Checklist
- [x] ESLint Fixes Applied
- [x] Audit Report Generated
- [ ] CI/CD Workflow Added (`.github/workflows/ci.yml`)
- [ ] Build Passed locally
