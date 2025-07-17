"use client";

import React, { useState, useEffect } from "react";

import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    "Inicio",
    "Nosotros",
    "Antecedentes",
    "Coordinación",
    "Servicios",
    "Repertorio",
    "Giras Internacionales",
    "Unete a Nosotros",
    "Contacto",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-gradient-to-r from-blue-800/85 to-blue-900/85 backdrop-blur-sm shadow-lg text-white" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 animate-fade-in gap-4">
            <Image
              width={80}
              height={80}
              src="/LogoBFJ.jpg"
              alt="LOGO"
              className="h-10 w-10 object-cover rounded-full" // Ajusta el tamaño del logo dentro del círculo
            />
            <h1
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              BF Juvenil
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-baseline space-x-2">
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group ${
                    isScrolled
                      ? "text-white hover:text-blue-300"
                      : "text-white hover:text-blue-200"
                  }`}
                  style={{
                    animation: `slideInDown 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-blue-200" : "bg-blue-200"
                    }`}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          {/* <div className="hidden lg:flex items-center space-x-4 border-l-2 border-l-white/80 pl-4">
            <div
              className={`flex items-center space-x-2 text-sm ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+52 (2222345679) </span>
            </div>
            <div
              className={`flex items-center space-x-2 text-sm ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>BFJuvenil@gmail.com</span>
            </div>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-700 hover:text-white hover:bg-blue-700/70 rounded-md transition-all duration-300 transform hover:translate-x-2 hover:shadow-md"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: isMenuOpen
                    ? `slideInLeft 0.4s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
