# Aryan Sharma - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, education, and certifications as a Full-Stack Developer and Cybersecurity Enthusiast.

## 🌟 Features

- **Modern Design**: Dark theme with warm accent colors (#FF6F61, #DAA520, #F5E8D8)
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations and hover effects
- **Professional Sections**:
  - Hero section with profile photo
  - Education background
  - Featured projects showcase
  - Technical skills categorization
  - Professional certifications
  - Contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Development**: React 19, React DOM 19

## 📦 Dependencies

### Core Dependencies
- Next.js 15.2.4
- React 19
- TypeScript 5
- Tailwind CSS 3.4.17
- Lucide React (Icons)
- Radix UI Components
- Class Variance Authority
- Clsx & Tailwind Merge

### UI Components
- shadcn/ui components (Button, Card, Badge, etc.)
- Custom styling with Tailwind CSS variables
- Responsive design utilities

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main portfolio page
├── components/
│   └── ui/                  # Reusable UI components
├── hooks/
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── images/              # Static images (profile photo, etc.)
├── styles/
│   └── globals.css          # Additional global styles
└── Configuration files
```

## 🎨 Design System

### Color Palette
- **Background**: `#1C1C1C` (Dark charcoal)
- **Foreground**: `#F5E8D8` (Warm cream)
- **Primary**: `#FF6F61` (Coral red)
- **Secondary**: `#DAA520` (Gold)
- **Accent**: `#FF4500` (Orange red)
- **Muted**: `#2A2A2A` (Dark gray)

### Typography
- **Sans Serif**: Geist Sans
- **Monospace**: Geist Mono
- **Font Weights**: Light, Regular, Medium, Bold

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

## 🔧 Configuration

### Tailwind Configuration
Custom colors and utilities are defined in `tailwind.config.ts` with CSS variables for easy theme switching.

### Next.js Configuration
- TypeScript and ESLint errors ignored during build (development convenience)
- Image optimization disabled for static export compatibility

## 📋 Content Sections

1. **Hero Section**
   - Profile photo with animated border
   - Name and title
   - Social links (GitHub, LinkedIn, Email)

2. **Education**
   - SRM Institute of Science and Technology (B.E. Computer Science)
   - Fr. Agnel School (Senior Secondary)

3. **Featured Projects**
   - Smart Automated Classroom System
   - Secret Service Management System
   - Hospital Navigation System

4. **Technical Skills**
   - Programming Languages
   - Frontend & Backend Technologies
   - Frameworks & Tools

5. **Certifications**
   - GitHub Foundations
   - Alteryx Designer Core
   - FCA Cybersecurity

## 🌐 Deployment

The project is configured for easy deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages (with static export)

### Build for Production
```bash
pnpm build
```
---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
