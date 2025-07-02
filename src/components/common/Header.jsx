import React, { useState, useRef, useEffect } from "react";
import logo from "/images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("uz");
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsMobileMenuOpen(false); // mobilda tanlanganda yopilsin
  };

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

  // Lokalizatsiya uchun oddiy obyekt
  const t = {
    uz: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      contact: "Bog‘lanish",
      invitation: "Taklifnoma yaratish",
    },
    ru: {
      home: "Главная",
      about: "О нас",
      contact: "Контакт",
      invitation: "Создать приглашение",
    },
    en: {
      home: "Home",
      about: "About Us",
      contact: "Contact",
      invitation: "Create Invitation",
    },
  };

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
          <span className="hidden md:inline dongle-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400 tracking-wide">
            e-taklifnoma.uz
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="dongle-regular text-xl text-gray-600 hover:text-pink-500 transition-colors">{t[language].home}</a>
          <a href="#about" className="dongle-regular text-xl text-gray-600 hover:text-pink-500 transition-colors">{t[language].about}</a>
          <a href="#contact" className="dongle-regular text-xl text-gray-600 hover:text-pink-500 transition-colors">{t[language].contact}</a>

          {/* Language dropdown */}
          <div className="relative group">
            <button className="dongle-regular text-xl text-gray-600 hover:text-pink-500 transition-colors">
              {language === "uz" ? "O‘zbekcha" : language === "ru" ? "Русский" : "English"}
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-32 z-10">
              <button onClick={() => handleLanguageChange("uz")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100">O‘zbekcha</button>
              <button onClick={() => handleLanguageChange("ru")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100">Русский</button>
              <button onClick={() => handleLanguageChange("en")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100">English</button>
            </div>
          </div>
        </nav>

        {/* Desktop button */}
        <div className="hidden md:block">
          <button 
            onClick={() => document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' })}
            className="dongle-bold text-2xl bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
          >
            {t[language].invitation}
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
          <a href="#home" onClick={toggleMenu} className="dongle-regular text-2xl block text-gray-700 hover:text-pink-500">{t[language].home}</a>
          <a href="#about" onClick={toggleMenu} className="dongle-regular text-2xl block text-gray-700 hover:text-pink-500">{t[language].about}</a>
          <a href="#contact" onClick={toggleMenu} className="dongle-regular text-2xl block text-gray-700 hover:text-pink-500">{t[language].contact}</a>

          {/* Language selection */}
          <div className="space-y-2">
            <button onClick={() => handleLanguageChange("uz")} className="block w-full text-left text-gray-700 hover:text-pink-500">O‘zbekcha</button>
            <button onClick={() => handleLanguageChange("ru")} className="block w-full text-left text-gray-700 hover:text-pink-500">Русский</button>
            <button onClick={() => handleLanguageChange("en")} className="block w-full text-left text-gray-700 hover:text-pink-500">English</button>
          </div>

          <button 
            onClick={() => {
              toggleMenu();
              document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' });
            }}
            className="dongle-bold text-2xl w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full transition"
          >
            {t[language].invitation}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
