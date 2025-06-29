import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';
export function App() {
  return <ShopProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ShopProvider>;
}