# Coffee Peyala - Specialty Coffee House and Roastery Web Application

A modern, responsive web application and digital storefront for Coffee Peyala, an artisanal coffee house and micro-roastery based in Mirpur, Dhaka, Bangladesh. Built with React 19, Vite 6, and Tailwind CSS v4.

---

## Project Overview

Coffee Peyala is an interactive digital storefront engineered to reflect the ambiance, craft, and menu of a specialty coffee roastery. The application provides customers with a seamless browsing experience, featuring interactive menu exploration, a real-time table booking reservation engine, an animated sliding cart drawer with currency calculations in Bangladeshi Taka (BDT), and interactive engagement workflows.

---

## Key Features

- Interactive Hero Experience: Custom-engineered visual showcase with atmospheric steam particle animations and floating roasted coffee bean physics.
- Bento Grid Heritage Showcase: Information architecture highlighting coffee bean origin, roasting profiles, sustainability commitments, and key operational metrics.
- Real-Time Table Reservation Engine: Interactive modal allowing guests to schedule dine-in visits by specifying reservation date, time slots, party size, and seating preferences (e.g., Lounge, Window, Espresso Bar).
- Signature Menu Carousel: Smooth horizontal drag-and-scroll carousel enabling fast navigation across signature brews, cold drinks, and manual pours.
- Dynamic Category Filtering: Real-time categorization and gallery tabs covering Coffee, Handcrafted Drinks, Bakery Items, Desserts, and Roastery Ambience.
- Slide-In Cart and Checkout Drawer: Responsive sliding drawer with real-time price summation, item quantity increment/decrement controls, delivery fee calculation, and order dispatch workflow.
- Newsletter Validation with Visual Feedback: Client-side email format validation with integrated canvas confetti visual triggers upon successful subscription.
- Responsive and Accessible Layout: Mobile-first responsive implementation adhering to modern semantic HTML standards and touch ergonomics.

---

## Tech Stack

- Frontend Framework: React 19
- Build Tool and Dev Server: Vite 6
- Styling: Tailwind CSS v4 (using the `@tailwindcss/vite` plugin)
- Component Icons: Lucide React
- Visual Effects: Canvas Confetti
- Type Checking: TypeScript / Modern ECMAScript Modules

---

## Project Structure

```
Coffee-Shop-Website/
├── public/
│   ├── _redirects             # SPA routing rewrite rules for edge hosting
│   └── assets/                # Photography, roastery cup assets, and textures
├── src/
│   ├── components/            # Reusable UI modules (Hero, Menu, Bento, Modal)
│   ├── data/                  # Menu items, coffee origins, and pricing datasets
│   ├── App.jsx / App.tsx      # Main application container and view routing
│   ├── index.css              # Global styles and Tailwind CSS v4 directives
│   └── main.jsx / main.tsx    # React application root entry point
├── index.html                 # Single-page HTML entry point
├── package.json               # Node.js project dependencies and run scripts
├── vite.config.js             # Vite configuration and Tailwind plugin hooks
└── README.md                  # Project documentation
```

---

## Installation and Setup Guide

### Prerequisites
- Node.js version 18.x or higher
- npm version 9.x or higher (or pnpm / yarn)

### 1. Clone the Repository
```bash
git clone https://github.com/labibfohayer/Coffee-Shop-Website.git
cd Coffee-Shop-Website
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to view the live development environment with Hot Module Replacement (HMR).

### 4. Build for Production
To generate an optimized, minified production build:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory, ready for deployment to any static CDN host (e.g., Cloudflare Pages, Vercel, Netlify).

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## Production Deployment

The project is pre-configured with a `public/_redirects` file for single-page application routing on modern edge networks:

- **Cloudflare Pages / Netlify / Vercel**:
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Node Version: `>=18`

---

## Author and Contact

Developed by **Labib Fohayer**.

- GitHub: [https://github.com/labibfohayer](https://github.com/labibfohayer)
- Flagship Roastery: Section 10, Mirpur, Dhaka 1216, Bangladesh
- Inquiries: Available via GitHub repository issues or portfolio contact

---

## License

This project is licensed under the MIT License. Feel free to reference the architecture and code for educational or development purposes.
