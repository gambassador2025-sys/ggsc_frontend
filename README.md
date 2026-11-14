# GGSC Frontend

A modern, fast, and scalable frontend web application built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS v3**.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Linting**: [ESLint 9](https://eslint.org/) (Flat Config)

---

## 📁 Project Structure

```text
ggsc_frontend/
├── src/
│   ├── assets/            # Static media and design assets
│   │   ├── icons/
│   │   │   └── GGSC.png   # Chapter logo & favicon
│   │   └── final-color-pallete.svg # Palette asset
│   ├── components/        # Reusable global components
│   │   ├── navbar.tsx     # Animated navbar & radial menu popup
│   │   ├── scrollbar.tsx  # Dynamic progress bar & theme scrollbar
│   │   ├── back-to-top.tsx # Floating back to top button with arrow icon
│   │   └── footer.tsx     # Site footer
│   ├── sections/          # Page sections
│   │   ├── home.tsx       # Landing / Hero section
│   │   ├── about.tsx      # About section
│   │   ├── events.tsx     # Events & hackathons
│   │   ├── team.tsx       # Team core members
│   │   ├── gallery.tsx    # Photo gallery & moments
│   │   ├── reviews.tsx    # Testimonials & reviews
│   │   └── contact.tsx    # Contact information & socials
│   ├── App.tsx            # Root component orchestrating sections
│   ├── main.tsx           # React DOM root entrypoint
│   ├── index.css          # Tailwind directives, animations & global styles
│   └── vite-env.d.ts      # Vite client TypeScript declarations
├── index.html             # Vite entry HTML
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS plugins configuration
├── vite.config.ts         # Vite configuration with React plugin
├── tsconfig.json          # Root TypeScript project references
├── tsconfig.app.json      # App TypeScript compilation config
├── tsconfig.node.json     # Node/Vite tooling TypeScript config
├── eslint.config.js       # Flat ESLint configuration
└── package.json           # Dependencies and project scripts
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or higher recommended)
- `npm` (v9.x or higher)

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command           | Description                                                                         |
| :---------------- | :---------------------------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server with fast HMR on `localhost:5173`.               |
| `npm run build`   | Runs TypeScript type checking (`tsc -b`) and bundles for production (`vite build`). |
| `npm run preview` | Locally serves the production build from `dist/` to verify behavior before deploy.  |
| `npm run lint`    | Lints TypeScript and TSX files using ESLint.                                        |

---

## 🎨 Styling with Tailwind CSS

Tailwind CSS v3 is configured with standard directives in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Theme customizations, plugins, or extensions can be added directly to [tailwind.config.js](file:///home/zap/Projects/college/work/ggsc_frontend/tailwind.config.js):

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be placed in the `dist/` folder, ready for deployment to any static hosting service (Vercel, Netlify, Cloudflare Pages, AWS S3, etc.).
