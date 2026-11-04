import React, { useState } from 'react';
import { POPULAR_COLLECTIONS } from '../data/coffeeData';
import { Image as ImageIcon } from 'lucide-react';

export default function PopularCollections({ onSelectCollection }) {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Coffee', 'Drinks', 'Food', 'Ambience', 'Desserts'];

  const collections = POPULAR_COLLECTIONS[activeTab] || POPULAR_COLLECTIONS['All'];

  return (
    <section id="popular" className="py-20 bg-[#120B08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-left mb-8">
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#F5EDE4] font-normal tracking-tight">
            Popular Collections
          </h2>
        </div>

        {/* Filter Tabs matching Screenshot 4 */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#E8D8C8] text-[#1A0E08] font-semibold shadow-md'
                  : 'bg-[#1E120B] text-[#A69588] hover:text-[#F5EDE4] hover:bg-[#2A180E] border border-[#382217]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3-Column Bento Cards Grid (Matching Screenshot 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection && onSelectCollection(col)}
              className="bg-[#1A100A] border border-[#3B2418] hover:border-[#C5A059]/40 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between group cursor-pointer"
            >
              
              {/* Main Showcase Image */}
              <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden bg-[#24160E] mb-3">
                <img
                  src={col.mainImage}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = col.fallbackMain;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140C08]/70 via-transparent to-transparent" />
              </div>

              {/* 3 Thumbnail Previews Row */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {col.thumbs.map((thumb, idx) => (
                  <div
                    key={idx}
                    className="h-16 rounded-lg overflow-hidden border border-[#3B2418] bg-[#24160E] group/thumb"
                  >
                    <img
                      src={thumb.img}
                      alt={thumb.name}
                      className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Card Footer: Category Title on Left, Count on Right (Matching Screenshot 4) */}
              <div className="pt-2 border-t border-[#3B2418]/60 flex items-center justify-between">
                <span className="font-editorial text-lg text-[#F5EDE4] group-hover:text-[#C5A059] transition-colors">
                  {col.title}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-[#A69588] font-mono">
                  <ImageIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{col.count}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
