
import React from 'react';
import { NavItem, ServiceItem, BenefitItem, TestimonialItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Contacto', href: '#contacto' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'pesas',
    title: 'Musculación y Pesas',
    description: 'Área completa con equipo de última generación para hipertrofia y fuerza máxima.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    id: 'cardio',
    title: 'Zona de Cardio',
    description: 'Mejora tu resistencia cardiovascular con nuestras caminadoras, elípticas y bicicletas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'coach',
    title: 'Entrenamiento Personal',
    description: 'Asesoría experta adaptada a tus objetivos específicos, desde principiantes hasta atletas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 'supps',
    title: 'Suplementación',
    description: 'Venta de las mejores marcas de proteínas, creatinas y pre-entrenos para potenciar tus resultados.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.282a2 2 0 01-1.154.155l-4.591-.718a2 2 0 01-1.435-1.27l-.466-1.558a2 2 0 00-1.213-1.403l-1.17-.404a2 2 0 01-1.272-1.846v-2.22c0-.73.4-1.39 1.05-1.72l4.587-2.293a1.5 1.5 0 011.342 0l4.587 2.293c.65.33 1.05 1 1.05 1.72v2.22c0 .847-.538 1.594-1.333 1.859l-.428.143a2 2 0 01-1.197.043l-3.907-.742a2 2 0 00-1.373.291l-.142.089a2 2 0 01-1.127.321H9" />
      </svg>
    ),
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Ubicación Estratégica',
    description: 'Estamos en el corazón de Jojutla, con fácil acceso y estacionamiento para tu comodidad.',
  },
  {
    title: 'Equipo Profesional',
    description: 'Máquinas de alta gama mantenidas rigurosamente para garantizar tu seguridad y progreso.',
  },
  {
    title: 'Ambiente Motivador',
    description: 'Una comunidad que te impulsa a dar el 100% en cada repetición. Cero excusas.',
  },
  {
    title: 'Horarios Amplios',
    description: 'Entrena cuando tú quieras. Nos adaptamos a tu ritmo de vida y compromisos laborales.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Carlos Mendoza',
    text: 'El mejor gimnasio de Jojutla. El equipo está en excelentes condiciones y el ambiente es insuperable para entrenar pesado.',
    rating: 5,
  },
  {
    name: 'Ana Laura R.',
    text: 'Empecé como principiante y los entrenadores me han guiado en todo momento. He visto cambios reales en mi condición física.',
    rating: 5,
  },
  {
    name: 'Jorge Torres',
    text: 'La zona de suplementos tiene todo lo que necesito. Muy conveniente y profesional todo el staff de Animal Gym.',
    rating: 4,
  },
];

export const CONTACT_INFO = {
  address: 'Calle Principal #123, Col. Centro, Jojutla, Morelos, CP 62900',
  phone: '+52 734 123 4567',
  email: 'contacto@animal-gym.com',
  whatsapp: '527341234567',
  social: {
    facebook: 'https://facebook.com/animalgymjojutla',
    instagram: 'https://instagram.com/animalgymjojutla',
  }
};

export const AI_COACH_INSTRUCTION = `Eres el "Coach Virtual de Animal Gym", un experto en fitness, nutrición y entrenamiento de fuerza con base en Jojutla, Morelos. 
Tu tono es motivador, directo, profesional y ligeramente agresivo (en el sentido de empoderamiento físico, "instinto animal"). 
Hablas español de México. 
Tu objetivo es dar consejos rápidos de entrenamiento, resolver dudas sobre suplementos y animar a la gente a visitar Animal Gym en Jojutla. 
Si te preguntan por precios, menciona que tenemos membresías competitivas y que deben contactarnos por WhatsApp o visitarnos para promociones vigentes. 
Sé conciso. No des planes médicos, siempre sugiere consultar con un profesional si hay lesiones.`;
