import React, { useState, useRef, useEffect } from "react";
import logo from "../../../public/images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // Tashqariga bosishni aniqlovchi useEffect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
          <span className="hidden md:inline faculty-glyphic-regular text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400 tracking-wide">
            e-taklifnoma.uz
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">Biz haqimizda</a>
          <a href="#event" className="text-gray-600 hover:text-pink-500 transition-colors">Tadbir</a>
          <a href="#confirmation" className="text-gray-600 hover:text-pink-500 transition-colors">Taklifnoma</a>
        </nav>

        {/* Desktop button */}
        <div className="hidden md:block">
          <button 
            onClick={() => document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' })}
            className="faculty-glyphic-regular text-xl bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition"
          >
            Taklifnoma yaratish
          </button>
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-4 py-4 space-y-4">
          <a href="#about" onClick={toggleMenu} className="block text-gray-700 hover:text-pink-500">Biz haqimizda</a>
          <a href="#event" onClick={toggleMenu} className="block text-gray-700 hover:text-pink-500">Tadbir</a>
          <a href="#confirmation" onClick={() => {
            toggleMenu();
            document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' });
          }} className="block text-gray-700 hover:text-pink-500">Taklifnoma</a>
          <button 
            onClick={() => {
              toggleMenu();
              document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full transition"
          >
            Taklifnoma yaratish
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
