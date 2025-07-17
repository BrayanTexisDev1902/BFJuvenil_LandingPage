"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  FileText,
  Users,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Laptop,
  Coffee,
} from "lucide-react";
import Image from "next/image";

export const Convocatoria = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("requisitos");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("unete");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const requisitos = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Forma parte de nosotros",
      items: [
        "El Ballet Folklórico Juvenil te invita a ser parte de nuestra nueva generación de talentos. Si tienes 14 años en adelante y te apasiona la danza, la cultura y el folclor, esta es tu oportunidad para formar parte de un grupo dedicado, lleno de energía y amor por el arte",
        "No importa si eres principiante o tienes experiencia, ¡aquí encontrarás un espacio para desarrollarte!",
      ],
    },
    // {
    //   icon: <BookOpen className="w-5 h-5" />,
    //   title: "Conocimientos Requeridos",
    //   items: [
    //     "Fundamentos de programación (JavaScript, Python o Java)",
    //     "Conocimientos básicos de HTML y CSS",
    //     "Familiaridad con bases de datos",
    //     "Inglés técnico (nivel intermedio)",
    //   ],
    // },
    // {
    //   icon: <CheckCircle className="w-5 h-5" />,
    //   title: "Competencias Deseadas",
    //   items: [
    //     "Capacidad de trabajo en equipo",
    //     "Pensamiento analítico y resolución de problemas",
    //     "Adaptabilidad y aprendizaje continuo",
    //     "Comunicación efectiva",
    //   ],
    // },
  ];

  const materiales = [
    // {
    //   icon: <Laptop className="w-5 h-5" />,
    //   title: "Equipo Tecnológico",
    //   items: [
    //     "Laptop o computadora personal (mínimo 8GB RAM)",
    //     "Conexión a internet estable (mínimo 10 Mbps)",
    //     "Cámara web y micrófono funcionales",
    //     "Auriculares o headset para videoconferencias",
    //   ],
    // },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Material de ensayo:",
      items: [
       "Mallón/Pants negro",
       "Blusa/Playera blanca",
       "Cabello recogido",
       "Zapatos de danza",
       "Falda de ensayo (en caso de tener)",
      ],
    },
    // {
    //   icon: <Coffee className="w-5 h-5" />,
    //   title: "Materiales Adicionales",
    //   items: [
    //     "Cuaderno y materiales de escritura",
    //     "Ambiente de trabajo cómodo y silencioso",
    //     "Software de desarrollo instalado",
    //     "Acceso a plataformas de aprendizaje online",
    //   ],
    // },
  ];

  const horarios = [
    {
      dia: "Sábados",
      horario: "2:00 PM - 6:00 PM",
      modalidad: "Presencial",
      //   descripcion: "Jornada completa con descansos programados",
    },
    {
      dia: "Domingos",
      horario: "10:00 AM - 2:00 PM",
      modalidad: "Presencial",
      //   descripcion: "Sesiones de refuerzo y proyectos grupales",
    },
  ];

  const tabs = [
    {
      id: "requisitos",
      label: "Convocatoria",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "materiales",
      label: "Materiales",
      icon: <FileText className="w-4 h-4" />,
    },
    { id: "horarios", label: "Horarios", icon: <Clock className="w-4 h-4" /> },
  ];

  return (
    <section
      id="unete"
      className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <AlertCircle className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-blue-700 font-semibold">
              Convocatoria Abierta 2025
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Se Parte De Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos buscando talento apasionado. Descubre los requisitos,
            materiales necesarios y nuestra ubicación para formar parte del
            Ballet Folklorico Juvenil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Information */}
          <div
            className={`space-y-6 md:space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Featured Image */}
            <div className="relative group mb-6 md:mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <Image
                  src="/convocatoria.jpg"
                  alt="Equipo de trabajo en BFJ"
                  width={800}
                  height={256}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-blue-600/20"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                    Ballet Folklorico Juvenil
                  </h3>
                  <p className="text-sm md:text-base text-blue-100">
                    Integrantes del Ballet - Generación 2025
                  </p>
                </div>

                {/* Floating Stats */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-3 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-blue-600">
                      30+
                    </div>
                    <div className="text-xs text-gray-600">Integrantes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Tabs */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex flex-wrap sm:flex-nowrap border-b border-gray-200">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-1 md:gap-2 px-3 md:px-6 py-3 md:py-4 font-semibold transition-all duration-300 text-sm md:text-base ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <span
                      className={`transition-transform duration-300 ${
                        activeTab === tab.id ? "scale-110" : ""
                      }`}
                    >
                      {tab.icon}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-4 md:p-6">
                {activeTab === "requisitos" && (
                  <div className="space-y-6 animate-fade-in">
                    {requisitos.map((seccion, index) => (
                      <div
                        key={index}
                        className="group"
                        style={{
                          animation: `slideInLeft 0.6s ease-out ${
                            index * 0.2
                          }s both`,
                        }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-blue-100 text-blue-600 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                            {seccion.icon}
                          </div>
                          <h3 className="text-base md:text-lg font-bold text-gray-900">
                            {seccion.title}
                          </h3>
                        </div>
                        <ul className="space-y-2 ml-0 md:ml-12">
                          {seccion.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "materiales" && (
                  <div className="space-y-6 animate-fade-in">
                    {materiales.map((seccion, index) => (
                      <div
                        key={index}
                        className="group"
                        style={{
                          animation: `slideInLeft 0.6s ease-out ${
                            index * 0.2
                          }s both`,
                        }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-blue-100 text-blue-600 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                            {seccion.icon}
                          </div>
                          <h3 className="text-base md:text-lg font-bold text-gray-900">
                            {seccion.title}
                          </h3>
                        </div>
                        <ul className="space-y-2 ml-0 md:ml-12">
                          {seccion.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "horarios" && (
                  <div className="space-y-4 animate-fade-in">
                    {horarios.map((horario, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${
                            index * 0.2
                          }s both`,
                        }}
                      >
                        <div className="flex flex-col gap-3 md:gap-4">
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                              {horario.dia}
                            </h3>
                            <p className="text-blue-600 font-semibold text-sm md:text-base">
                              {horario.horario}
                            </p>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <p className="text-gray-600 text-xs md:text-sm">
                              El horario esta sujeto a cambios.
                            </p>
                            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-1">
                              {horario.modalidad}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                Información de Contacto
              </h3>
              <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
                <div className="flex items-center gap-3 text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <span>2221648589</span>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <span>vicgarciamx2@hotmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Google Maps */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            } mt-8 lg:mt-0`}
          >
            <div className="lg:sticky lg:top-8">
              {/* Location Header */}
              <div className="bg-white rounded-t-2xl shadow-xl p-4 md:p-6 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      Nuestra Ubicación
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Salon de la CTM - Puebla, Pue
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm md:text-base text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    72410, Av 15 Pte 1704, Rivera de Santiago, Heroica Puebla de
                    Zaragoza, Pue.
                  </p>
                  {/* <p className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                  </p> */}
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="relative bg-white rounded-b-2xl shadow-xl overflow-hidden">
                <div className="w-full h-64 md:h-80 lg:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.416956182344!2d-98.213684!3d19.0453968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0d122d9e48f%3A0x636dc3d568da3b78!2sSal%C3%B3n%20de%20la%20CTM%2C%20Puebla%2C%20Pue.!5e0!3m2!1ses!2smx!4v1752778790127!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-2xl"
                  ></iframe>
                </div>

                {/* Map Overlay Info */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm font-semibold text-gray-900">
                      Salon de la CTM
                    </span>
                  </div>
                </div>

                {/* Transportation Info */}
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg">
                  <div className="text-xs text-gray-600 hidden md:block">
                    <p className="font-semibold mb-1">Transporte:</p>
                    <p>🚇 Metro: Línea 2 RUTA</p>
                    <p>🚌 Bus: Rutas 2a, 12, 68</p>
                    <p>🚗 Parking disponible</p>
                  </div>
                  <div className="text-xs text-gray-600 md:hidden">
                    <p className="font-semibold">🚇🚌🚗</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div
          className={`mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            {
              number: "200+",
              label: "Aplicaciones Recibidas",
              icon: <Users className="w-6 h-6" />,
            },
            {
              number: "50+",
              label: "Posiciones Abiertas",
              icon: <FileText className="w-6 h-6" />,
            },
            {
              number: "95%",
              label: "Tasa de Retención",
              icon: <CheckCircle className="w-6 h-6" />,
            },
            {
              number: "4.8/5",
              label: "Satisfacción Laboral",
              icon: <AlertCircle className="w-6 h-6" />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full mb-3 md:mb-4 group-hover:shadow-lg transition-shadow duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
