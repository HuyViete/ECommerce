import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavbarDiv } from './components/NavbarDiv';
import { FooterDiv } from './components/FooterDiv';
import { BenchmarkInspector } from './components/BenchmarkInspector';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

/**
 * App Component:
 * - Pure Client-Side Rendering with React Router
 * - ZERO document.title or meta changes on route transitions (Title stays frozen as "React App")
 * - 100% div-based structure with zero <header>, <main>, <nav>, or <footer> tags
 */
export function App() {
  const [cart, setCart] = useState([
    {
      id: "celestial-fluff-pro",
      name: "AudioFluff Celestial Ultra 9000",
      price: 389.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      category: "Over-Ear Wireless"
    }
  ]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-unsemantic-shell min-h-screen flex flex-col bg-[#0a0a0f] text-slate-100 selection:bg-purple-600 selection:text-white">
      
      {/* Unsemantic Header Replacement */}
      <NavbarDiv cartCount={totalCartCount} />

      {/* Main Content Area - <div> instead of <main> */}
      <div className="app-main-content-div flex-1">
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<CatalogPage onAddToCart={handleAddToCart} />} />
          <Route path="/products/:id" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cart={cart} 
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveFromCart={handleRemoveFromCart}
                onClearCart={handleClearCart}
              />
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <CheckoutPage 
                cart={cart} 
                onClearCart={handleClearCart} 
              />
            } 
          />
        </Routes>
      </div>

      {/* Unsemantic Footer Replacement */}
      <FooterDiv />

      {/* Educational Research Benchmark Inspector HUD */}
      <BenchmarkInspector />

    </div>
  );
}

export default App;
