import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Newsletter({ newsletter = {} }) {
  const {
    headline = 'Stay up to date',
    description = 'Signup our newsletter to get update information, news, insight or promotions from our Mirpur roastery.',
    cupImage = '/assets/newsletter_cup.png',
    buttonText = 'Subscribe'
  } = newsletter;

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setSubscribed(true);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#C5A059', '#E8D8C8', '#4E2E1F']
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <section className="py-12 bg-[#120B08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Banner Container matching Screenshot 4 */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1E110A] via-[#24150D] to-[#1A0E08] border border-[#3B2418] p-8 sm:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Top-Down Espresso Cup with Beans */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#482A1B] shadow-2xl group">
                <img
                  src={cupImage}
                  alt="Espresso Crema"
                  className="w-full h-full object-cover group-hover:rotate-45 transition-transform duration-1000"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-[#C5A059]/10 pointer-events-none" />
              </div>
            </div>

            {/* Middle Column: Copy */}
            <div className="md:col-span-5 text-left space-y-2">
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#F5EDE4] font-normal tracking-tight">
                {headline}
              </h3>
              <p className="text-xs sm:text-sm text-[#A69588] font-light leading-relaxed max-w-sm">
                {description}
              </p>
            </div>

            {/* Right Column: Form matching Screenshot 4 layout */}
            <div className="md:col-span-4 w-full">
              {subscribed ? (
                <div className="bg-[#241710] border border-[#C5A059]/50 rounded-2xl p-5 text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-6 h-6 text-[#C5A059] mx-auto" />
                  <p className="font-editorial text-lg text-[#F5EDE4]">Thank you for subscribing!</p>
                  <p className="text-xs text-[#A69588]">You'll receive our monthly cupping invites and secret recipes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="w-full bg-[#140C08]/80 border border-[#3B2418] focus:border-[#C5A059] rounded-xl px-4 py-3 text-sm text-[#F5EDE4] placeholder-[#7A6A5E] focus:outline-none transition-colors shadow-inner"
                    />
                    {error && <p className="text-xs text-red-400 text-left mt-1 pl-1">{error}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2A180E] hover:bg-[#3B2215] text-[#E8D8C8] hover:text-[#FFFFFF] border border-[#482A1B] text-xs font-semibold uppercase tracking-wider py-3 rounded-xl transition-all duration-300 cursor-pointer shadow-md"
                  >
                    {buttonText}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
