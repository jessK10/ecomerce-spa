# 🛍️ TechXpress - Modern E-commerce SPA

TechXpress is a modern single-page eCommerce website built using **React**, **React Router**, and **Bootstrap 5**. It showcases a clean UI, theme toggle, routing, and basic eCommerce layout—all without any backend or external data.

## 🚀 Features

- ⚛️ Built with **React + Vite**
- 🔀 Client-side routing using **React Router DOM**
- 🌓 **Dark/Light mode** toggle
- 🛒 Interactive **product cards** with hover effects and wishlist icons
- 📱 Fully responsive layout using **Bootstrap 5**
- 🧭 Includes 4 main pages:
  - Home (`/`)
  - Login (`/login`)
  - Sign Up (`/signup`)
  - 404 Error Page (`*`)
- 🧱 Clean modular code structure

---

## 📁 Project Structure

ECOMMERCE-SPA/
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg                 # (example asset, optional)
│
│   ├── components/
│   │   ├── Footer.jsx               # Footer of the site
│   │   ├── Header.jsx               # Header with navigation and theme toggle
│   │   └── ProductCard.jsx          # Reusable card for each product
│
│   ├── pages/
│   │   ├── Cart.jsx                 # Shopping cart page (static for now)
│   │   ├── Home.jsx                 # Hero section + product cards
│   │   ├── Login.jsx                # Login form
│   │   ├── NotFound.jsx             # 404 Error page
│   │   └── Signup.jsx               # Signup form
│
│   ├── App.jsx                      # Router setup + layout wrapper
│   ├── App.css                      # Optional component-specific styles
│   ├── index.css                    # Global CSS (dark mode, product card styling, etc.)
│   └── main.jsx                     # React DOM root file
│
├── .gitignore                       # Standard node/git ignore list
├── eslint.config.js                 # Linting config (if used)
├── index.html                       # HTML entry point (Vite)
├── package.json                     # Project dependencies
├── package-lock.json                # Dependency lock file
├── README.md                        # Project overview (you have it now!)
└── vite.config.js                   # Vite dev server + build config


---

## 🧪 Demo

[![Netlify Badge](https://img.shields.io/badge/Live-Netlify-brightgreen?style=flat-square&logo=netlify)](https://your-netlify-link.netlify.app)  
> *(Replace the above link after deployment)*

---

## 📦 How to Run Locally

```bash
git clone https://github.com/your-username/techxpress.git
cd techxpress
npm install
npm run dev



Then open http://localhost:5173