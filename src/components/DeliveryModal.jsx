import React, { useState } from 'react';
import { X, Bike, MapPin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DeliveryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    area: 'Mirpur-10 (Around Roundabout / Metro Station)',
    address: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      alert('Please fill out all address details.');
      return;
    }
    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#E8D8C8', '#4E2E1F']
      });
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm" />

      <div className="relative w-full max-w-md bg-[#180E09] border border-[#3B2418] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#A69588] hover:text-[#F5EDE4] hover:bg-[#2A180E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#2A180E] text-[#C5A059] flex items-center justify-center mx-auto border border-[#482A1B]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-editorial text-2xl text-[#F5EDE4]">Delivery Order Placed!</h3>
            <p className="text-xs text-[#A69588]">
              Your handcrafted brew is being extracted by our baristas. Our rider will reach {form.area} within 25-35 minutes.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-2 bg-[#C5A059] text-[#1A0E08] text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2 text-[#C5A059]">
              <Bike className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-semibold">Express Delivery</span>
            </div>
            <h3 className="font-editorial text-3xl text-[#F5EDE4]">Get Coffee Delivered</h3>
            <p className="text-xs text-[#A69588]">
              Hot, insulated thermal packaging preserving aroma & temperature across Mirpur & Dhaka.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                  Delivery Zone in Dhaka
                </label>
                <select
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-xs text-[#F5EDE4]"
                >
                  <option value="Mirpur-10 (Around Roundabout / Metro Station)">Mirpur-10 (Around Roundabout / Metro Station)</option>
                  <option value="Mirpur-1 / Sony Cinema Area">Mirpur-1 / Sony Cinema Area</option>
                  <option value="Mirpur-2 / National Stadium">Mirpur-2 / National Stadium</option>
                  <option value="Mirpur-11 & 12">Mirpur-11 & 12</option>
                  <option value="Mirpur DOHS">Mirpur DOHS</option>
                  <option value="Pallabi & Kazipara">Pallabi & Kazipara</option>
                  <option value="Dhanmondi / Gulshan / Banani (Express)">Dhanmondi / Gulshan / Banani (Express)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Farhan Chowdhury"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-xs text-[#F5EDE4]"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+880 1..."
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-xs text-[#F5EDE4]"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                  Detailed Address (House / Road)
                </label>
                <input
                  type="text"
                  required
                  placeholder="House 12, Road 4, Block C, Mirpur"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-xs text-[#F5EDE4]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#C5A059] hover:bg-[#D5B069] text-[#1A0E08] font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Confirm Instant Delivery
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
