import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import InteriorBanner from './components/InteriorBanner';
import SignatureCollection from './components/SignatureCollection';
import PopularCollections from './components/PopularCollections';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Modals & Drawers
import CartDrawer from './components/CartDrawer';
import ReservationModal from './components/ReservationModal';
import DeliveryModal from './components/DeliveryModal';
import SearchModal from './components/SearchModal';
import StoryModal from './components/StoryModal';
import AuthModal from './components/AuthModal';

export default function App() {
  const [cart, setCart] = useState([
    {
      id: 'sig-1',
      name: 'Velvet Flat White',
      price: 360,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  // Modal states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Cart actions
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#120B08] text-[#F5EDE4] selection:bg-[#C5A059] selection:text-[#1A0E08]">
      
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />

      {/* Main Sections matching the 4 screenshots */}
      <main>
        {/* Screenshot 1: Hero Section with kinetic splash cup & badges */}
        <HeroSection
          onOpenDelivery={() => setIsDeliveryOpen(true)}
          onExploreClick={handleExploreClick}
        />

        {/* Screenshot 2: About Us with 3 feature cards & metrics */}
        <AboutSection
          onOpenStory={() => setIsStoryOpen(true)}
        />

        {/* Screenshot 3 Top: Elevated Coffee & Table Reservation Banner */}
        <InteriorBanner
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Screenshot 3 Bottom: Signature Coffee Collection Carousel */}
        <SignatureCollection
          onAddToCart={handleAddToCart}
        />

        {/* Screenshot 4 Top: Popular Collections with Filter Tabs */}
        <PopularCollections
          onSelectCollection={(col) => {
            const el = document.getElementById('collection');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Screenshot 4 Middle: Newsletter Subscription Banner */}
        <Newsletter />
      </main>

      {/* Screenshot 4 Bottom: Footer with Mirpur, Dhaka Details */}
      <Footer />

      {/* Global Interactive Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <DeliveryModal
        isOpen={isDeliveryOpen}
        onClose={() => setIsDeliveryOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

    </div>
  );
}
