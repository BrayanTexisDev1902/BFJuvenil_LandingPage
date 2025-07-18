"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">
              Ballet Folklorico Juvenil
            </h3>
            <p className="text-gray-300 leading-relaxed">
              No solo bailamos; honramos la historia, los colores y los ritmos
              que definen a México. Descubre por qué somos símbolo de orgullo
              cultural y talento artístico.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100067375140338"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/bfjuvenil_puebla?igsh=ZHk4djRicjJmOTA="
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://youtube.com/@balletfolkloricojuvenildel9676?si=571aaLNedG_rRXiK"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://www.tiktok.com/@juvenildepuebla?_t=ZS-8y7BmUqQsjZ&_r=1"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
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
                  href="#nosotros"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#antecedentes"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Antecedentes
                </a>
              </li>
              <li>
                <a
                  href="#coordinacion"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Coordinación
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#repertorio"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Repertorio
                </a>
              </li>
              <li>
                <a
                  href="#giras"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Giras Internacionales
                </a>
              </li>
              <li>
                <a
                  href="#unete"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Unete a Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
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
                  72410, Av 15 Pte 1704, Rivera de Santiago, Heroica Puebla de
                  Zaragoza, Pue.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">2221648589</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">vicgarciamx2@hotmail.com</span>
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
