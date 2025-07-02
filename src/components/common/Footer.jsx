import { Sparkles, Mail, Instagram, Github, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        {/* Decorative Element */}
        <div className="absolute left-6 bottom-4 animate-bounce-slow hidden md:block">
          <Sparkles className="text-purple-300" size={20} />
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
            <Send className="text-blue-500 hover:scale-110 transition-transform" size={24} />
          </a>
          <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-pink-500 hover:scale-110 transition-transform" size={24} />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <Github className="text-gray-800 hover:scale-110 transition-transform" size={24} />
          </a>
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
            <Mail className="text-red-500 hover:scale-110 transition-transform" size={24} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-blue-700 hover:scale-110 transition-transform" size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-600 text-sm sm:text-base animate-fade-in">
          © 2025 E-Taklifnoma. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
