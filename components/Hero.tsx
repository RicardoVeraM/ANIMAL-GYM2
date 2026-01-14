
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/119/1920/1080?grayscale" 
          alt="Animal Gym Jojutla Interior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <span className="inline-block bg-gym-yellow text-black px-4 py-1 font-bold text-sm mb-6 tracking-widest uppercase">
            Jojutla, Morelos
          </span>
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6">
            DESPIERTA <br />
            <span className="text-gym-yellow">TU INSTINTO</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            Domina el hierro en el mejor gimnasio de Jojutla. Entrenamiento de alto rendimiento, 
            suplementación premium y una comunidad imparable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="bg-gym-yellow text-black px-10 py-5 font-black text-center uppercase tracking-widest hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center group"
            >
              Comenzar Entrenamiento
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#servicios" 
              className="border-2 border-white/50 text-white px-10 py-5 font-black text-center uppercase tracking-widest hover:border-gym-yellow hover:text-gym-yellow transition-all duration-300"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Social Links Side Bar (Hidden on Mobile) */}
      <div className="hidden lg:flex absolute right-10 bottom-10 flex-col space-y-6 z-10">
        <a href="#" className="text-white/50 hover:text-gym-yellow transform hover:scale-110 transition-all">FB</a>
        <a href="#" className="text-white/50 hover:text-gym-yellow transform hover:scale-110 transition-all">IG</a>
        <div className="h-20 w-px bg-gym-yellow/50 mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
