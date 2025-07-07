# 🛒 E-Commerce Website

A modern, fully responsive e-commerce web application built with **React**, **Vite**, and **Tailwind CSS**.  
Features a beautiful UI, robust theme management (light/dark/system), shopping cart, wishlist, authentication context, and more.

---

## ✨ Features

- **Modern UI**: Glassmorphism, gradients, smooth transitions, and responsive design.
- **Theme Management**: Light, dark, and system themes with persistent user preference.
- **Product Catalog**: Browse, search, filter, and sort products.
- **Shopping Cart**: Add, remove, and manage cart items.
- **Wishlist**: Save favorite products for later.
- **Authentication Context**: Easily extendable for real user auth.
- **Profile & Account Pages**: User profile management.
- **404 Not Found**: Friendly error page.
- **Fully Responsive**: Works on all devices.

---

## 🚀 Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies
```sh
npm install
```

### 3. Start the development server
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌓 Theme Management

- Toggle between **Light**, **Dark**, and **System** themes using the button in the navbar.
- Theme preference is saved and syncs with your OS if set to "System".

---

## 🌓 ScreenShots

- welcome.png
- welcome2.png
- shop.png
- shop2.png
- signup.png
  
---

## 🗂️ Project Structure

```
app/
  components/      # Reusable UI components (Navbar, ProductCard, etc.)
  context/         # React Contexts (Auth, Cart, Wishlist, Theme)
  data/            # Static product data (JSON)
  pages/           # Main pages (Home, Shop, Cart, etc.)
  routes/          # Route definitions
  app.css          # Global styles (Tailwind + custom)
  App.tsx          # Main app component
  main.tsx         # Entry point
public/
  images/          # Product images
index.html         # Main HTML file
tailwind.config.js # Tailwind CSS config
postcss.config.js  # PostCSS config
vite.config.mjs    # Vite config
```

---

## 📦 Build for Production

```sh
npm run build
```

---

## 📝 Customization

- **Add products:** Edit `app/data/products.json`.
- **Change theme colors:** Edit `tailwind.config.js` and `app/app.css`.
- **Add new pages/components:** Use the modular structure in `app/`.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📄 License

MIT
