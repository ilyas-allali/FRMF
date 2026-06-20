# Design Specification: FRMF Elite Squad Showcase

## 1. Aesthetic & Brand Vision
- **Theme:** Premium, cinematic, minimal luxury.
- **Color Palette:**
  - `Deep Obsidian`: #0B0C10 (Primary background)
  - `Royal Moroccan Red`: #8A1538 (Accent crimson accents, glows)
  - `Atlas Gold`: #C5A059 (Premium subtle borders, typography metrics)
  - `Pitch White`: #FFFFFF
- **Typography:**
  - Display: Large, high-contrast, geometric Sans-Serif (e.g., Syne or Monument Extended) for player numbers and massive background text.
  - Body: Ultra-clean, high-legibility Sans (e.g., Inter or SF Pro Display).

## 2. Layout Structure (The Scroll Stage)
- **Hero Intro:** Minimalist typography welcoming users to the "Lions of the Atlas" digital pavilion.
- **The Carousel/Track Stage:** A full-viewport scroll container (`h-[500vh]`). As the user scrolls, a pinning mechanism locks the view while cards transition.
  - **3D Card Layout:** Cards possess a slight perspective skew (`perspective: 1200px`) and dynamically track mouse movement via real-time CSS variables for a parallax 3D effect.
  - **Transition Effect:** Cards do not just slide; they emerge from the background Z-space, scaling up slightly and adjusting opacity while the active center card sits perfectly flat and prominent.

## 3. Interactive Animations & States
- **Scroll Binding:** Linked precisely via GSAP ScrollTrigger or Framer Motion `useScroll` + `useTransform`.
- **Hover Celebration State:** 
  - Each card contains two layers: a base player profile portrait and a hidden celebration texture overlay.
  - On hover, a WebGL fragment shader distortion (or a highly optimized Framer Motion opacity clip mask) triggers. The base picture smoothly transforms to show the player's iconic celebration image.
  - Background typography shifts dynamically to reflect individual player stats (e.g., Goals, Appearances).

## 4. Asset Mapping & Wireframes
- **Player Card Component Structure:**
  - Background: Giant glowing jersey number with low opacity.
  - Midground: High-resolution cut-out transparency of the player.
  - Foreground: Sleek glassmorphism overlay indicating position and names in gold accents.