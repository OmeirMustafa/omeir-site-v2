# CHANGELOG - OMEIR OS v3.0

## [2.0.0] - 2025-12-12
### Added
- **Deep-Green Reactor Palette**: Global CSS variables for `accent-green` (#00C28A) and `accent-deep` (#007A52).
- **Secure AI Systems**: New section with Master Panel layout, vector DB visualization, and orbiting node animations.
- **Visual Assets**: `VectorDBVisual.tsx` component and `secure-ai-vector.svg`.

### Changed
- **Global Config**: Replaced legacy `neon-cyan`/`voltage-purple` palette with Deep-Green Reactor specifications.
- **Core Components**: Updated `HoloPanel`, `ReticleCursor`, and `HUDNavigation` to use new palette variables.
- **CSS Architecture**: Implemented cleaner CSS nesting and variable usage in `globals.css`.

### Removed
- Legacy blue/cyan hardcoded color tokens.
- Deprecated HUD panel styles.

## [1.0.0] - 2025-12-11
### 🚀 Major Features
- **Tactical-OS Core**: Implemented full-site cinematic HUD interface.
- **Hardcore Animations**: 
    - `globals.css`: GPU-accelerated keyframes (`scanline`, `holoPulse`, `reticleSpin`, `holoSweep`).

## [v3.0.0] - Tactical Reactor Upgrade (Hardcore Animations Mode)

### 🚀 Major Features
- **Tactical-OS Core**: Implemented full-site cinematic HUD interface.
- **Hardcore Animations**: 
    - `globals.css`: GPU-accelerated keyframes (`scanline`, `holoPulse`, `reticleSpin`, `holoSweep`).
    - `motion.ts`: Standardized physics presets (`spring`, `snap`, `subtle`).
    - `HoloPanel`: Glassmorphic reactor panels with staggered bracket reveals.
- **Hero Section**: 
    - Full-screen parallax environment (2-5% depth).
    - Particle engine (Canvas).
    - Holographic text sweep animation.
- **Navigation**: Floating pill design with "ONLINE" live status indicator and motion-layout active states.
- **Smart Contact**: Encrypted comms modal with sound-design visual cues (glitch/scanline).

### ♻️ Refactoring & Cleanup
- **Unified Master Panel**: Replaced ad-hoc section styles with `HUDSectionWrapper` across `/`, `/services`, `/portfolio`, `/insights`, `/contact`.
- **Removed Legacy Components**:
    - `ArchitectureGrid` (Deprecated)
    - `ModulesGrid` (Deprecated)
    - `ServicesGrid` (Deprecated)
    - `ReactorCoreHUD` (Merged into `HUDSectionWrapper`)
- **Performance**:
    - Added `prefers-reduced-motion` global override.
    - Optimized particle count for mobile.

### 🛠️ Architecture
- **Tech Stack**: Next.js 15 (App Router), Tailwind CSS v4, Framer Motion.
- **Assets**: Standardized diagrams in `/public/diagrams/`.
