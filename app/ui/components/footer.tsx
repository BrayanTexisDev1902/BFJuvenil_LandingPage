"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">
              Ballet Folclorico Juvenil
            </h3>
            <p className="text-gray-300 leading-relaxed">
              No solo bailamos; honramos la historia, los colores y los ritmos
              que definen a México. Descubre por qué somos símbolo de orgullo
              cultural y talento artístico.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-400">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Presentaciones Artisticas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Renta De Trajes
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-400">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Antecedentes
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Coordinación
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Repertorio
                </a>
              </li>
                <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Giras Internacionales
                </a>
              </li>
                <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Unete a Nosotros
                </a>
              </li>
                <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-400">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  123 Business Street, Tech City, TC 12345
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@bluecorp.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center mb-8">
            <h4 className="text-xl font-semibold text-blue-400 mb-2">Suscríbete a nuestro newsletter</h4>
            <p className="text-gray-300">Recibe las últimas noticias y actualizaciones sobre tecnología</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Suscribirse
            </button>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ballet Folklorico Juvenil. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Términos de Servicio
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
