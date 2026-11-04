import React, { useState } from 'react';
import { X, Search, Sparkles, Plus } from 'lucide-react';
import { SIGNATURE_COFFEES } from '../data/coffeeData';

export default function SearchModal({ isOpen, onClose, onAddToCart }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = SIGNATURE_COFFEES.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.origin.toLowerCase().includes(query.toLowerCase()) ||
    item.notes.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-xl bg-[#180E09] border border-[#3B2418] rounded-2xl shadow-2xl z-10 overflow-hidden animate-in fade-in duration-200">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#3B2418] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#C5A059]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search coffee, origins, lattes, or beans..."
            className="w-full bg-transparent text-sm sm:text-base text-[#F5EDE4] placeholder-[#7A6A5E] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A69588] hover:text-[#F5EDE4] hover:bg-[#2A180E]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {results.length === 0 ? (
            <div className="py-10 text-center text-xs text-[#A69588]">
              No coffee items found matching "{query}"
            </div>
          ) : (
            results.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl bg-[#1F130C] hover:bg-[#2A180E] border border-[#3B2418] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-lg bg-[#2E1A10]"
                  />
                  <div className="text-left">
                    <h5 className="font-editorial text-base text-[#F5EDE4]">{item.name}</h5>
                    <p className="text-[11px] text-[#A69588]">{item.origin} • ৳{item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(item);
                    onClose();
                  }}
                  className="flex items-center gap-1 bg-[#C5A059] text-[#1A0E08] text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#D5B069] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
