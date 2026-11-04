import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.46 11.8 5 14.5 5c1.3 0 2.5.1 2.5.1v2.8h-1.4c-1.5 0-2 .9-2 1.9V12h3.2l-.5 3h-2.7v6.8c4.56-.93 8-4.96 8-9.8z"/>
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export default function Footer({ contact = {}, brand = {}, onOpenAdmin }) {
  const {
    tagline = 'Mirpur’s premier artisanal coffee house. Dedicated to the craft of slow-poured single origins and cozy community conversations in Dhaka.',
    address = 'Plot 24, Road 3, Block-A, Section-10, Mirpur, Dhaka 1216',
    phone = '+880 1712-345678 / +880 1823-998877',
    email = 'mirpur@coffeepeyala.com',
    hours = 'Saturday – Friday: 8:00 AM – 11:30 PM',
    facebook = 'https://facebook.com',
    instagram = 'https://instagram.com',
    twitter = 'https://twitter.com',
    copyright = '© 2026 Coffee Peyala (কফি পেয়ালা). All rights reserved.',
    footerNote = 'Handcrafted with passion in Mirpur, Dhaka ☕'
  } = contact;

  const {
    name = 'Coffee Peyala',
    established = 'EST. SPECIALTY • 2026',
    logoUrl = '/assets/logo.png'
  } = brand;

  return (
    <footer id="contact" className="bg-[#100906] border-t border-[#3B2418]/70 pt-16 pb-12 text-[#A69588]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2A180E]">
          
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt={`${name} Official Logo`}
                className="w-12 h-12 object-contain rounded-full shadow-xl ring-1 ring-[#C5A059]/40"
              />
              <div>
                <div className="font-editorial text-2xl font-bold tracking-wide text-[#F5EDE4] leading-tight">
                  {name}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#A69588] font-medium">
                  {established}
                </div>
              </div>
            </div>

            <p className="text-xs text-[#A69588] leading-relaxed max-w-sm font-light">
              {tagline}
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>{email}</span>
              </div>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F5EDE4]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">About Us</a></li>
              <li><a href="#collection" className="hover:text-[#C5A059] transition-colors">Signature Menu</a></li>
              <li><a href="#atmosphere" className="hover:text-[#C5A059] transition-colors">Atmosphere</a></li>
              <li><a href="#popular" className="hover:text-[#C5A059] transition-colors">Collections</a></li>
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="text-[#C5A059] hover:underline font-bold text-left cursor-pointer flex items-center gap-1 mt-1"
                >
                  <span>Admin Panel ⚙️</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Information */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F5EDE4]">
              Information
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">Our Roasting Process</a></li>
              <li><a href="#atmosphere" className="hover:text-[#C5A059] transition-colors">Table Reservations</a></li>
              <li><a href="#home" className="hover:text-[#C5A059] transition-colors">Mirpur Delivery Zones</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">Careers & Baristas</a></li>
              <li><a href="#contact" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media & Hours */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F5EDE4]">
              Social Media
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1C110A] hover:bg-[#C5A059] hover:text-[#1A0E08] border border-[#3B2418] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1C110A] hover:bg-[#C5A059] hover:text-[#1A0E08] border border-[#3B2418] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={twitter}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1C110A] hover:bg-[#C5A059] hover:text-[#1A0E08] border border-[#3B2418] flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon />
              </a>
            </div>

            <div className="pt-4 text-xs">
              <span className="text-[#C5A059] block font-semibold">Opening Hours:</span>
              <span className="text-[11px] block text-[#A69588] pt-1">{hours}</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A6A5E] gap-4">
          <p>{copyright}</p>
          <p className="font-mono text-[11px]">{footerNote}</p>
        </div>

      </div>
    </footer>
  );
}
