# Yevhenii Shorobura — Engineering Portfolio & System Showcase

[![Deploy to GitHub Pages](https://github.com/yevhenii-shorobura/me/actions/workflows/deploy.yml/badge.svg)](https://github.com/yevhenii-shorobura/me/actions/workflows/deploy.yml)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.0-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)

> *"My interest sits at the seam between product and system: not just how a screen looks, but what has to be true underneath it for the screen to be honest."*

🌐 **Live Website:** [https://yevhenii-shorobura.github.io/me/](https://yevhenii-shorobura.github.io/me/)

---

## 🌌 Overview

Official personal engineering portfolio of **Yevhenii Shorobura**, full-stack software engineer and product builder originally from Kyiv, Ukraine, currently based in Munich, Germany. Solo engineer and architect behind **[Shorado](https://shorado.com.ua)** — a production-grade Ukrainian marketplace operating with zero corporate bloat.

### ✨ Highlights

- **Interactive ASCII Black Hole Engine:** A custom-coded HTML5 Canvas simulation rendering a spinning relativistic accretion disk with Doppler boosting, photon rings, and gravitational lensing that smoothly zooms on user scroll.
- **Deep-Dive Engineering Breakdowns:** Detailed architectural teardowns of **Shorado** (event-log schemas, passkey auth, WebSocket chat, Sharp WebP pipeline, HTTP 410 tombstones).
- **R&D Lab:** Showcase of real-world experiments covering Android viewport workarounds, hardware barcode scanning, push service worker decoupling, and edge caching (~20ms TTFB).
- **Bilingual Support (EN / DE):** Full client-side localization for English and German with instantaneous switching, localStorage persistence, and auto-detection.
- **Modern Minimalist Bento UI:** High-contrast dark theme (`#050102`), burnt orange accents (`#e44500`), smooth typography pairing (`Unbounded` + `Geist Mono`), and glassmorphism.
- **Static Export & Zero Server Cost:** Pre-rendered via Next.js App Router static export (`output: "export"`) with automated GitHub Pages deployment.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/) with React Compiler |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/turbopack`) |
| **Canvas & Graphics** | Pure HTML5 2D Canvas + Relativistic Math + Pre-computed Aura LUT |
| **Typography** | `next/font` ([Unbounded](https://fonts.google.com/specimen/Unbounded) & [Geist Mono](https://vercel.com/font)) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **CI/CD & Hosting** | GitHub Actions (`deploy.yml`) → GitHub Pages |

---

## 📁 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD pipeline for GitHub Pages
├── components/
│   ├── about-section.jsx       # Bio, background, philosophy & photo
│   ├── build-section.jsx       # 6 core engineering domains & capabilities
│   ├── contact-section.jsx     # Lombardi quote, direct email & languages
│   ├── hero-component.jsx      # Clean, minimal hero section
│   ├── lab-section.jsx         # 4 R&D technical experiments
│   ├── navigation-bar.jsx      # Floating glassmorphic top navigation bar
│   ├── path-section.jsx        # Progressive capability milestones
│   ├── pause-black-hole-button.jsx # Floating simulation pause/play controller
│   ├── shorado-section.jsx     # Deep dive into Shorado architecture & preview
│   └── stack-section.jsx       # Categorized technologies & tools
├── features/
│   ├── acsii-black-hole.jsx    # Real-time ASCII black hole canvas component
│   └── config.js               # Black hole constants (zoom, speed, tilt, characters)
├── public/
│   ├── .nojekyll               # Prevents GitHub Pages from ignoring _next/ assets
│   └── assets/                 # WebP portfolio screenshots & photography
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 import & custom color themes
│   │   ├── layout.js           # Fonts, root HTML wrapper & SEO metadata
│   │   └── page.js             # Root landing page assembly
│   └── lib/
│       ├── language-context.jsx # React context for EN/DE localization & switching
│       ├── translations.js     # Dictionaries for English & German
│       └── utils.js            # Path normalization helpers for GitHub Pages
└── next.config.mjs             # Next.js static export & basePath configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher recommended)
- `npm` (version 9 or higher)

### 1. Clone the repository

```bash
git clone https://github.com/yevhenii-shorobura/me.git
cd me
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create a production build & static export

```bash
npm run build
```

This compiles and generates the static HTML, CSS, JavaScript, and assets inside the `./out` directory.

---

## 🚢 Continuous Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### How it works:
1. Every `git push` to `main` triggers the workflow.
2. The action sets up Node.js 20, runs `npm ci`, and executes `npm run build`.
3. It packages the `./out` export and publishes it to **GitHub Pages**.

### One-Time GitHub Configuration:
1. Go to repository **Settings** → **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Push to `main`, and your site will be live at `https://<username>.github.io/<repo>/`!

---

## 📬 Contact & Connect

- **Email:** [hello@shorado.com.ua](mailto:hello@shorado.com.ua)
- **GitHub:** [@mczheniok](https://github.com/mczheniok)
- **LinkedIn:** [linkedin.com/in/yevhenii-shorobura](https://www.linkedin.com/in/yevhenii-shorobura/)
- **Location:** Munich, Germany (orig. Kyiv, Ukraine)
