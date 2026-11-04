import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    branch: 'Mirpur-10 Roastery (Section-10, Road 3)',
    date: '2026-11-05',
    time: '18:00',
    guests: '2',
    area: 'Cozy Lounge Corner',
    name: '',
    phone: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and contact phone number.');
      return;
    }

    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#C5A059', '#E8D8C8', '#4E2E1F']
      });
    } catch (e) {}
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#180E09] border border-[#3B2418] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#A69588] hover:text-[#F5EDE4] hover:bg-[#2A180E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#2A180E] text-[#C5A059] flex items-center justify-center mx-auto border border-[#482A1B]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-editorial text-3xl text-[#F5EDE4]">Table Reserved!</h3>
            <p className="text-sm text-[#A69588] max-w-sm mx-auto">
              We look forward to hosting you at <strong className="text-[#F5EDE4]">Coffee Peyala, Mirpur</strong> on {formData.date} at {formData.time} for {formData.guests} guests.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#C5A059] text-[#1A0E08] font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-full cursor-pointer hover:bg-[#D5B069] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-left mb-6 space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                Atmosphere & Hospitality
              </span>
              <h3 className="font-editorial text-3xl text-[#F5EDE4]">Reserve Your Table</h3>
              <p className="text-xs text-[#A69588]">
                Experience slow handcrafted coffee and peaceful seating at our Mirpur café.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Branch */}
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                  Branch Location
                </label>
                <div className="relative">
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full bg-[#120B08] border border-[#382217] focus:border-[#C5A059] rounded-xl px-4 py-2.5 text-xs text-[#F5EDE4] focus:outline-none"
                  >
                    <option value="Mirpur-10 Roastery (Section-10, Road 3)">Mirpur-10 Roastery (Section-10, Road 3)</option>
                    <option value="Mirpur DOHS Pod (Avenue 2)">Mirpur DOHS Pod (Avenue 2)</option>
                    <option value="Mirpur-2 Terrace (Near Stadium)">Mirpur-2 Terrace (Near Stadium)</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#120B08] border border-[#382217] focus:border-[#C5A059] rounded-xl px-3 py-2 text-xs text-[#F5EDE4] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                    Time Slot
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#120B08] border border-[#382217] focus:border-[#C5A059] rounded-xl px-3 py-2 text-xs text-[#F5EDE4] focus:outline-none"
                  />
                </div>
              </div>

              {/* Guests & Seating Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#120B08] border border-[#382217] focus:border-[#C5A059] rounded-xl px-3 py-2 text-xs text-[#F5EDE4] focus:outline-none"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="6">6 Persons (Booth)</option>
                    <option value="8+">8+ Group Meeting</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                    Seating Area
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-[#120B08] border border-[#382217] focus:border-[#C5A059] rounded-xl px-3 py-2 text-xs text-[#F5EDE4] focus:outline-none"
                  >
                    <option value="Cozy Lounge Corner">Cozy Lounge Corner</option>
                    <option value="Barista Brew Bar">Barista Brew Bar</option>
                    <option value="Co-Working Quiet Zone">Co-Working Quiet Zone</option>
                    <option value="Open Air Balcony">Open Air Balcony</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#120B08] border border-[#382217] focus:border-[#C5A059] rounded-xl px-3 py-2 text-xs text-[#F5EDE4] placeholder-[#645347] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 17..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#120B08] border border-[#382217] focus:border-[#C5A059] rounded-xl px-3 py-2 text-xs text-[#F5EDE4] placeholder-[#645347] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#C5A059] hover:bg-[#D5B069] text-[#1A0E08] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl cursor-pointer transition-colors shadow-lg"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
