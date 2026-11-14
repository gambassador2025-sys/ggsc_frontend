# GGSC Frontend

A high-performance, modern, and beautifully crafted web application for the **Google Gemini Student Community (GGSC)** at the **University of Engineering & Management, Kolkata (UEMK)**.

Built with **React 19**, **Vite 6**, **TypeScript**, **React Router 7**, and **Tailwind CSS v3**.

---

## 🚀 Tech Stack

- **Core Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vite.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/) (`react-router-dom`)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Linting & Code Quality**: [ESLint 9](https://eslint.org/) with Flat Config

---

## 📁 Project Structure

```text
ggsc_frontend/
├── src/
│   ├── assets/            # Static media and design assets
│   │   ├── icons/
│   │   │   └── GGSC.png   # Community logo & favicon
│   │   └── final-color-pallete.svg # Palette asset
│   ├── components/        # Reusable global components
│   │   ├── navbar.tsx     # Animated navbar & radial menu popup
│   │   ├── scrollbar.tsx  # Dynamic progress bar & theme scrollbar
│   │   ├── back-to-top.tsx # Floating back to top button with arrow icon
│   │   ├── cursor.tsx     # Custom theme arrow cursor with smooth interactions
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

- [Node.js](https://nodejs.org/) (`v18.x` or higher recommended)
- `npm` (`v9.x` or higher)

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Start Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command           | Description                                                          |
| :---------------- | :------------------------------------------------------------------- |
| `npm run dev`     | Runs the Vite development server with fast HMR on `localhost:5173`.  |
| `npm run build`   | Runs TypeScript compilation (`tsc -b`) and Vite production bundle.   |
| `npm run preview` | Locally serves the production build from `dist/` to verify behavior. |
| `npm run lint`    | Runs ESLint across all TypeScript and TSX files.                     |

---

## 🎨 Styling with Tailwind CSS

Tailwind CSS v3 is configured with standard directives in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

The compiled output will be generated in the `dist/` folder, ready for deployment to static hosting platforms such as Vercel, Netlify, Cloudflare Pages, or AWS S3/CloudFront.
