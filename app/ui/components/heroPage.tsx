"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles, Zap, Globe, Code } from "lucide-react";
import Image from "next/image";

export const HeroPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: <Code className="w-6 h-6" />, delay: 0, duration: 6 },
    { icon: <Zap className="w-5 h-5" />, delay: 1, duration: 8 },
    { icon: <Globe className="w-7 h-7" />, delay: 2, duration: 7 },
    { icon: <Sparkles className="w-4 h-4" />, delay: 0.5, duration: 5 },
    { icon: <Code className="w-5 h-5" />, delay: 1.5, duration: 9 },
    { icon: <Zap className="w-6 h-6" />, delay: 2.5, duration: 6 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 transform transition-transform duration-1000 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          ></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {/* Large rotating circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Animated geometric shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-400/30 rounded-lg animate-spin-slow"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-300/40 rounded-full animate-bounce"></div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-300/40 rounded-full animate-pulse"
              style={{
                // Fixed positions spread evenly
                left: `${5 + (i % 5) * 20}%`,
                top: `${5 + Math.floor(i / 5) * 20}%`,
                animationDelay: `${i % 3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Interactive Light Effects */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute text-blue-300/60 hover:text-blue-200/80 transition-colors duration-300"
            style={{
              left: `${15 + index * 15}%`,
              top: `${20 + index * 10}%`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <div className="transform hover:scale-125 transition-transform duration-300">
              {element.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={` flex flex-col items-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Animated Badge */}

            {/* <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
              <span className="text-blue-100 text-sm font-medium">Innovación Tecnológica 2024</span>
            </div> */}

            <h1 className="text-4xl md:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block animate-fade-in-up">
                ¡Bienvenido!, Somos
              </span>
              <span
                className="block text-blue-300 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                El Ballet Folklorico Juvenil de la Ciudad de Puebla
              </span>
            </h1>

            <p
              className="text-lg md:text-lg text-blue-100 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              No solo bailamos; honramos la historia, los colores y los ritmos
              que definen a México. Descubre por qué somos símbolo de orgullo
              cultural y talento artístico.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Conocenos</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

                {/* Ripple effect */}
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              </button>

              <button className="group relative bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Play className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative z-10">Mas Información</span>
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              {[
                { number: '500+', label: 'Clientes' },
                { number: '1200+', label: 'Proyectos' },
                { number: '15+', label: 'Años' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Enhanced Image Section */}
          <div
            className={`relative transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative group">
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-400/20 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-blue-300/25 rounded-full animate-pulse delay-1000 group-hover:scale-110 transition-transform duration-500"></div>

              {/* Main image container with advanced effects */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <Image
                  src="/slider5.jpg"
                  alt="Innovación tecnológica"
                  width={1000}
                  height={1600}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-blue-600/20 group-hover:from-blue-900/40 transition-all duration-500"></div>

                {/* Interactive particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-300 rounded-full animate-ping"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + i * 5}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-8 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">
                    Arequipa, Perú
                  </h3>
                  <p className="text-blue-100">
                    Evento Internacional - Festidanza 2024
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/50 rounded-2xl transition-all duration-500"></div>
              </div>

              {/* Rotating decorative ring */}
              <div className="absolute top-1/2 -right-12 w-40 h-40 border-4 border-blue-400/20 rounded-full animate-spin-slow group-hover:border-blue-400/40 transition-colors duration-500">
                <div className="absolute top-4 left-4 w-4 h-4 bg-blue-400/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-3 h-3 bg-blue-300/60 rounded-full animate-pulse delay-1000"></div>
              </div>

              {/* Interactive glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="relative">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
            <div className="absolute -inset-2 border border-white/30 rounded-full animate-ping"></div>
          </div>
          <p className="text-white/70 text-xs mt-2 animate-fade-in">Scroll para explorar</p>
        </div> */}
      </div>

      {/* Animated Background Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-blue-800/30 to-transparent"></div>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="rgba(59, 130, 246, 0.1)"
            className="animate-pulse"
          />
          <path
            d="M0,80 C300,140 900,20 1200,80 L1200,120 L0,120 Z"
            fill="rgba(59, 130, 246, 0.05)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>
    </section>
  );
};
