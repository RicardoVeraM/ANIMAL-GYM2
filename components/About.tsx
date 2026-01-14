
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-sm overflow-hidden border-l-8 border-gym-yellow">
              <img 
                src="https://picsum.photos/id/67/800/600" 
                alt="Nosotros Animal Gym" 
                className="w-full object-cover"
              />
            </div>
            {/* Design elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gym-yellow/10 -z-0"></div>
            <div className="absolute -top-10 -left-10 text-9xl font-black text-white/5 select-none pointer-events-none">FORCE</div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              MÁS QUE UN GIMNASIO, <br />
              <span className="text-gym-yellow">TU NUEVA TRIBU</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              En Animal Gym Jojutla, no creemos en las excusas. Creemos en la disciplina, el esfuerzo y los resultados tangibles. 
              Nuestra misión es proporcionar un espacio profesional donde cada gota de sudor te acerque a la versión más fuerte de ti mismo.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Desde atletas de alto rendimiento hasta personas que buscan mejorar su salud general, 
              Animal Gym es el lugar donde el instinto se encuentra con la técnica. 
              Contamos con entrenadores certificados y equipo de élite para asegurar que tu progreso no se detenga.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl font-black text-gym-yellow mb-1">10+</p>
                <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-black text-gym-yellow mb-1">500+</p>
                <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Socios Activos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
