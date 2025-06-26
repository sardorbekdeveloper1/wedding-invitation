// src/components/sections/Hero.jsx
import { useEffect, useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';

const images = [
  "/images/bg1.jpg",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
  "/images/bg4.jpg"
];


const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Fade karusel rasmi */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/70 via-white/40 to-blue-100/60" />
        </div>
      ))}

      {/* Dekorativ belgilar */}
      <Sparkles size={28} className="absolute top-10 left-6 sm:left-10 text-pink-300 animate-bounce-slow z-10" />
      <Heart size={26} className="absolute top-24 right-6 sm:right-10 text-purple-300 animate-bounce-slow animation-delay-300 z-10" />
      <Sparkles size={20} className="absolute bottom-20 left-10 text-blue-300 animate-bounce-slow animation-delay-500 z-10" />
      <Heart size={28} className="absolute bottom-28 right-8 text-pink-400 animate-bounce-slow animation-delay-200 z-10" />

      {/* Kontent */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-elegant text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Har bir sevgi hikoyasi go‘zal,
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-800 drop-shadow-md">
            Biz sizga uni unutilmas tarzda boshlash imkoniyatini taqdim etamiz.
          </p>
        </div>

        <div className="mt-6 sm:mt-10 animate-slide-up animation-delay-400">
          <button 
            onClick={() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base md:text-lg font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md transition duration-300"
          >
            Taklifnomani ko‘ring
          </button>
        </div>
      </div>

      {/* Scroll indikator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 sm:w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
