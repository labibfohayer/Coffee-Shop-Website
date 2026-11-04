import React from 'react';
import { ChevronRight, CalendarCheck, Clock, Users } from 'lucide-react';

export default function InteriorBanner({ atmosphere = {}, onOpenReservation }) {
  const {
    headline = 'Elevated Coffee',
    subheadline = 'Where Every sip Feels Like Home',
    buttonText = 'Reserve Your Table',
    backgroundImage = '/assets/cafe_interior.png',
    pills = [
      '8:00 AM – 11:30 PM',
      'Private Pods & Co-Working',
      'Instant Confirmation'
    ]
  } = atmosphere;

  return (
    <section id="atmosphere" className="relative py-12 bg-[#120B08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width Interior Showcase Card matching Screenshot 3 */}
        <div className="relative rounded-3xl overflow-hidden border border-[#482A1B] shadow-2xl min-h-[460px] sm:min-h-[520px] flex items-center justify-center text-center group">
          
          {/* Background Image with Dark Vignette */}
          <img
            src={backgroundImage}
            alt="Coffee Peyala Mirpur Café Atmosphere"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80';
            }}
          />

          {/* Warm Dark Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120B08]/95 via-[#1A0E08]/60 to-[#120B08]/40" />
          <div className="absolute inset-0 bg-[#000000]/25" />

          {/* Centered Overlay Content */}
          <div className="relative z-10 max-w-2xl px-6 py-12 space-y-6">
            
            {/* Main Headline */}
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5EDE4] tracking-tight drop-shadow-md">
              {headline}
            </h2>

            {/* Sub-headline */}
            <p className="font-editorial italic text-lg sm:text-2xl text-[#E8D8C8] font-light tracking-wide drop-shadow">
              {subheadline}
            </p>

            {/* Action CTA Button */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={onOpenReservation}
                className="group inline-flex items-center gap-3 bg-[#E8D8C8] hover:bg-[#FFFFFF] text-[#1A0E08] font-semibold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-2xl hover:shadow-[#C5A059]/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>{buttonText}</span>
                <ChevronRight className="w-4 h-4 text-[#1A0E08] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Micro-Pills */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#E8D8C8]/80 font-mono">
              <span className="flex items-center gap-1.5 bg-[#180E09]/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#482A1B]">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                {pills[0] || '8:00 AM – 11:30 PM'}
              </span>
              <span className="flex items-center gap-1.5 bg-[#180E09]/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#482A1B]">
                <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                {pills[1] || 'Private Pods & Co-Working'}
              </span>
              <span className="flex items-center gap-1.5 bg-[#180E09]/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#482A1B]">
                <CalendarCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                {pills[2] || 'Instant Confirmation'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
