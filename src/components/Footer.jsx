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

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#100906] border-t border-[#3B2418]/70 pt-16 pb-12 text-[#A69588]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2A180E]">
          
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8D8C8] text-[#1E110A] flex items-center justify-center font-editorial font-bold text-xl shadow-md">
                C
              </div>
              <div>
                <div className="font-editorial text-2xl font-bold tracking-wide text-[#F5EDE4] leading-tight">
                  Coffee Peyala
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#A69588] font-medium">
                  EST. SPECIALTY • 2026
                </div>
              </div>
            </div>

            <p className="text-xs text-[#A69588] leading-relaxed max-w-sm font-light">
              Mirpur’s premier artisanal coffee house. Dedicated to the craft of slow-poured single origins and cozy community conversations in Dhaka.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>Plot 24, Road 3, Block-A, Section-10, Mirpur, Dhaka 1216</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>+880 1712-345678 / +880 1823-998877</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>mirpur@coffeepeyala.com</span>
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
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1C110A] hover:bg-[#C5A059] hover:text-[#1A0E08] border border-[#3B2418] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1C110A] hover:bg-[#C5A059] hover:text-[#1A0E08] border border-[#3B2418] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://twitter.com"
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
              <span className="text-[11px] block text-[#A69588] pt-1">Saturday – Friday: 8:00 AM – 11:30 PM</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A6A5E] gap-4">
          <p>© 2026 Coffee Peyala (কফি পেয়ালা). All rights reserved.</p>
          <p className="font-mono text-[11px]">Handcrafted with passion in Mirpur, Dhaka ☕</p>
        </div>

      </div>
    </footer>
  );
}
