
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-3xl font-black text-gym-yellow tracking-tighter">ANIMAL<span className="text-white">GYM</span></span>
            <p className="text-gray-600 text-xs mt-2 uppercase tracking-widest font-bold">Jojutla, Morelos, México</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 md:mb-0">
            <a href="#inicio" className="hover:text-gym-yellow">Inicio</a>
            <a href="#nosotros" className="hover:text-gym-yellow">Nosotros</a>
            <a href="#servicios" className="hover:text-gym-yellow">Servicios</a>
            <a href="#contacto" className="hover:text-gym-yellow">Contacto</a>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 font-bold uppercase tracking-[0.2em]">
          <p>© {currentYear} Animal Gym. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Diseñado para el alto rendimiento por <span className="text-gym-yellow">Innexperto</span></p>
        </div>

        {/* SEO Keywords hidden but present for indexing */}
        <div className="mt-8 text-[8px] text-neutral-900 select-none">
          Gimnasio Jojutla Morelos fitness pesas entrenamiento funcional culturismo musculación suplementos deportivos creatina proteína animal gym centro jojutla
        </div>
      </div>
    </footer>
  );
};

export default Footer;
