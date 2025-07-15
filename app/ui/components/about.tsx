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

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              vero, saepe delectus aperiam quod inventore quasi? Aut, sit animi.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              vero, saepe delectus aperiam quod inventore quasi? Aut, sit animi,
              velit fugit suscipit omnis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint vero, saepe delectus aperiam quod inventore
              quasi? Aut, sit animi, velit fugit suscipit omnis.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold">
                Titulo 1
              </div>
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold">
                Titulo 2
              </div>
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold">
                Titulo 3
              </div>
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold">
                Titulo 4
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform rotate-6"></div>
            <Image
              width={800}
              height={600}
              src="/slider3.jpg"
              alt="Innovación tecnológica"
              className="relative rounded-2xl shadow-2xl  object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-6 left-6 text-white">
              <h3 className="text-xl font-bold">Arequipa, Perú</h3>
              <p className="text-blue-100 capitalize">
                Evento Internacional - Festidanza 2022
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:shadow-lg transition-shadow duration-300`}
              >
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
