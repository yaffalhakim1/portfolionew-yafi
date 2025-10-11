# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website built with React Router v7, TypeScript, and Tailwind CSS. The project uses server-side rendering (SSR) by default and is configured for deployment on Netlify.

## Development Commands

- `npm run dev` - Start development server with HMR at `http://localhost:5173`
- `npm run build` - Create production build
- `npm run start` - Start production server from build output
- `npm run typecheck` - Run TypeScript type checking and generate route types

## Architecture

### React Router v7 Structure
- Uses file-based routing with `@react-router/fs-routes` (flat routes)
- Routes are automatically generated from files in `app/routes/`
- SSR enabled by default in `react-router.config.ts`

### Key Directories
- `app/` - React Router application code
  - `routes/` - Route components (index, about, experience, projects)
  - `root.tsx` - Root layout with theme provider and error boundary
  - `metaConfig.ts` - SEO metadata configuration
- `components/` - Reusable UI components
  - `anim/` - Animation components using Framer Motion
  - `header.tsx` - Site navigation with FloatingNav
- `lib/` - Utility functions
- `public/` - Static assets

### Component Architecture
- Uses shadcn/ui components configuration (`components.json`)
- Tailwind CSS with custom theme variables and dark mode support
- Framer Motion for animations (components in `anim/` directory)
- Theme management with `next-themes` provider
- Path aliases configured: `@/*` points to project root

### Styling System
- Tailwind CSS v4.1.14 with custom configuration
- CSS variables for theme colors (HSL values)
- Dark mode support with class-based theme switching
- Inter font family as primary typeface
- Responsive design with container utility

### External Integrations
- GitHub API integration via `@octokit/rest`
- GitHub Calendar component for contribution visualization
- Netlify deployment with plugin configuration

## Important Development Notes

### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` maps to project root
- Includes React Router type generation

### Theme Management
- Uses `next-themes` for dark/light mode switching
- Theme persistence in localStorage with system preference fallback
- CSS variables defined in Tailwind config for consistent theming

### Error Handling
- Global error boundary in root layout
- Route-based error handling with React Router's ErrorBoundary
- Development error stack traces, production-friendly error messages

### Build & Deployment
- SSR build output in `build/` directory (client/server)
- Docker support with multi-stage builds
- Netlify configuration for automatic deployment