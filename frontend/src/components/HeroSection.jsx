import React from 'react';
import { useNavigate } from "react-router-dom";   // 👈 ADD THIS

const HeroSection = () => {

  const navigate = useNavigate();   // 👈 PUT IT HERE (inside component)

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1510511459019-5dee997ddfdf?q=80&w=2940&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-sky-500/20 to-white/30 backdrop-blur-sm" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 animate-fade-in-up leading-tight">
          AI-Powered Code Review
          <br />
          <span className="text-3xl sm:text-5xl font-semibold bg-gradient-to-r from-pink-600 to-sky-600 bg-clip-text text-transparent">
            Built for Production Code
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-black/90 mb-10 max-w-3xl mx-auto font-medium animate-fade-in-up-delay leading-relaxed">
          Ship better code faster with intelligent AI reviews that catch bugs,
          suggest improvements, and ensure best practices automatically
        </p>

        {/* 👇 ONLY THIS PART CHANGED */}
        <button
          onClick={() => navigate("/review")}
          className="group px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-sky-500 rounded-full transition-all duration-300 hover:from-pink-600 hover:to-sky-600 hover:scale-110 hover:shadow-2xl hover:shadow-pink-400/50 animate-fade-in-up-delay-2 transform"
        >
          Get Started
          <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
