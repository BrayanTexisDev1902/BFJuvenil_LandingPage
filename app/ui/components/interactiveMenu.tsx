"use client";

import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Globe,
  Users,
  Award,
  TrendingUp,
  Database,
} from "lucide-react";
import Image from "next/image";

export const InteractiveMenu = () => {
  const [activeTab, setActiveTab] = useState("desarrollo");

  const menuOptions = [
    {
      id: "desarrollo",
      title: "Puebla",
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "mobile",
      title: "Jalisco",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-blue-600 to-blue-700",
    },
    {
      id: "cloud",
      title: "Veracruz",
      icon: <Cloud className="w-5 h-5" />,
      color: "from-blue-700 to-blue-800",
    },
    {
      id: "seguridad",
      title: "Sinaloa",
      icon: <Shield className="w-5 h-5" />,
      color: "from-blue-800 to-blue-900",
    },
    {
      id: "optimizacion",
      title: "Polkas de Chihuahua",
      icon: <Zap className="w-5 h-5" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      id: "marketing",
      title: "Nayarit",
      icon: <Globe className="w-5 h-5" />,
      color: "from-blue-600 to-blue-800",
    },
  ];

  const contentData = {
    desarrollo: {
      title: "Estado de Puebla",
      subtitle: "México",
      description:
        "El Jarabe Poblano es una expresión dancística y musical emblemática del folclore de Puebla, que combina la elegancia, el colorido y la energía de las tradiciones mestizas de la región. A diferencia del jarabe tapatío (de Jalisco), el jarabe poblano se distingue por su ritmo vivaz, sus figuras coreográficas llenas de picardía y su estrecho vínculo con las festividades locales",
      features: [
        "Jarabes Poblanos",
        "Mama carlota",
        "El guajito",
        "Poblano soy",
        "Mole poblano",
        "Que chula es Puebla",
      ],
      stats: [
        {
          icon: <Users className="w-6 h-6" />,
          number: "200+",
          label: "Sitios Web Creados",
        },
        {
          icon: <Award className="w-6 h-6" />,
          number: "99%",
          label: "Satisfacción Cliente",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          number: "50%",
          label: "Mejora Rendimiento",
        },
      ],
      images: [
        {
          src: "/HeroImage.jpg",
          alt: "Desarrollo web moderno",
        },
        {
          src: "/repertorio/puebla1.jpg",
          alt: "Equipo de desarrollo",
        },
      ],
    },
    mobile: {
      title: "Estado de Jalisco",
      subtitle: "México",
      description:
        "La música típica de Jalisco es el mariachi. Usan instrumento como la guitarra, guitarrón, trompeta, arpa, vihuela y violín. Fue declarado Patrimonio Cultural Intangible de la Humanidad por la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO).",
      features: [
        "Los arrieros",
        "El son de la negra",
        "Jarabe tapatio",
        "El gusto",
        "Son de los aguacates",
        "Mi ciudad",
      ],
      stats: [
        {
          icon: <Smartphone className="w-6 h-6" />,
          number: "150+",
          label: "Apps Desarrolladas",
        },
        {
          icon: <Users className="w-6 h-6" />,
          number: "1M+",
          label: "Usuarios Activos",
        },
        {
          icon: <Award className="w-6 h-6" />,
          number: "4.8",
          label: "Rating Promedio",
        },
      ],
      images: [
        {
          src: "/repertorio/jalisco1.jpg",
          alt: "Desarrollo de apps móviles",
        },
        {
          src: "/repertorio/jalisco2.jpg",
          alt: "Testing de aplicaciones",
        },
      ],
    },
    cloud: {
      title: "Estado  de Veracruz",
      subtitle: "México",
      description:
        "Los bailes y danzas típicos de Veracruz se basan en la música jarocha, que se desarrolló durante los siglos XVII y XVIII. La música de la región de Veracruz está basada en una mezcla de música española con ritmos de África y del Caribe. Los bailes, también llamados sones y jarabes, están compuestos de movimientos zapateados y características del flamenco. La mayoría de las danzas típicas de Veracruz se caracterizan por sus ritmos rápidos y el énfasis en el movimiento de los pies",
      features: [
        "Bemba y tablao",
        "Cafe Cafe",
        "La bamba",
        "La gallina",
        "El colas",
        "Canelo",
        "La bruja",
        "Zapateado Veracruzano",
      ],
      stats: [
        {
          icon: <Cloud className="w-6 h-6" />,
          number: "100+",
          label: "Migraciones Cloud",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          number: "40%",
          label: "Reducción Costos",
        },
        {
          icon: <Database className="w-6 h-6" />,
          number: "99.9%",
          label: "Uptime Garantizado",
        },
      ],
      images: [
        {
          src: "/repertorio/veracruz1.jpg",
          alt: "Infraestructura cloud",
        },
        {
          src: "/repertorio/veracruz2.jpg",
          alt: "Monitoreo de sistemas",
        },
      ],
    },
    seguridad: {
      title: "Estado de Sinaloa",
      subtitle: "México",
      description:
        "Sinaloa, tierra de música alegre y danzas llenas de energía, tiene un folclore vibrante que refleja su historia agrícola, su mestizaje y su conexión con el mar. Entre sus tradiciones más destacadas están la tambora sinaloense, los bailes típicos y las coloridas fiestas populares.",
      features: [
        "Mazatlan",
        "El sinaloense",
        "Mundo engañoso",
        "El toro",
        "Pato asado",
        // "Cumplimiento de normativas (GDPR, ISO 27001)",
      ],
      stats: [
        {
          icon: <Shield className="w-6 h-6" />,
          number: "0",
          label: "Brechas de Seguridad",
        },
        {
          icon: <Users className="w-6 h-6" />,
          number: "500+",
          label: "Empleados Capacitados",
        },
        {
          icon: <Award className="w-6 h-6" />,
          number: "100%",
          label: "Cumplimiento Normativo",
        },
      ],
      images: [
        {
          src: "/repertorio/sinaloa3.jpg",
          alt: "Ciberseguridad",
        },
        {
          src: "/repertorio/sinaloa2.jpg",
          alt: "Monitoreo de seguridad",
        },
      ],
    },
    optimizacion: {
      title: "Estado de Chihuahua",
      subtitle: "México",
      description:
        "Los bailes y danzas típicos de Chihuahua, en México, son el resultado de la adopción de coreografías europeas principalmente polacas. La zona norte de México, en donde se ubica el estado de Chihuahua adoptó los valses y las polkas y les dio un estilo particular. Entre las principales danzas, además de la polka y los valses, se encuentran las redovas, los chotises y las mazurcas",
      features: [
        "Aguas del rio de nonoava",
        "Luz y sombras",
        "Pancho villa",
        "La loca",
        "Santa rita",
        "La rogona",
      ],
      stats: [
        {
          icon: <Zap className="w-6 h-6" />,
          number: "70%",
          label: "Mejora Velocidad",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          number: "60%",
          label: "Reducción Recursos",
        },
        {
          icon: <Users className="w-6 h-6" />,
          number: "85%",
          label: "Mejor UX",
        },
      ],
      images: [
        {
          src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
          alt: "Optimización de sistemas",
        },
        {
          src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
          alt: "Análisis de rendimiento",
        },
      ],
    },
    marketing: {
      title: "Estado de Nayarit",
      subtitle: "México",
      description:
        "Nayarit, un estado donde convergen el Pacífico, la sierra y las raíces indígenas, guarda un folclore lleno de ritos ancestrales, danzas ceremoniales y música que narra historias de la naturaleza. Su cultura es un puente entre las tradiciones huicholas (Wixárikas), coras (Náayeri) y el mestizaje costeño.",
      features: [
        "Voy con mi Novia",
        "El son del buey",
        "El gallito",
        "Cuchillos",
        "El armadillo",
        "Jarabe Nayarita",
      ],
      stats: [
        {
          icon: <Globe className="w-6 h-6" />,
          number: "300%",
          label: "Aumento Tráfico",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          number: "250%",
          label: "Mejora ROI",
        },
        {
          icon: <Users className="w-6 h-6" />,
          number: "10K+",
          label: "Leads Generados",
        },
      ],
      images: [
        {
          src: "/slider3.jpg",
          alt: "Marketing digital",
        },
        {
          src: "/slider2.jpg",
          alt: "Análisis de datos",
        },
      ],
    },
  };

  const activeContent = contentData[activeTab as keyof typeof contentData];

  return (
    <section
      id="repertorio"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro Repertorio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un vistazo a lo que hacemos y el repertorio presentado en diferentes
            eventos importantes
          </p>
        </div>

        {/* Interactive Menu */}
        <div className="mb-12 animate-on-scroll">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {menuOptions.map((option, index) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={`group relative px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
                  activeTab === option.id
                    ? `bg-gradient-to-r ${option.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex items-center gap-2">
                  {/* <span className={`transition-transform duration-300 ${
                    activeTab === option.id ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    {option.icon}
                  </span> */}
                  <span className="text-sm md:text-base">{option.title}</span>
                </div>

                {/* Active indicator */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white transition-all duration-300 ${
                    activeTab === option.id ? "w-full" : ""
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="animate-on-scroll">
          <div
            key={activeTab}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
          >
            {/* Header Section */}
            <div
              className={`bg-gradient-to-r ${
                menuOptions.find((opt) => opt.id === activeTab)?.color
              } text-white p-8 md:p-12`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in-up">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {activeContent.title}
                  </h3>
                  <p className="text-xl text-blue-100 mb-6">
                    {activeContent.subtitle}
                  </p>
                  <p className="text-blue-50 leading-relaxed">
                    {activeContent.description}
                  </p>
                </div>

                {/* Featured Image */}
                <div
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src={activeContent.images[0].src}
                      alt={activeContent.images[0].alt}
                      width={600}
                      height={320}
                      className="w-full h-64 md:h-80 object-cover"
                      style={{ objectFit: "cover" }}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Features List */}
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    Piezas representativas
                  </h4>
                  <ul className="space-y-4">
                    {activeContent.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 group"
                        style={{
                          animation: `slideInLeft 0.5s ease-out ${
                            index * 0.1
                          }s both`,
                        }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-blue-200 transition-colors duration-300">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Secondary Image */}
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="relative">
                    <div className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500">
                      <Image
                        src={activeContent.images[1].src}
                        alt={activeContent.images[1].alt}
                        width={600}
                        height={256}
                        className="w-full h-64 object-cover"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                    </div>

                    {/* Floating stats */}
                    {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {activeContent.stats[0].number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {activeContent.stats[0].label}
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Statistics Section */}
              {/* <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {activeContent.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                      }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* CTA Button */}
              {/* <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <button className={`bg-gradient-to-r ${menuOptions.find(opt => opt.id === activeTab)?.color} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
                  Solicitar Consulta Gratuita
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
