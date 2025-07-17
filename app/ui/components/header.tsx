"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("inicio");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector("header")?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100,
        100
      );
      setScrollProgress(progress);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "inicio", label: "Inicio", href: "#inicio" },
    { id: "nosotros", label: "Nosotros", href: "#nosotros" },
    { id: "antecedentes", label: "Antecedentes", href: "#antecedentes" },
    { id: "coordinacion", label: "Coordinación", href: "#coordinacion" },
    { id: "servicios", label: "Servicios", href: "#servicios" },
    { id: "repertorio", label: "Repertorio", href: "#repertorio" },
    { id: "giras", label: "Giras", href: "#giras" },
    { id: "unete", label: "Unete", href: "#unete" },
    { id: "contacto", label: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      href: "https://www.facebook.com/profile.php?id=100067375140338",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-4 h-4" />,
      href: "https://www.instagram.com/bfjuvenil_puebla?igsh=ZHk4djRicjJmOTA=",
      color: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      href: "https://www.tiktok.com/@juvenildepuebla?_t=ZS-8y7BmUqQsjZ&_r=1",
      color: "hover:text-black",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-4 h-4" />,
      href: "https://youtube.com/@balletfolkloricojuvenildel9676?si=571aaLNedG_rRXiK",
      color: "hover:text-red-500",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-2xl border-b border-blue-100"
          : "bg-transparent"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 group animate-fade-in">
            <div className="relative">
              <h1
                className={`text-2xl font-bold transition-all duration-500 transform group-hover:scale-110 ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
              >
                <span className="flex relative gap-2">
                  <Image
                    width={80}
                    height={80}
                    src="/LogoBFJ.jpg"
                    alt="LOGO"
                    className="h-10 w-10 object-cover rounded-full" // Ajusta el tamaño del logo dentro del círculo
                  />
                  BF Juvenil
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </span>
              </h1>

              {/* Logo decoration */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation with Enhanced Animations */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setActiveItem(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-500 hover:scale-110 group overflow-hidden rounded-lg ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                  style={{
                    animation: `slideInDown 0.8s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Background hover effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg`}
                  ></div>

                  {/* Text */}
                  <span className="relative z-10">{item.label}</span>

                  {/* Active/Hover indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      activeItem === item.id
                        ? `w-full ${isScrolled ? "bg-blue-600" : "bg-blue-200"}`
                        : `${isScrolled ? "bg-blue-600" : "bg-blue-200"}`
                    }`}
                  ></span>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Social Media Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-full transition-all duration-500 transform hover:scale-125 hover:rotate-12 ${
                  isScrolled
                    ? `text-gray-600 ${social.color} bg-gray-50 hover:bg-white hover:shadow-lg`
                    : `text-white ${social.color.replace(
                        "hover:",
                        "hover:"
                      )} bg-white/10 hover:bg-white/20 backdrop-blur-sm`
                }`}
                style={{
                  animation: `fadeIn 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                {/* Icon */}
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>

                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </div>

                {/* Pulse effect */}
                <div className="absolute inset-0 border-2 border-current rounded-full opacity-0 group-hover:opacity-30 animate-ping"></div>
              </a>
            ))}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`group relative p-3 rounded-lg transition-all duration-500 transform hover:scale-110 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600 bg-gray-50 hover:bg-white hover:shadow-lg"
                  : "text-white hover:text-blue-200 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with rotation animation */}
              <div className="relative z-10 transition-transform duration-500">
                {isMenuOpen ? (
                  <X className="w-6 h-6 transform rotate-180" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </div>

              {/* Pulse effect */}
              <div className="absolute inset-0 border border-current rounded-lg opacity-0 group-hover:opacity-30 animate-pulse"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-lg rounded-2xl mt-4 shadow-2xl border border-blue-100">
            {/* Mobile menu items */}
            {menuItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                className="group relative block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:shadow-md overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: isMenuOpen
                    ? `slideInLeft 0.5s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                {/* Background slide effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                {/* Text */}
                <span className="relative z-10 font-medium">{item.label}</span>

                {/* Arrow indicator */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}

            {/* Mobile social links */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-500 mb-3 px-4">
                Síguenos en:
              </p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-full transition-all duration-300 transform hover:scale-125 text-gray-600 ${social.color} bg-gray-50 hover:bg-white hover:shadow-lg`}
                    style={{
                      animation: isMenuOpen
                        ? `fadeIn 0.5s ease-out ${
                            (index + menuItems.length) * 0.1
                          }s both`
                        : "none",
                    }}
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Progress Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-200/30 to-blue-600/30 transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>
    </header>
  );
};
