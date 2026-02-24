# Paradise Nursery

A modern, responsive e-commerce frontend for a houseplant nursery built with React and Vite.

## Features

- **Modern Glassmorphism UI**: A cohesive, nature-inspired design system with smooth transitions and a lush background overlay.
- **Global State Management**: Built-in Context API (`CartContext`) for seamless cart state synchronization across components.
- **Routing**: Client-side routing with `react-router-dom` navigating between the Landing Page, Product Listing, and Shopping Cart.
- **Responsive Layout**: Adapts gracefully to mobile, tablet, and desktop viewports using CSS Grid and Flexbox.
- **Interactive Cart**:
  - Dynamically calculated totals (items and cost).
  - Add/Remove functionality.
  - Automatic removal of items when quantity drops to 0.
  - Real-time synchronization of "Add to Cart" buttons on the product page.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Vanilla CSS with modern features (CSS Variables, Flexbox/Grid, Backdrop Filter)
- **State**: React Context API

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MahmoudEsawi/Paradise-Nursery.git
   cd Paradise-Nursery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173` or `http://localhost:5174`).

## Project Structure

```
src/
├── components/          # Reusable UI components (Header, PlantCard, CartItemCard)
├── context/             # Global state (CartContext)
├── data/                # Seed plant data
├── pages/               # Route components (LandingPage, ProductListingPage, CartPage)
├── App.jsx              # Main application component & routing setup
├── index.css            # Global styles and CSS variables
└── main.jsx             # React entry point
```
