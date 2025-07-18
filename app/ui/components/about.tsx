"use client";

import { Users, Target, Award, TrendingUp } from "lucide-react";
import Image from "next/image";

export const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Titulo ejemplo 1",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "1200+",
      label: "Titulo ejemplo 2",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Titulo ejemplo 3",
      color: "from-blue-700 to-blue-800",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "98%",
      label: "Titulo ejemplo 4",
      color: "from-blue-800 to-blue-900",
    },
  ];

  const items = [
    { country: "Honduras", flagCode: "hn", year: "2004", city: "" },
    { country: "Honduras", flagCode: "hn", year: "2006", city: "" },
    { country: "Perú", flagCode: "pe", year: "2007", city: "Arequipa" },
    { country: "Perú", flagCode: "pe", year: "2008", city: "Ilo" },
    { country: "Venezuela", flagCode: "ve", year: "2010", city: "Táchira" },
    { country: "Perú", flagCode: "ve", year: "2011", city: "Arequipa" },
    { country: "Costa Rica", flagCode: "cr", year: "2014", city: "" },
    {
      country: "México",
      flagCode: "mx",
      year: "",
      city: "Desfile de las calaveras",
    },
    {
      country: "México",
      flagCode: "mx",
      year: "",
      city: "Desfiles 5 de mayo y 16 de septiembre",
    },
    {
      country: "México",
      flagCode: "mx",
      year: "",
      city: "Desfile de los alebrijes CDMX",
    },
    {
      country: "México",
      flagCode: "mx",
      year: "[2017-2018-2019]",
      city: "Récord la Bamba, Xalapa",
    },
    // ... más items
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-xl text-blue-500 font-semibold leading-relaxed">
              Ballet Folklórico Juvenil de la Ciudad de Puebla
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Dir. Víctor García Reyes
            </p>
            <p className="text-gray-800 mb-2 leading-relaxed">
              El Ballet Folklórico Juvenil de la Ciudad de Puebla se fundó en el
              año de 1999 con estudiantes de nivel medio superior bajo la
              dirección del Prof. Víctor García y con el nombre de grupo de
              danza mazatl de puebla. En el año de 2007 cambiamos el nombre a
              Ballet Folklórico Juvenil de la Ciudad de Puebla
            </p>
            <p className="text-gray-800 mb-8 leading-relaxed">
              A lo largo de estos años se ha realizado giras por varios estados
              de la república y a centro y Sudamérica. Representando a nuestro
              país en diversos festivales internacionales de música y danza
              entre otros.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform rotate-6"></div>
            <Image
              width={800}
              height={600}
              src="/BannerBFJ.jpg"
              alt="Innovación tecnológica"
              className="relative border-2 border-blue-600/50 rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* <div className="absolute top-6 left-6 text-white">
              <h3 className="text-xl font-bold">Arequipa, Perú</h3>
              <p className="text-blue-100 capitalize">
                Evento Internacional - Festidanza 2022
              </p>
            </div> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-on-scroll">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-blue-100/60 border border-blue-100 rounded-lg p-3 shadow-sm hover:shadow-lg hover:bg-blue-200/60 transition-shadow"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0 overflow-hidden">
                <img
                  src={`https://flagcdn.com/w40/${item.flagCode}.png`}
                  srcSet={`https://flagcdn.com/w80/${item.flagCode}.png 2x`}
                  width="20"
                  alt={item.country}
                  className="rounded-full object-cover h-full w-full"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-semibold text-blue-800">
                  {item.city ? `${item.city}, ${item.country}` : item.country}
                </p>
                <p className="text-sm text-blue-500">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
