import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Coffee } from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenCart, onOpenAuth, cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#collection' },
    { name: 'Gallery', href: '#atmosphere' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (name, href) => {
    setActiveLink(name);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#140C08]/90 backdrop-blur-md border-b border-[#3B2418]/60 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#120B08]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <a
            href="#home"
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <img
              src="/assets/logo.png"
              alt="Coffee Peyala Official Logo"
              className="w-11 h-11 object-contain rounded-full shadow-lg group-hover:scale-108 transition-transform duration-300 ring-1 ring-[#C5A059]/40"
            />
            <div>
              <div className="font-editorial text-xl sm:text-2xl font-bold tracking-wide text-[#F5EDE4] group-hover:text-[#C5A059] transition-colors leading-tight">
                Coffee Peyala
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#A69588] font-medium">
                EST. SPECIALTY • 2026
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name, link.href)}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 cursor-pointer ${
                  activeLink === link.name
                    ? 'text-[#F5EDE4] font-semibold'
                    : 'text-[#A69588] hover:text-[#F5EDE4]'
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Action Icons & Sign In */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-[#A69588] hover:text-[#F5EDE4] hover:bg-[#2A1A12] transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shopping Cart Bag */}
            <button
              onClick={onOpenCart}
              className="p-2.5 rounded-full text-[#A69588] hover:text-[#F5EDE4] hover:bg-[#2A1A12] transition-colors relative cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C5A059] text-[#1A0E08] text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Sign In Button */}
            <button
              onClick={onOpenAuth}
              className="bg-[#261710] hover:bg-[#341F16] text-[#E8D8C8] hover:text-[#FFFFFF] border border-[#44281B] text-xs font-medium px-5 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-sm"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCart}
              className="p-2 text-[#A69588] relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C5A059] text-[#1A0E08] text-[9px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F5EDE4] hover:bg-[#2A1A12]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#160D08]/98 border-b border-[#3B2418] px-6 pt-4 pb-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name, link.href)}
                className={`text-left text-base font-medium py-2 transition-colors ${
                  activeLink === link.name ? 'text-[#C5A059] font-bold' : 'text-[#A69588]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#3B2418] flex items-center justify-between">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}
              className="flex items-center gap-2 text-sm text-[#A69588]"
            >
              <Search className="w-4 h-4" />
              <span>Search menu</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}
              className="bg-[#C5A059] text-[#1A0E08] text-xs font-semibold px-4 py-1.5 rounded-full"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
