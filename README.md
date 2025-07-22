# Dagmar Drbálková - Portfolio Website

A modern, performant portfolio website built with Next.js, featuring interactive 3D animations, optimized SEO, and accessibility-first design.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [License](#license)

## 🌟 About

Personal portfolio website showcasing full-stack development skills, projects, and experience. The site features a modern design with interactive 3D elements, optimized performance, and comprehensive accessibility features.

**Live Site:** [https://cv-ruby-nu.vercel.app/](https://cv-ruby-nu.vercel.app/)

## ✨ Features

### 🎨 Design & UX
- **Interactive 3D Background** - Three.js powered floating geometric shapes
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI Components** - shadcn/ui component library
- **Smooth Animations** - Performance-optimized transitions and effects
- **Dark/Light Theme Support** - System preference detection

### 🚀 Performance
- **Critical CSS Inlining** - Above-the-fold optimization
- **Intersection Observer** - Lazy loading and visibility optimization
- **Font Optimization** - Google Fonts with display swap
- **Resource Hints** - DNS prefetch and preconnect
- **Analytics Integration** - Vercel Analytics and Speed Insights

### 🔍 SEO & Metadata
- **Structured Data** - JSON-LD schema markup
- **Open Graph** - Social media optimization
- **Twitter Cards** - Enhanced social sharing
- **Meta Tags** - Comprehensive SEO optimization
- **Sitemap & Robots** - Search engine optimization

### ♿ Accessibility
- **WCAG 2.1 Compliance** - AA level accessibility
- **Screen Reader Support** - Semantic HTML and ARIA labels
- **Keyboard Navigation** - Full keyboard accessibility
- **Skip Links** - Navigation shortcuts
- **Focus Management** - Visible focus indicators

### 🛠 Developer Experience
- **TypeScript** - Type safety and better DX
- **Biome** - Fast linting and formatting
- **Modular Architecture** - Clean component separation
- **Git Hooks** - Pre-commit quality checks

## 🛠 Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library

### 3D Graphics
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **Custom Scene Management** - Optimized 3D rendering

### Development Tools
- **[Biome](https://biomejs.dev/)** - Linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring

### Fonts
- **[Inter](https://rsms.me/inter/)** - Primary interface font
- **[Poppins](https://fonts.google.com/specimen/Poppins)** - Display font
- **[Playfair Display](https://fonts.google.com/specimen/Playfair+Display)** - Accent font

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/daasadr/cv.git
   cd cv
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

1. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

3. **Available scripts**
   ```bash
   npm run dev      # Start development server
   npm run build    # Build for production
   npm run start    # Start production server
   npm run lint     # Run Biome linter
   npm run format   # Format code with Biome
   ```

## 📁 Project Structure

```
cv/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── layout/             # Layout components
│   │   ├── BodyWrapper.tsx
│   │   ├── FontConfiguration.tsx
│   │   ├── HeadContent.tsx
│   │   ├── MetadataConfig.tsx
│   │   └── index.ts
│   ├── ui/                 # shadcn/ui components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── hooks/                   # Custom React hooks
│   └── use-toast.ts
├── lib/                     # Utility libraries
│   ├── favicon-emojis.ts   # Favicon configuration
│   ├── site-config.ts      # Site-wide configuration
│   ├── threejs-scene.ts    # Three.js scene management
│   └── utils.ts            # Utility functions
├── public/                  # Static assets
│   ├── examples/           # Project examples
│   └── CV_Dagmar_Drbalkova.pdf
├── biome.json              # Biome configuration
├── components.json         # shadcn/ui configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## ⚙ Configuration

### Site Configuration

Edit `lib/site-config.ts` to update:
- Personal information (name, contact details)
- Social links
- Technical skills
- SEO metadata
- Theme colors

### Three.js Scene

Customize the 3D background in `lib/threejs-scene.ts`:
- Geometric shapes and materials
- Animation parameters
- Performance settings

### Styling

- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.ts`
- **Component styles**: Utility classes with Tailwind

### Fonts

Font configuration in `components/layout/FontConfiguration.tsx`:
- Google Fonts integration
- Font display optimization
- CSS variable setup

## ⚡ Performance

### Optimization Features

- **Bundle Analysis** - Webpack bundle analyzer
- **Image Optimization** - Next.js automatic optimization
- **Code Splitting** - Automatic route-based splitting
- **Caching Strategy** - Optimized cache headers
- **Core Web Vitals** - Performance monitoring

### Performance Scores

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## ♿ Accessibility

### Features

- **Semantic HTML** - Proper document structure
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Tab order and focus management
- **Color Contrast** - WCAG AA compliance
- **Responsive Design** - Mobile accessibility
- **Alternative Text** - Image descriptions

### Testing

```bash
# Run accessibility lints
npm run lint

# Manual testing checklist
- Screen reader navigation
- Keyboard-only navigation
- High contrast mode
- Zoom to 200%
```

## Code Standards

- **TypeScript** for type safety
- **Biome** for consistent formatting
- **Semantic commits** following conventional commits
- **Component documentation** with JSDoc
- **Accessibility** compliance required

---

**Built with ❤️ by [Dagmar Drbálková](https://cv-ruby-nu.vercel.app/)