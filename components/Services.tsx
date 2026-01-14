
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">EQUIPADOS PARA <span className="text-gym-yellow">VENCER</span></h2>
          <div className="h-1.5 w-24 bg-gym-yellow mx-auto"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto font-medium">
            Ofrecemos servicios integrales diseñados para potenciar cada aspecto de tu entrenamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 border border-white/10 hover:border-gym-yellow transition-all duration-300 relative overflow-hidden bg-neutral-900/50">
              <div className="mb-6 text-gym-yellow transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-gym-yellow transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gym-yellow/5 group-hover:bg-gym-yellow/20 transition-colors"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 italic">¿Buscas algo específico? Pregúntanos por nuestras membresías personalizadas.</p>
          <a href="#contacto" className="inline-block text-gym-yellow font-black border-b-2 border-gym-yellow pb-1 uppercase tracking-widest hover:text-white hover:border-white transition-all">
            Ver todas las opciones
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
