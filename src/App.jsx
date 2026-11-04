import React, { useState, useEffect } from 'react';
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

// Admin CMS
import AdminPanel from './components/AdminPanel';
import { loadSiteContent, saveSiteContent, resetSiteContent } from './data/initialContent';

export default function App() {
  // CMS Content State with localStorage persistence
  const [siteContent, setSiteContent] = useState(() => loadSiteContent());

  // Admin View State based on URL path '/admin' or hash '#admin'
  const [isAdmin, setIsAdmin] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      return path.startsWith('/admin') || hash === '#admin';
    }
    return false;
  });

  // Keep route synced with browser back/forward and hash changes
  useEffect(() => {
    const handleLocationCheck = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      setIsAdmin(path.startsWith('/admin') || hash === '#admin');
    };

    window.addEventListener('popstate', handleLocationCheck);
    window.addEventListener('hashchange', handleLocationCheck);
    return () => {
      window.removeEventListener('popstate', handleLocationCheck);
      window.removeEventListener('hashchange', handleLocationCheck);
    };
  }, []);

  const goToAdmin = () => {
    try {
      window.history.pushState({}, '', '/admin');
    } catch (e) {
      window.location.hash = '#admin';
    }
    setIsAdmin(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exitAdmin = () => {
    try {
      window.history.pushState({}, '', '/');
    } catch (e) {
      window.location.hash = '';
    }
    setIsAdmin(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveContent = (updatedContent) => {
    saveSiteContent(updatedContent);
    setSiteContent(updatedContent);
  };

  const handleResetContent = () => {
    const reset = resetSiteContent();
    setSiteContent(reset);
  };

  // Cart State
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

  // If in Admin Mode, show the Admin CMS Panel
  if (isAdmin) {
    return (
      <AdminPanel
        content={siteContent}
        onSave={handleSaveContent}
        onReset={handleResetContent}
        onExitAdmin={exitAdmin}
      />
    );
  }

  // Regular Visitor Mode
  return (
    <div className="min-h-screen bg-[#120B08] text-[#F5EDE4] selection:bg-[#C5A059] selection:text-[#1A0E08]">
      
      {/* Top Navbar */}
      <Navbar
        brand={siteContent.brand}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenAdmin={goToAdmin}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />

      {/* Main Sections matching the 4 screenshots */}
      <main>
        {/* Screenshot 1: Hero Section with kinetic splash cup & badges */}
        <HeroSection
          hero={siteContent.hero}
          onOpenDelivery={() => setIsDeliveryOpen(true)}
          onExploreClick={handleExploreClick}
        />

        {/* Screenshot 2: About Us with 3 feature cards & metrics */}
        <AboutSection
          about={siteContent.about}
          onOpenStory={() => setIsStoryOpen(true)}
        />

        {/* Screenshot 3 Top: Elevated Coffee & Table Reservation Banner */}
        <InteriorBanner
          atmosphere={siteContent.atmosphere}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Screenshot 3 Bottom: Signature Coffee Collection Carousel */}
        <SignatureCollection
          coffees={siteContent.signatureCoffees}
          onAddToCart={handleAddToCart}
        />

        {/* Screenshot 4 Top: Popular Collections with Filter Tabs */}
        <PopularCollections
          collectionsData={siteContent.popularCollections}
          onSelectCollection={(col) => {
            const el = document.getElementById('collection');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Screenshot 4 Middle: Newsletter Subscription Banner */}
        <Newsletter newsletter={siteContent.newsletter} />
      </main>

      {/* Screenshot 4 Bottom: Footer with Mirpur, Dhaka Details */}
      <Footer
        contact={siteContent.contact}
        brand={siteContent.brand}
        onOpenAdmin={goToAdmin}
      />

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
