import React, { useRef } from 'react';
import { SIGNATURE_COFFEES } from '../data/coffeeData';
import { ChevronLeft, ChevronRight, Plus, Star, Sparkles } from 'lucide-react';

export default function SignatureCollection({ coffees, onAddToCart }) {
  const items = coffees && coffees.length > 0 ? coffees : SIGNATURE_COFFEES;
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="collection" className="relative py-20 bg-[#120B08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left Title & Right Description (Matching Screenshot 3) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#3B2418]/60 pb-8">
          
          <div className="space-y-3 max-w-xl text-left">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Featured collection
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#F5EDE4] font-normal tracking-tight leading-tight">
              Discover Our Signature Coffee Collection
            </h2>
          </div>

          <div className="max-w-md text-left md:text-right space-y-4">
            <p className="text-xs sm:text-sm text-[#A69588] font-light leading-relaxed">
              From bold espresso blends to smooth handcrafted lattes, every cup is carefully prepared using premium beans sourced from the world's finest coffee-growing regions.
            </p>

            {/* Carousel navigation arrows */}
            <div className="flex items-center gap-2 justify-start md:justify-end">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-full bg-[#1F130C] hover:bg-[#341F14] border border-[#482A1B] text-[#E8D8C8] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous items"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-full bg-[#1F130C] hover:bg-[#341F14] border border-[#482A1B] text-[#E8D8C8] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next items"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Horizontal Scrollable Collection Container matching Screenshot 3 cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[240px] sm:w-[280px] bg-[#1A100A] border border-[#3B2418] hover:border-[#C5A059]/50 rounded-2xl overflow-hidden group transition-all duration-300 shadow-xl snap-start flex flex-col justify-between"
            >
              
              {/* Product Card Top: Image with Rounded Cutout & Badge */}
              <div className="relative p-3">
                <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden bg-[#24160E]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140C08]/80 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-2.5 left-2.5 bg-[#140C08]/85 backdrop-blur-md text-[#C5A059] border border-[#482A1B] text-[10px] font-semibold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                    {item.badge}
                  </span>

                  {/* Rating */}
                  <div className="absolute top-2.5 right-2.5 bg-[#140C08]/85 backdrop-blur-md text-[#F5EDE4] text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#482A1B]">
                    <Star className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>

              {/* Product Card Bottom: Info & Quick Add */}
              <div className="p-4 pt-1 space-y-2.5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono tracking-wider text-[#A69588] uppercase">
                    {item.origin}
                  </div>
                  <h3 className="font-editorial text-xl font-normal text-[#F5EDE4] group-hover:text-[#C5A059] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#A69588] font-light line-clamp-2 pt-1">
                    {item.notes}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#3B2418]/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#A69588] block">Price</span>
                    <span className="font-editorial text-lg font-bold text-[#F5EDE4]">
                      ৳{item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(item)}
                    className="flex items-center gap-1.5 bg-[#2A180E] hover:bg-[#C5A059] text-[#E8D8C8] hover:text-[#1A0E08] border border-[#482A1B] hover:border-[#C5A059] px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer shadow-md"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
