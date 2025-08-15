# Overview

This is a corporate RPA (Robotic Process Automation) website for "Desk Automate", a UK-based consultancy specializing in UiPath solutions. The application serves as a marketing and lead generation platform, featuring service information, industry case studies, ROI calculators, and contact forms. Built as a full-stack web application with React frontend and Express backend, it targets businesses looking to implement automation solutions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **Tailwind CSS** with custom brand colors and shadcn/ui component library
- **Tanstack React Query** for server state management and API calls
- **React Hook Form** with Zod validation for form handling
- **Vite** as the build tool and development server

## Backend Architecture
- **Express.js** server with TypeScript
- RESTful API design with dedicated routes for contact submissions and ROI calculations
- **In-memory storage** implementation with interface abstraction for future database migration
- Request/response logging middleware for API monitoring
- Error handling middleware with proper HTTP status codes

## Data Layer
- **Drizzle ORM** configured for PostgreSQL with schema definitions
- **Neon Database** serverless PostgreSQL integration ready
- Schema includes users, contact submissions, and ROI calculations tables
- Zod schemas for runtime validation matching database structure

## UI Component System
- **shadcn/ui** component library with Radix UI primitives
- Custom brand theme with CSS variables for consistent styling
- Responsive design patterns with mobile-first approach
- Toast notifications for user feedback
- Form components with built-in validation states

## Build and Deployment
- **ESBuild** for server-side bundling in production
- **Vite** for client-side building with public asset management
- Development and production environment configurations
- TypeScript compilation with path mapping for clean imports

The architecture supports easy migration from in-memory storage to PostgreSQL through the storage interface abstraction, making it suitable for both development and production deployment scenarios.

# Recent Changes

## December 2024
- Updated company name from "A Automation Company" to "Desk Automate" across all pages and components
- Implemented custom pricing packages:
  - Bronze: £2,000/month - 1 robot, 24/7 execution, 1 simple automation, full support
  - Silver: £4,000/month - 2 robots, 24/7 execution, 2 simple automations, full support
  - Gold: £6,000/month - 3 robots, 24/7 execution, 3 simple automations, full support
- Updated all imagery to focus on UiPath automation dashboards and RPA workflow visualizations
- Fixed navigation HTML structure issues by replacing nested anchor tags with span elements

# External Dependencies

## Database and ORM
- **Neon Database** - Serverless PostgreSQL database hosting
- **Drizzle ORM** - Type-safe database ORM with schema management
- **Drizzle Kit** - Database migrations and schema pushing

## UI and Styling
- **Radix UI** - Headless component library for accessibility
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Pre-built component system
- **Lucide React** - Icon library

## Forms and Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation library
- **Hookform Resolvers** - Integration between React Hook Form and Zod

## State Management
- **Tanstack React Query** - Server state management and caching
- **Wouter** - Lightweight routing library

## Development Tools
- **Vite** - Build tool and development server
- **TypeScript** - Static type checking
- **ESBuild** - JavaScript bundler for production builds

## External Services
- **Google Fonts** - Inter font family for typography
- **Unsplash** - Stock photography for hero and industry sections (via CDN links)
- **Replit** - Development environment integration with banner and error overlay plugins