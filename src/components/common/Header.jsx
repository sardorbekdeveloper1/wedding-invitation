// src/components/layout/Header.jsx
import React from "react";
import logo from "../../../public/images/logo.png"; // Faylni shu joyga import qilamiz

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo va sarlavha */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="E-taklif logosi"
            className="w-12 h-12 object-contain"
          />
          <span className="faculty-glyphic-regular text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400 tracking-wide">
  e-taklifnoma.uz
</span>


        </div>

        {/* Navigatsiya */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">Biz haqimizda</a>
          <a href="#event" className="text-gray-600 hover:text-pink-500 transition-colors">Tadbir</a>
          <a href="#confirmation" className="text-gray-600 hover:text-pink-500 transition-colors">Taklifnoma</a>
        </nav>

        {/* Taklifnoma tugmasi */}
        <div className="hidden md:block">
          <button 
            onClick={() => document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' })}
            className="faculty-glyphic-regular text-xl bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition"
          >
            Taklifnoma yaratish
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
