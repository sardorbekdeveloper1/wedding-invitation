import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        {/* Decorative element */}
        <div className="absolute left-10 bottom-4 animate-bounce-slow">
          <Sparkles className="text-purple-300" size={20} />
        </div>
        {/* Footer content */}
        <div className="relative z-10">
          <p className="text-gray-600 mb-2 animate-fade-in">© 2025 E-Taklifnoma. Barcha huquqlar himoyalangan.</p>
          <div className="flex justify-center space-x-4 animate-slide-up animation-delay-200">
            <Heart className="text-pink-500" size={18} />
            <span className="text-gray-700">Temur & Shahrizoda</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;