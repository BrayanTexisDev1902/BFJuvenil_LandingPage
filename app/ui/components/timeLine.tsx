"use client";

import React, { useEffect, useRef, useState } from "react";
import { Calendar, Award, Users, Rocket, Globe, Zap } from "lucide-react";
import Image from "next/image";

export const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    {
      year: "1999",
      title: "Fundación del Ballet Folklorico Juvenil",
      description:
        "Iniciamos nuestro viaje con una visión clara: transformar ideas.",
      image: "/LogoBFJ.jpg",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-400 to-blue-500",
    },
    {
      year: "2012",
      title: "Titulo de ejemplo 1",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: "/slider2.jpg",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2015",
      title: "Titulo de ejemplo 2",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: "/slider3.jpg",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
    },
    {
      year: "2018",
      title: "Titulo de ejemplo 3",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: "/slider4.jpg",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-700 to-blue-800",
    },
    {
      year: "2021",
      title: "Titulo de ejemplo 4",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: "/slider5.jpg",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-800 to-blue-900",
    },
    {
      year: "2024",
      title: "Titulo de ejemplo 5",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: "/slider6.jpg",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-500 to-blue-800",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      id="antecedentes"
      className="pb-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestra Historia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un viaje de innovación y crecimiento a través de los años
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${
                    event.color
                  } flex items-center justify-center text-white shadow-lg z-10 transition-all duration-700 ${
                    visibleItems.includes(index)
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                >
                  {event.icon}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 transition-all duration-1000 ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-y-0 translate-x-0"
                      : `opacity-0 translate-y-8 ${
                          index % 2 === 0
                            ? "md:-translate-x-8"
                            : "md:translate-x-8"
                        }`
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      {/* Year Badge */}
                      <div
                        className={`absolute top-4 left-4 bg-gradient-to-r ${event.color} text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg`}
                      >
                        {event.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div
                      className={`h-1 bg-gradient-to-r ${event.color}`}
                    ></div>
                  </div>
                </div>

                {/* Year Display for Mobile */}
                {/* <div
                  className={`md:hidden absolute left-16 top-0 bg-gradient-to-r ${
                    event.color
                  } text-white px-3 py-1 rounded-full text-sm font-semibold transition-all duration-700 ${
                    visibleItems.includes(index)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  {event.year}
                </div> */}
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="flex flex-col gap-2">
              {timelineEvents.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    visibleItems.includes(index)
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "15+", label: "Años de Historia" },
            { number: "500+", label: "Proyectos Completados" },
            { number: "50+", label: "Premios Recibidos" },
            { number: "25+", label: "Países Atendidos" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                visibleItems.length > 3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
