'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cards = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Desarrollo Web Moderno',
      description: 'Creamos experiencias web únicas y funcionales',
      category: 'Web Development'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas y multiplataforma de alta calidad',
      category: 'Mobile Apps'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Análisis de Datos',
      description: 'Insights valiosos para tu negocio',
      category: 'Data Analytics'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cloud Computing',
      description: 'Soluciones escalables en la nube',
      category: 'Cloud Services'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Inteligencia Artificial',
      description: 'IA aplicada a soluciones empresariales',
      category: 'AI Solutions'
    }
  ];

  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextCard, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + cards.length) % cards.length;
    const isActive = diff === 0;
    const isNext = diff === 1;
    const isPrev = diff === cards.length - 1;

    if (isActive) {
      return {
        transform: 'translateX(0) translateY(0) scale(1) rotateY(0deg)',
        zIndex: 30,
        opacity: 1
      };
    } else if (isNext) {
      return {
        transform: 'translateX(60px) translateY(20px) scale(0.9) rotateY(-15deg)',
        zIndex: 20,
        opacity: 0.7
      };
    } else if (isPrev) {
      return {
        transform: 'translateX(-60px) translateY(20px) scale(0.9) rotateY(15deg)',
        zIndex: 20,
        opacity: 0.7
      };
    } else {
      return {
        transform: 'translateX(0) translateY(40px) scale(0.8) rotateY(0deg)',
        zIndex: 10,
        opacity: 0.3
      };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre algunos de nuestros trabajos más destacados
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          {/* Cards Container */}
          <div className="relative h-96 flex items-center justify-center perspective-1000">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="absolute w-80 h-80 transition-all duration-500 ease-out cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => {
                  if (index !== currentIndex) {
                    setCurrentIndex(index);
                  }
                }}
              >
                <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="320px"
                      style={{ objectFit: 'cover' }}
                      priority={index === currentIndex}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {card.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-50 text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-50 text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

