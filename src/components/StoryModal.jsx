import React from 'react';
import { X, Sparkles, Heart } from 'lucide-react';

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm" />

      <div className="relative w-full max-w-lg bg-[#180E09] border border-[#3B2418] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#A69588] hover:text-[#F5EDE4] hover:bg-[#2A180E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4 text-left">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Our Heritage & Roots
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl text-[#F5EDE4]">
            The Journey of Coffee Peyala
          </h3>

          <div className="space-y-3 text-xs sm:text-sm text-[#A69588] font-light leading-relaxed">
            <p>
              In 2018, amidst the bustling rhythm of Mirpur, Dhaka, we asked ourselves a question: <em>Why can’t a neighborhood cup of coffee feel like a contemplative, world-class sanctuary?</em>
            </p>
            <p>
              We began with a restored two-group La Marzocco Linea, beans sourced directly from small family microlots in Sidama and Huila, and an unwavering respect for the ritual of slow extraction. We named it <strong className="text-[#F5EDE4]">"Coffee Peyala" (কফি পেয়ালা)</strong> — evoking the intimacy of sharing a warm clay or porcelain cup with friends.
            </p>
            <p>
              Over the years, our Mirpur roastery has grown into a vibrant haven for artists, thinkers, coders, and coffee connoisseurs. Every bean is small-batch roasted on-site, every milk texture tuned to silky perfection, and every visitor welcomed as family.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#24150D] border border-[#3B2418] flex items-center gap-3 text-xs text-[#E8D8C8]">
            <Heart className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
            <span>"Slow rituals, brewed with heart in Mirpur, Dhaka."</span>
          </div>
        </div>
      </div>
    </div>
  );
}
