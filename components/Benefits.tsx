
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-gym-yellow text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-6xl font-black leading-none mb-6">¿POR QUÉ <br />NOSOTROS?</h2>
            <p className="font-bold text-black/70 mb-8">
              En Jojutla existen opciones, pero ninguna como Animal Gym. Descubre lo que nos hace diferentes.
            </p>
            <div className="w-20 h-2 bg-black"></div>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
                <p className="text-black/80 font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
