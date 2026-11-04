import React from 'react';
import { ChevronRight, Sparkles, MapPin } from 'lucide-react';

export default function HeroSection({ hero = {}, onOpenDelivery, onExploreClick }) {
  const {
    tagline = 'Mirpur, Dhaka • Artisanal Roastery',
    headlinePart1 = 'A slow',
    headlinePart2 = 'ritual,',
    headlineItalic = 'poured with intent.',
    miniPreviewImage = '/assets/mini_espresso_preview.png',
    description = 'Coffee Peyala is a premium specialty coffee house in Mirpur, Dhaka — handcrafting single-origin espresso, delicate pour-overs, and signature brews.',
    exploreBtnText = 'EXPLORE MORE',
    deliveryBtnText = 'GET DELIVERY',
    heroCupImage = '/assets/coffee_peyala_cup.png',
    originFootnote = 'Origin: Ethiopia • Colombia • Kenya',
    tickerBadges = [
      'Best Coffee Shop 2025',
      'Q-Grader Baristas',
      'Direct Trade Origins',
      'Featured in Monocle'
    ]
  } = hero;
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#120B08]">
      
      {/* Ambient background glow & radial gradient */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-[#3B2214]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#633A20]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle floating coffee bean decorations */}
      <div className="absolute top-36 left-12 w-6 h-9 rounded-full bg-[#2A180E] border border-[#482A1B] rotate-45 opacity-60 blur-[0.5px] animate-float-slow hidden lg:block shadow-xl" />
      <div className="absolute top-1/2 left-1/4 w-8 h-11 rounded-full bg-[#24150D] border border-[#482A1B] -rotate-12 opacity-50 blur-[1px] animate-float-reverse hidden lg:block shadow-xl" />
      <div className="absolute bottom-32 left-1/3 w-7 h-10 rounded-full bg-[#2E1A10] border border-[#482A1B] rotate-30 opacity-70 animate-float-slow hidden sm:block" />

      {/* Main Container matching the screenshot's rounded card aesthetic */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Copy */}
          <div className="lg:col-span-7 space-y-8 text-left z-10">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#261710]/90 border border-[#44281B] text-[#C5A059] text-xs font-medium tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>{tagline}</span>
            </div>

            {/* Editorial Serif Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5EDE4] leading-[1.1] sm:leading-[1.12]">
              {headlinePart1}{' '}
              <span className="inline-flex items-center align-middle mx-1.5 sm:mx-2.5 px-2 py-1 rounded-xl bg-[#261710] border border-[#44281B] shadow-2xl hover:scale-105 transition-transform duration-300">
                <img
                  src={miniPreviewImage}
                  alt="Espresso extraction"
                  className="w-14 sm:w-20 h-8 sm:h-10 object-cover rounded-lg shadow-inner"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=120&q=80';
                  }}
                />
              </span>{' '}
              {headlinePart2}
              <br />
              <span className="italic font-light text-[#E8D8C8]">{headlineItalic}</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#A69588] max-w-xl leading-relaxed font-light">
              {description}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="group flex items-center gap-2.5 bg-[#261710] hover:bg-[#382217] text-[#F5EDE4] hover:text-[#FFFFFF] border border-[#4E2E1F] text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full shadow-lg hover:shadow-[#C5A059]/10 transition-all duration-300 cursor-pointer"
              >
                <span>{exploreBtnText}</span>
                <ChevronRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenDelivery}
                className="flex items-center gap-2 bg-transparent hover:bg-[#261710]/40 text-[#E8D8C8] hover:text-[#FFFFFF] border border-[#5A3828] text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
              >
                <span>{deliveryBtnText}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Branded Coffee Cup & Kinetic Splash */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#C5A059]/10 via-[#3B2214]/30 to-transparent rounded-full filter blur-3xl pointer-events-none" />

            {/* Hero Splash Cup Composition */}
            <div className="relative group max-w-[340px] sm:max-w-[400px] w-full">
              
              {/* Animated Rising Steam Particles */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 pointer-events-none overflow-visible">
                <div className="steam-particle absolute w-6 h-14 bg-gradient-to-t from-transparent via-[#F5EDE4]/15 to-transparent rounded-full blur-md left-2" />
                <div className="steam-particle absolute w-8 h-18 bg-gradient-to-t from-transparent via-[#C5A059]/20 to-transparent rounded-full blur-lg left-8 [animation-delay:1.2s]" />
                <div className="steam-particle absolute w-5 h-16 bg-gradient-to-t from-transparent via-[#F5EDE4]/15 to-transparent rounded-full blur-md left-14 [animation-delay:2.1s]" />
              </div>

              {/* Main Cup Image */}
              <img
                src={heroCupImage}
                alt="Coffee Peyala Specialty Splash Cup"
                className="relative z-10 w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] transform group-hover:scale-102 transition-transform duration-500 rounded-2xl"
                onError={(e) => {
                  e.target.src = '/assets/coffee_peyala_hero_splash.jpg';
                }}
              />

              {/* Floating Coffee Beans around cup */}
              <div className="absolute -top-4 -right-4 w-6 h-9 rounded-full bg-[#20120B] border border-[#482A1B] rotate-12 opacity-80 shadow-2xl animate-float-slow" />
              <div className="absolute bottom-16 -left-6 w-7 h-10 rounded-full bg-[#1A0E08] border border-[#3E2316] -rotate-45 opacity-80 shadow-2xl animate-float-reverse" />
              <div className="absolute top-24 -left-3 w-5 h-7 rounded-full bg-[#2C180E] border border-[#4A2B1C] rotate-35 opacity-75 shadow-lg animate-float-slow" />

              {/* Subtle Origin Footnote */}
              <div className="absolute -bottom-6 right-0 text-right text-[11px] font-mono text-[#A69588]/80 tracking-widest uppercase">
                <span>{originFootnote}</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Ticker Badges Bar (Matching Screenshot 1) */}
      <div className="mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#180E09]/80 backdrop-blur-md border border-[#3B2418]/70 rounded-2xl py-4 px-6 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-[#3B2418]/60">
            {tickerBadges.map((badge, idx) => (
              <div key={idx} className="py-2 md:py-0 px-2 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span className="font-editorial text-base sm:text-lg text-[#E8D8C8] tracking-wide">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
