# Dagmar Drbálková - Portfolio Website

A modern, performant portfolio website built with Next.js, featuring 3D animations, optimized SEO, and accessibility-first design.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
  - [Component Organization](#component-organization)
  - [Loading Strategy](#loading-strategy)
  - [Data Management](#data-management)
  - [Performance Monitoring](#performance-monitoring)
- [Configuration](#configuration)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Code Standards](#code-standards)

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
- **Bilingual Support** - Czech and English language switching with elegant UI toggle

### 🚀 Performance
- **Dynamic Imports** - Below-the-fold content lazy loaded with Next.js dynamic()
- **Critical Path Optimization** - Hero and Navigation load immediately, rest loads dynamically
- **Web Vitals Tracking** - Custom monitoring with hooks for Three.js, resources, and loading
- **Throttled Event Handlers** - Optimized scroll and resize handlers
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
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library built on Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - Schema validation

### 3D Graphics
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **Custom Scene Management** - Optimized 3D rendering

### Development Tools
- **[Biome](https://biomejs.dev/)** - Linting and formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files
- **[Vitest](https://vitest.dev/)** - Unit testing framework
- **[Testing Library](https://testing-library.com/)** - React component testing
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring
- **[Vercel Speed Insights](https://vercel.com/docs/speed-insights)** - Real-time performance tracking

### Internationalization
- **Custom Language Context** - React Context for Czech/English switching
- **Translation System** - Centralized translation keys and hooks
- **LocalStorage Persistence** - Remembers user's language preference
- **Dynamic Language Toggle** - Elegant UI switcher with accessibility support

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
   npm run dev            # Start development server
   npm run build          # Build for production
   npm run start          # Start production server
   npm run lint           # Run Next.js linter
   npm run format         # Format code with Biome
   npm run biome:check    # Check and fix with Biome
   npm run biome:format   # Format with Biome
   npm run biome:lint     # Lint with Biome
   npm run biome:ci       # Run Biome in CI mode
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
│   │   ├── Footer.tsx
│   │   ├── HeadContent.tsx
│   │   ├── MetadataConfig.tsx
│   │   └── index.ts
│   ├── Navigation/         # Navigation components
│   │   ├── constants.ts
│   │   ├── GitHubButton.tsx
│   │   ├── index.tsx
│   │   ├── NavigationLinks.tsx
│   │   └── SkipNavigation.tsx
│   ├── sections/           # Page sections
│   │   ├── About/
│   │   │   ├── AboutContent.tsx
│   │   │   ├── ActionButtons.tsx
│   │   │   ├── index.tsx
│   │   │   ├── SoftSkills.tsx
│   │   │   └── StatsCards.tsx
│   │   ├── Contact/
│   │   │   ├── ContactHeader.tsx
│   │   │   ├── ContactMethodItem.tsx
│   │   │   ├── ContactMethods.tsx
│   │   │   ├── index.tsx
│   │   │   └── WhyMeSection.tsx
│   │   ├── Hero/
│   │   │   ├── HeroActions.tsx
│   │   │   ├── HeroBackground.tsx
│   │   │   ├── HeroContent.tsx
│   │   │   ├── index.tsx
│   │   │   └── ScrollIndicator.tsx
│   │   ├── Projects/
│   │   │   ├── index.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectsHeader.tsx
│   │   │   └── ProjectsList.tsx
│   │   └── Skills/
│   │       ├── index.tsx
│   │       ├── SkillCategory.tsx
│   │       ├── SkillItem.tsx
│   │       ├── SkillsHeader.tsx
│   │       ├── SkillsLegend.tsx
│   │       └── SkillsList.tsx
│   ├── ui/                 # shadcn/ui components
│   ├── WebVitalsReporter/  # Performance monitoring
│   │   ├── index.tsx
│   │   ├── types.ts
│   │   ├── useLoadingPerformance.ts
│   │   ├── useResourceTracking.ts
│   │   ├── useThreeJSMonitor.ts
│   │   ├── utils.ts
│   │   └── WebVitalsLoader.tsx
│   ├── LanguageSwitcher.tsx
│   ├── LanguageWrapper.tsx
│   └── UnderFold.tsx       # Lazy-loaded sections
├── content/                 # Content configuration
│   ├── contact.ts          # Contact information
│   ├── projects.ts         # Project data
│   ├── site-config.ts      # Site-wide configuration
│   ├── skills.ts           # Skills data
│   └── translations.ts     # Czech/English translations
├── contexts/                # React Context providers
│   └── LanguageContext.tsx # Language switching context
├── hooks/                   # Custom React hooks
│   ├── useThrottle.ts      # Throttle hook
│   └── useTranslation.ts   # Translation hook
├── lib/                     # Utility libraries
│   ├── threejs-scene.ts    # Three.js scene management
│   └── utils.ts            # Utility functions
├── public/                  # Static assets
│   ├── examples/           # Project examples
│   ├── images/             # Image assets
│   └── CV Dagmar Drbalkova 2025.pdf
├── biome.json              # Biome configuration
├── components.json         # shadcn/ui configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🏗 Architecture

### Component Organization

The application uses a modular component architecture:

- **Sections** - Major page sections (`Hero`, `About`, `Skills`, `Projects`, `Contact`) are organized in `components/sections/` with sub-components for better maintainability
- **Layout Components** - Reusable layout elements in `components/layout/`
- **Navigation** - Self-contained navigation system with multiple sub-components
- **UI Library** - shadcn/ui components in `components/ui/`

### Loading Strategy

1. **Critical Above-the-Fold** - Navigation and Hero section load immediately
2. **Dynamic Below-the-Fold** - Other sections lazy load via `UnderFold` component using Next.js `dynamic()`
3. **Loading States** - Each dynamically loaded section has its own loading placeholder

### Data Management

- **Centralized Content** - All content stored in `content/` directory for easy updates
- **Translation System** - Type-safe translations using custom `useTranslation` hook
- **Language Context** - React Context with localStorage persistence for language preference

### Performance Monitoring

Custom performance tracking system with:
- `useLoadingPerformance` - Tracks page loading metrics
- `useThreeJSMonitor` - Monitors 3D rendering performance
- `useResourceTracking` - Tracks resource loading
- `useThrottle` - Optimizes expensive operations

## ⚙ Configuration

### Site Configuration

Edit `content/site-config.ts` to update:
- Personal information (name, contact details)
- Social links
- Technical skills
- SEO metadata
- Theme colors

### Content Management

Content files in the `content/` directory:
- **`site-config.ts`** - Site-wide configuration and personal information
- **`translations.ts`** - Czech and English translations for all UI text
- **`projects.ts`** - Portfolio projects data
- **`skills.ts`** - Technical skills and proficiency levels
- **`contact.ts`** - Contact methods and information

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

### Language Context

Language switching configuration in `contexts/LanguageContext.tsx`:
- LocalStorage persistence
- Default language setting (Czech)
- Language toggle functionality

## ⚡ Performance

### Optimization Features

- **Lazy Loading** - Dynamic imports for below-the-fold sections via `UnderFold` component
- **Web Vitals Monitoring** - Custom `WebVitalsReporter` for real-time performance tracking
- **Three.js Monitoring** - Custom hooks for 3D rendering performance
- **Resource Tracking** - Monitor loading performance and resource usage
- **Throttled Scroll Handlers** - Optimized scroll event handling with `useThrottle` hook
- **Bundle Analysis** - Webpack bundle analyzer
- **Image Optimization** - Next.js automatic optimization
- **Code Splitting** - Automatic route-based and component-level splitting
- **Caching Strategy** - Optimized cache headers
- **Core Web Vitals** - CLS, LCP, FCP, FID, TTFB tracking

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

## 💻 Code Standards

### Code Quality

- **TypeScript** for type safety across all components
- **Biome** for fast linting and consistent formatting
- **Modular architecture** with clear separation of concerns
- **Component documentation** with JSDoc comments

### Git Workflow

- **Husky** - Git hooks for quality checks
- **lint-staged** - Automatic linting of staged files before commit
- **Pre-commit checks** - Biome runs automatically on commit

### Best Practices

- **Accessibility-first** - WCAG 2.1 AA compliance required
- **Performance optimization** - Lazy loading, throttling, memoization
- **Type safety** - Full TypeScript coverage with strict mode
- **Semantic HTML** - Proper use of semantic elements and ARIA labels

---

**Built with ❤️ by [Dagmar Drbálková](https://cv-ruby-nu.vercel.app/)