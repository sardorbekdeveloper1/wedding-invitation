import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="faculty-glyphic-regular text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            Biz haqimizda
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Sizning eng muhim kunlaringizni unutilmas qilish uchun yaratilgan zamonaviy taklifnoma xizmati
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="faculty-glyphic-regular text-2xl md:text-3xl text-gray-800 mb-4">
                Raqamli taklifnomalar orqali <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">maxsus lahzalar</span>
              </h3>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                E-taklifnoma.uz platformasi orqali siz eng muhim tadbirlaringiz uchun professional va chiroyli taklifnomalar yaratishingiz mumkin. Bizning maqsadimiz - har bir maxsus kunni unutilmas qilish.
              </p>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Zamonaviy dizayn, oson foydalanish va tezkor xizmat - bularning barchasi sizning qulayligingiz uchun bir joyda jamlangan.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Professional dizayn</h4>
                  <p className="text-gray-600 text-sm md:text-base">Zamonaviy va chiroyli taklifnoma shablon</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Oson foydalanish</h4>
                  <p className="text-gray-600 text-sm md:text-base">Bir necha daqiqada taklifnoma yarating</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Tezkor xizmat</h4>
                  <p className="text-gray-600 text-sm md:text-base">Darhol yuklab olish va ulashish imkoniyati</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' })}
                className="faculty-glyphic-regular text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Hoziroq boshlash
              </button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-pink-100">
                <div className="text-center space-y-6">
                  {/* Decorative Element */}
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8"></path>
                    </svg>
                  </div>

                  <h4 className="faculty-glyphic-regular text-2xl md:text-3xl text-gray-800 mb-4">
                    1000+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">baxtli mijoz</span>
                  </h4>
                  
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Bizning xizmatimizdan foydalanib, minglab oila o'zlarining eng muhim kunlarini nishonlashdi
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-pink-100">
                    <div className="text-center">
                      <div className="faculty-glyphic-regular text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-1">
                        1000+
                      </div>
                      <p className="text-gray-600 text-sm">Taklifnomalar</p>
                    </div>
                    <div className="text-center">
                      <div className="faculty-glyphic-regular text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-1">
                        99%
                      </div>
                      <p className="text-gray-600 text-sm">Mamnunlik</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-15 blur-2xl"></div>
            <div className="absolute top-1/2 -left-2 w-4 h-4 bg-pink-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/4 -right-1 w-2 h-2 bg-purple-500 rounded-full opacity-80"></div>
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-500 rounded-full opacity-70"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 border border-pink-100">
            <h3 className="faculty-glyphic-regular text-2xl md:text-3xl text-gray-800 mb-4">
              Sizning <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">maxsus kuningiz</span> uchun
            </h3>
            <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              Toy, nikoh, tug'ilgan kun, yubiley va boshqa muhim tadbirlar uchun professional taklifnomalar yarating. 
              Bizning platformamiz orqali siz o'zingizning shaxsiy uslubingizni aks ettiruvchi noyob taklifnoma yaratishingiz mumkin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;