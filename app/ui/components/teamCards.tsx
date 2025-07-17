"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Award,
  Calendar,
  Users,
  Star,
  Facebook
} from "lucide-react";
import Image from "next/image";
// import { Facebook } from 'lucide-react';

export const TeamCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Prof. Victor Garcia Reyes",
      position: "Director del Ballet Folklorico Juvenil",
      department: "Liderazgo Estratégico",
      image: "/directorBFJ.jpg",
      email: "victor.garcia@gmail.com",
      phone: "+1 (555) 123-4567",
      location: "Puebla, México",
      bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      experience: "15+ años",
      projects: "200+ proyectos",
      certifications: [
        "MBA - Harvard Business School",
        "PMP Certified",
        "Agile Scrum Master",
      ],
      skills: [
        "Liderazgo Estratégico",
        "Transformación Digital",
        "Gestión de Equipos",
        "Planificación Empresarial",
      ],
      achievements: [
        "Incrementó ingresos de la empresa en 400% en 5 años",
        "Lideró la expansión internacional a 15 países",
        'Reconocida como "CEO del Año" por Tech Leaders 2023',
      ],
      socialMedia: {
        facebook: "https://linkedin.com/in/maria-gonzalez",
        twitter: "https://twitter.com/mariagonzalez",
        email: "maria.gonzalez@bluecorp.com",
      },
      gradient: "from-blue-500 to-blue-700",
      accentColor: "blue-600",
    },
    {
      id: 2,
      name: "Lic. Yessica Anahi Gonzalez Vazquez",
      position: "Coordinadora del Ballet Folklorico Juvenil",
      department: "Innovación Tecnológica",
      image: "/coordinadorBFJ.jpg",
      email: "yessica.gonazalez@gmail.com",
      phone: "+1 (555) 987-6543",
      location: "Puebla, Mexico",
      bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      experience: "12+ años",
      projects: "150+ proyectos",
      certifications: [
        "AWS Solutions Architect",
        "Google Cloud Professional",
        "Microsoft Azure Expert",
      ],
      skills: [
        "Arquitectura de Software",
        "Inteligencia Artificial",
        "Cloud Computing",
        "DevOps",
      ],
      achievements: [
        "Desarrolló arquitectura escalable para 1M+ usuarios",
        "Patente registrada en algoritmos de ML",
        "Speaker en 25+ conferencias internacionales",
      ],
      socialMedia: {
        linkedin: "https://linkedin.com/in/carlos-rodriguez",
        github: "https://github.com/carlosrodriguez",
        twitter: "https://twitter.com/carlostech",
      },
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue-700",
    },
  ];

  return (
    <section
      id="coordinacion"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Coordinación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los líderes visionarios que impulsan nuestro éxito
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.3}s` }}
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Header Section */}
                <div
                  className={`relative bg-gradient-to-r ${member.gradient} p-8 text-white`}
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>

                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    {/* Profile Image */}
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Status Indicator */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Basic Info */}
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 transform group-hover:scale-105 transition-transform duration-300">
                        {member.name}
                      </h3>
                      <p className="text-blue-100 text-lg font-semibold mb-1">
                        {member.position}
                      </p>
                      <p className="text-blue-200 text-sm">
                        {member.department}
                      </p>

                      {/* Quick Stats */}
                      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                        <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {member.experience}
                        </div>
                        <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {member.projects}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                  {/* Bio */}
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                      <span className="text-sm">{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 md:col-span-2">
                      <MapPin className="w-5 h-5" />
                      <span className="text-sm">{member.location}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-blue-600" />
                      Especialidades
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`bg-blue-50 text-${member.accentColor} px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      Logros Destacados
                    </h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      Certificaciones
                    </h4>
                    <div className="space-y-2">
                      {member.certifications.map((cert, certIndex) => (
                        <div
                          key={certIndex}
                          className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-300"
                        >
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Media */}
                  {/* <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Conecta con {member.name.split(" ")[1]}
                    </h4>
                    <div className="flex gap-4">
                      {member.socialMedia.linkedin && (
                        <a
                          href={member.socialMedia.linkedin}
                          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.socialMedia.twitter && (
                        <a
                          href={member.socialMedia.twitter}
                          className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.socialMedia.github && (
                        <a
                          href={member.socialMedia.github}
                          className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {member.socialMedia.email && (
                        <a
                          href={`mailto:${member.socialMedia.email}`}
                          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div> */}
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </div>

              {/* Floating Elements */}
              <div
                className={`absolute -top-4 -right-4 w-8 h-8 bg-${member.accentColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110`}
              ></div>
              <div
                className={`absolute -bottom-4 -left-4 w-6 h-6 bg-${member.accentColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110`}
              ></div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        {/* <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Liderazgo en Números
            </h3>
            <p className="text-gray-600">
              El impacto de nuestro equipo directivo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">27+</div>
              <div className="text-gray-600 text-sm">
                Años de Experiencia Combinada
              </div>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">350+</div>
              <div className="text-gray-600 text-sm">Proyectos Liderados</div>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Star className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Países con Presencia</div>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500%</div>
              <div className="text-gray-600 text-sm">
                Crecimiento Empresarial
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
