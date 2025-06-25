// src/components/sections/HeroSection.jsx
import { Heart, Sparkles } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-pink-300 animate-bounce-slow">
        <Sparkles size={32} />
      </div>
      <div className="absolute top-32 right-16 text-purple-300 animate-bounce-slow animation-delay-400">
        <Heart size={28} />
      </div>
      <div className="absolute bottom-20 left-20 text-blue-300 animate-bounce-slow animation-delay-600">
        <Sparkles size={24} />
      </div>
      <div className="absolute bottom-32 right-12 text-pink-300 animate-bounce-slow animation-delay-200">
        <Heart size={30} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="mb-8 animate-fade-in">
          <p className="text-lg text-gray-600 mb-2">Hurmatli mehmonlar!</p>
          <p className="text-gray-700">Sizni quyidagi baxtli juftlikning</p>
        </div>
        
        {/* Names */}
        <div className="mb-8 animate-slide-up animation-delay-200">
          <h1 className="text-5xl md:text-7xl font-elegant text-gradient mb-4">
            Temur
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
            <Heart className="mx-4 text-pink-500" size={24} />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-elegant text-gradient">
            Shahrizoda
          </h1>
        </div>
        
        {/* Invitation text */}
        <div className="mb-12 animate-slide-up animation-delay-400">
          <p className="text-xl text-gray-700 mb-4">
            nikoh to'yining faxriy mehmoni bo'lishga taklif qilamiz
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Qalblar ezguliklarga to'la bo'lgan ushbu qutlug' kunda 
            do'stlar yonida bo'ling!
          </p>
        </div>
        
        {/* Call to action */}
        <div className="animate-slide-up animation-delay-600">
          <button 
            onClick={() => document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Qatnashishni tasdiqlang
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection