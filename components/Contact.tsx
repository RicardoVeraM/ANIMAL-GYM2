
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Membresía',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', interest: 'Membresía', message: '' });
      setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 italic">
              ¿LISTO PARA <br />
              <span className="text-gym-yellow">EL CAMBIO?</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Visítanos hoy mismo o contáctanos para agendar una sesión de prueba. 
              Estamos ubicados en la zona céntrica de Jojutla, Morelos.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gym-yellow p-3 rounded-sm mr-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-gym-yellow mb-1">Ubicación</h4>
                  <p className="text-white">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gym-yellow p-3 rounded-sm mr-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-gym-yellow mb-1">Contacto Directo</h4>
                  <p className="text-white">{CONTACT_INFO.phone}</p>
                  <p className="text-gray-400 text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href={CONTACT_INFO.social.facebook} target="_blank" className="p-4 border border-white/10 hover:border-gym-yellow hover:text-gym-yellow transition-all">FB</a>
              <a href={CONTACT_INFO.social.instagram} target="_blank" className="p-4 border border-white/10 hover:border-gym-yellow hover:text-gym-yellow transition-all">IG</a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" className="p-4 bg-[#25D366] text-white hover:opacity-90 transition-all font-bold">WHATSAPP</a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-black p-8 md:p-12 border border-gym-yellow/20 relative">
            {status === 'success' ? (
              <div className="text-center py-12 animate-in fade-in duration-500">
                <div className="bg-gym-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter text-gym-yellow">¡Registro Exitoso!</h3>
                <p className="text-gray-400">Un coach de Animal Gym te contactará pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:outline-none focus:border-gym-yellow transition-all"
                    placeholder="Tu nombre aquí"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Celular / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:outline-none focus:border-gym-yellow transition-all"
                      placeholder="734 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Me interesa...</label>
                    <select 
                      className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:outline-none focus:border-gym-yellow transition-all"
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    >
                      <option>Membresía</option>
                      <option>Suplementos</option>
                      <option>Coach Personal</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Mensaje (Opcional)</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:outline-none focus:border-gym-yellow transition-all"
                    placeholder="Cuéntanos más sobre tus metas"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gym-yellow text-black py-5 font-black uppercase tracking-widest hover:bg-yellow-500 transition-all flex items-center justify-center disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    'Enviar Solicitud'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
