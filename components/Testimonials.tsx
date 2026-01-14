
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.02] pointer-events-none uppercase">ANIMAL</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">HISTORIAS DE <span className="text-gym-yellow">ÉXITO</span></h2>
          <p className="text-gray-500 uppercase tracking-widest font-bold text-sm">Lo que dicen nuestros miembros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-neutral-900 p-8 border-b-4 border-gym-yellow shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="flex mb-4 text-gym-yellow">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-current' : 'text-gray-700'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
              <h4 className="font-black uppercase tracking-tighter text-gym-yellow text-lg">{t.name}</h4>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">Miembro Animal Gym</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
