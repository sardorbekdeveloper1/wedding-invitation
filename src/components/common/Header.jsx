import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "/images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
      setIsLangMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
          <span className="hidden md:inline dongle-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400 tracking-wide">
            e-taklifnoma.uz
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="dongle-regular text-xl text-gray-600 hover:text-pink-500 transition-colors">{t("home")}</a>
          <a href="#about" className="dongle-regular text-xl text-gray-600 hover:text-pink-500 transition-colors">{t("about")}</a>
          <a href="#contact" className="dongle-regular text-xl text-gray-600 hover:text-pink-500 transition-colors">{t("contact")}</a>

          {/* Language Dropdown */}
          <div className="relative">
            <button onClick={toggleLangMenu} className="dongle-regular text-xl text-gray-600 hover:text-pink-500">
              {t("language")}
            </button>
            {isLangMenuOpen && (
              <div className="absolute bg-white shadow-lg rounded mt-2 w-32 z-20">
                <button onClick={() => changeLanguage("uz")} className="block w-full px-4 py-2 text-gray-700 hover:bg-pink-100">{t("uzbek")}</button>
                <button onClick={() => changeLanguage("ru")} className="block w-full px-4 py-2 text-gray-700 hover:bg-pink-100">{t("russian")}</button>
                <button onClick={() => changeLanguage("en")} className="block w-full px-4 py-2 text-gray-700 hover:bg-pink-100">{t("english")}</button>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' })}
            className="dongle-bold text-2xl bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
          >
            {t("invitation")}
          </button>
        </div>

        {/* Hamburger */}
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
          <a href="#home" onClick={toggleMenu} className="dongle-regular text-2xl block text-gray-700 hover:text-pink-500">{t("home")}</a>
          <a href="#about" onClick={toggleMenu} className="dongle-regular text-2xl block text-gray-700 hover:text-pink-500">{t("about")}</a>
          <a href="#contact" onClick={toggleMenu} className="dongle-regular text-2xl block text-gray-700 hover:text-pink-500">{t("contact")}</a>

          {/* Mobile Language Options */}
          <div className="space-y-2">
            <button onClick={() => changeLanguage("uz")} className="block text-left text-gray-700 hover:text-pink-500">{t("uzbek")}</button>
            <button onClick={() => changeLanguage("ru")} className="block text-left text-gray-700 hover:text-pink-500">{t("russian")}</button>
            <button onClick={() => changeLanguage("en")} className="block text-left text-gray-700 hover:text-pink-500">{t("english")}</button>
          </div>

          <button
            onClick={() => {
              toggleMenu();
              document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' });
            }}
            className="dongle-bold text-2xl w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full transition"
          >
            {t("invitation")}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
