<div align="center">
  <h1>🌿 Paradise Nursery</h1>
  <p><strong>A modern, immersive, and responsive e-commerce storefront for premium houseplants.</strong></p>
  
  <p>
    <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
    <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
    <img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
    <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
  </p>
</div>

<br />

## ✨ Features

- 🪴 **Modern Glassmorphism UI**: A beautifully cohesive, nature-inspired design system with smooth CSS transitions layered over a lush background overlay.
- 🛒 **Global State Management**: Built-in React Context API (`CartContext`) for seamless cart state synchronization across components.
- 🚀 **Lightning Fast Routing**: Client-side routing powered by `react-router-dom` navigating between the Landing Page, Product Listing, and Shopping Cart.
- 📱 **Responsive Layout**: Adapts gracefully to mobile, tablet, and desktop viewports using CSS Grid and Flexbox.
- 🛍️ **Interactive Cart Experience**:
  - Dynamically calculated totals (items and cost).
  - Add/Remove quantity controls.
  - Automatic removal of items when quantity drops to 0.
  - Real-time synchronization of "Add to Cart" buttons on the product page.

<br />

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM 6
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Backdrop Filter)
- **State**: React Context API

<br />

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MahmoudEsawi/Paradise-Nursery.git
   cd Paradise-Nursery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the App:**
   Open your browser and visit the local URL shown in your terminal (typically `http://localhost:5173` or `http://localhost:5174`).

<br />

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components (Header, PlantCard, CartItemCard)
├── context/             # Global state (CartContext)
├── data/                # Seed plant data
├── pages/               # Route components (LandingPage, ProductListingPage, CartPage)
├── App.jsx              # Main application component & routing setup
├── index.css            # Global styles and CSS variables
└── main.jsx             # React entry point
```

<br />

<div align="center">
  <p>Built with ❤️ and ☕ for plant lovers everywhere.</p>
</div>

