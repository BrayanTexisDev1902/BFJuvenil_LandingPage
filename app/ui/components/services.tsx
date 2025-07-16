'use client';

import React from 'react';
import { Code, Smartphone, Cloud, Shield, Zap, Globe } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos y responsivos que impulsan tu negocio',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Apps Móviles',
      description: 'Aplicaciones móviles nativas y multiplataforma para iOS y Android',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Computing',
      description: 'Soluciones en la nube escalables y seguras para tu empresa',
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ciberseguridad',
      description: 'Protección avanzada para mantener tus datos y sistemas seguros',
      color: 'from-blue-800 to-blue-900'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Optimización',
      description: 'Mejoramos el rendimiento y la eficiencia de tus sistemas',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Marketing Digital',
      description: 'Estrategias digitales para aumentar tu presencia online',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas para impulsar tu negocio hacia el futuro digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 group-hover:translate-x-2 transform inline-flex items-center gap-2">
                  Saber más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

