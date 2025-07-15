'use client';

import React from "react";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated background shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-4xl font-bold text-white mb-6 leading-tight capitalize">
              ¡Bienvenido!, Somos 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-300 to-blue-500 bg-[length:200%_auto] animate-blue-flow">El Ballet Folklorico Juvenil de la Ciudad de Puebla</span>
            </h1>
            <p className="text-xl md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              {/* Una explosión de color, cultura y pasión por el folclor mexicano. */}
              No solo bailamos; honramos la historia, los colores y los ritmos que definen a México. Descubre por qué somos símbolo de orgullo cultural y talento artístico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center items-center">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
                Conocenos
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Mas Información
              </button>
            </div>
          </div>

          {/* Animated Image */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-300/30 rounded-full animate-pulse delay-1000"></div>

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  width={800}
                  height={600}
                  src="/slider4.jpg"
                  alt="Innovación tecnológica"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

                {/* Overlay content */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">
                    Arequipa, Perú
                  </h3>
                  <p className="text-blue-100 capitalize">Evento Internacional - Festidanza 2022</p>
                </div>
              </div>    

              {/* Decorative elements */}
              <div className="absolute top-1/2 -right-8 w-32 h-32 border-4 border-blue-400/30 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>

        {/* Original centered content for smaller screens */}
        <div className="lg:hidden mt-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Bienvenido, Somos 
            <span className="block text-blue-300">El Ballet Folklorico Juvenil de Puebla</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Una explosión de color, cultura y pasión por el folclor mexicano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
              Conocenos
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Mas Información
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
