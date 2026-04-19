"use client";
import { FiMapPin, FiGlobe, FiStar } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80")`}} />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-900/80" />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6 animate-fade-in">
          <FiStar className="text-yellow-400" />
          <span className="text-white/90 text-sm font-medium">AI-Powered Travel Recommendations</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-slide-up">
          Find Your Perfect<br />
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">Dream Trip</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-slide-up">
          Discover handpicked destinations tailored to your mood, budget, and style.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-white/80">
          <div className="flex items-center gap-2"><FiGlobe className="text-blue-300 text-xl" /><span>30+ Destinations</span></div>
          <div className="flex items-center gap-2"><FiMapPin className="text-pink-300 text-xl" /><span>Realistic Pricing</span></div>
          <div className="flex items-center gap-2"><FiStar className="text-yellow-300 text-xl" /><span>Top Rated Hotels</span></div>
        </div>
        <div className="mt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}