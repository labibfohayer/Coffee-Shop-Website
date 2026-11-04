import React, { useState } from 'react';
import { Coffee, Award, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

export default function AboutSection({ onOpenStory }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'PREMIUM BEANS',
      desc: 'We source the finest single-origin beans directly from ethical micro-lots around the world.',
      icon: Coffee
    },
    {
      title: 'EXPERTLY CRAFTED',
      desc: 'Our certified Q-baristas calibrate grinder microns and extraction seconds for every cup.',
      icon: Award
    },
    {
      title: 'SUSTAINABLE',
      desc: 'We are committed to 100% compostable cups, fair-trade premiums, and zero bean wastage.',
      icon: ShieldCheck
    }
  ];

  const stats = [
    { number: '2018', label: 'Brewing Happiness' },
    { number: '25+', label: 'Passionate baristas' },
    { number: '100%', label: 'Arabica beans' },
    { number: '15K+', label: 'Happy customers' }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#120B08] overflow-hidden">
      
      {/* Background Watermark Ghost Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-center whitespace-nowrap z-0">
        <span className="font-editorial text-[14vw] font-bold text-[#F5EDE4] tracking-widest uppercase">
          Coffeer Peyala
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bento Container with Rounded Corners matching Screenshot 2 */}
        <div className="bg-[#1A100A]/90 border border-[#3B2418]/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Portrait Card with Latte Art */}
            <div className="lg:col-span-3 flex justify-center order-2 lg:order-1">
              <div className="relative group w-full max-w-[260px] rounded-2xl overflow-hidden border border-[#482A1B] shadow-2xl">
                <img
                  src="/assets/about_latte.png"
                  alt="Freshly pulled Latte Art"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140C08]/90 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-[#E8D8C8] font-mono tracking-widest uppercase">
                    • 100% Arabica Roast
                  </span>
                </div>
              </div>
            </div>

            {/* Center Column: Narrative & 3 Feature Bento Cards */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  About us
                </span>
                
                <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F5EDE4] font-normal leading-tight">
                  A café built by coffee people.
                </h2>
                
                <p className="text-sm sm:text-base text-[#A69588] font-light leading-relaxed">
                  We opened <strong className="text-[#F5EDE4] font-medium">Coffeer Peyala</strong> in 2018 with a small La Marzocco, a stubborn belief in single-origin espresso, and a cozy corner shop with good sunlight in Mirpur, Dhaka. Seven years later, bringing uncompromising specialty coffee to everyone.
                </p>

                <button
                  onClick={onOpenStory}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#C5A059] hover:text-[#E8D8C8] transition-colors underline underline-offset-4 cursor-pointer pt-1"
                >
                  <span>Read our story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Feature Cards Side-by-Side (Matching Screenshot 2) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      onMouseEnter={() => setActiveFeature(idx)}
                      className={`p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                        activeFeature === idx
                          ? 'bg-[#261710] border-[#C5A059]/40 shadow-lg -translate-y-0.5'
                          : 'bg-[#180E09]/70 border-[#382217] hover:bg-[#20130D]'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#2E1B11] flex items-center justify-center text-[#C5A059] mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="font-semibold text-xs tracking-wider text-[#F5EDE4] mb-1.5 uppercase">
                        {feat.title}
                      </div>
                      <p className="text-[11px] text-[#A69588] leading-relaxed line-clamp-3">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Espresso Machine Card */}
            <div className="lg:col-span-3 flex justify-center order-3">
              <div className="relative group w-full max-w-[260px] rounded-2xl overflow-hidden border border-[#482A1B] shadow-2xl">
                <img
                  src="/assets/about_machine.png"
                  alt="La Marzocco Espresso Machine"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140C08]/90 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-[#E8D8C8] font-mono tracking-widest uppercase">
                    • Mirpur Roastery
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Stat Bar (4 Columns, matching Screenshot 2) */}
          <div className="mt-10 pt-8 border-t border-[#3B2418]/80">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#F5EDE4] tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-xs text-[#A69588] uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
