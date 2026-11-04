import React, { useState } from 'react';
import { X, Lock, Mail, Coffee } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm" />

      <div className="relative w-full max-w-sm bg-[#180E09] border border-[#3B2418] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#A69588] hover:text-[#F5EDE4] hover:bg-[#2A180E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6 space-y-1">
          <img
            src="/assets/logo.png"
            alt="Coffee Peyala Logo"
            className="w-16 h-16 object-contain rounded-full mx-auto shadow-xl ring-2 ring-[#C5A059]/40 mb-3"
          />
          <h3 className="font-editorial text-2xl text-[#F5EDE4]">
            {isLogin ? 'Welcome Back' : 'Join Coffee Peyala'}
          </h3>
          <p className="text-xs text-[#A69588]">
            {isLogin ? 'Sign in to access your coffee rewards & orders' : 'Create an account for exclusive roasts & benefits'}
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert('Signed in successfully!'); onClose(); }} className="space-y-3">
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="name@example.com"
                className="w-full bg-[#120B08] border border-[#382217] rounded-xl pl-9 pr-3 py-2 text-xs text-[#F5EDE4] focus:outline-none focus:border-[#C5A059]"
              />
              <Mail className="w-3.5 h-3.5 text-[#7A6A5E] absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-[#A69588] block mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-[#120B08] border border-[#382217] rounded-xl pl-9 pr-3 py-2 text-xs text-[#F5EDE4] focus:outline-none focus:border-[#C5A059]"
              />
              <Lock className="w-3.5 h-3.5 text-[#7A6A5E] absolute left-3 top-3" />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#C5A059] hover:bg-[#D5B069] text-[#1A0E08] font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-colors cursor-pointer"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-[#3B2418] text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs text-[#C5A059] hover:underline"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}
