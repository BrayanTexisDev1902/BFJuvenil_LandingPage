"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Sparkles,
  Zap,
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    setShowParticles(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document
        .getElementById("contact-section")
        ?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.addEventListener("mousemove", handleMouseMove);
      return () =>
        contactSection.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success animation
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const formFields = [
    {
      name: "name",
      label: "Nombre Completo",
      type: "text",
      icon: <User className="w-5 h-5" />,
      placeholder: "Tu nombre completo",
      required: true,
    },
    {
      name: "email",
      label: "Correo Electrónico",
      type: "email",
      icon: <Mail className="w-5 h-5" />,
      placeholder: "tu@email.com",
      required: true,
    },
    {
      name: "phone",
      label: "Teléfono",
      type: "tel",
      icon: <Phone className="w-5 h-5" />,
      placeholder: "2211234567",
      required: false,
    },
  ];

  const subjectOptions = [
    { value: "", label: "Selecciona un tema" },
    { value: "presentacion", label: "Presentación Artistica" },
    { value: "renta", label: "Renta de trajes" },
  ];

  if (isSubmitted) {
    return (
      <section
        id="contacto"
        className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6 animate-bounce">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¡Mensaje Enviado!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Gracias por contactarnos. Nos pondremos en contacto contigo
              pronto.
            </p>
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400/20 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-blue-300/30 rounded-full animate-bounce"></div>

        {/* Floating particles */}
        {showParticles &&
          [...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-300/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-5 h-5 text-blue-300 animate-pulse" />
            <span className="text-blue-100 font-semibold">
              ¿Estas interesado en nosotros?
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Contáctanos
          </h2>
          <p
            className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Experiencias culturales a la medida para tu evento
          </p>
        </div>

        {/* Enhanced Form */}
        <div className="animate-on-scroll">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-400/20 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 p-6 md:p-8 border-b border-blue-400/20">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 rounded-lg p-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Envíanos tu mensaje
                  </h3>
                  <p className="text-blue-200">
                    Completa el formulario y te responderemos pronto
                  </p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              {/* Basic Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <div
                    key={field.name}
                    className="relative group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-blue-100 mb-2 transition-colors duration-300 group-hover:text-white"
                    >
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-blue-300">*</span>
                      )}
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          focusedField === field.name
                            ? "text-blue-400"
                            : "text-blue-300"
                        }`}
                      >
                        {field.icon}
                      </div>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => handleFocus(field.name)}
                        onBlur={handleBlur}
                        required={field.required}
                        className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-xl text-white placeholder-blue-200 transition-all duration-300 focus:outline-none focus:scale-105 hover:bg-white/15 ${
                          focusedField === field.name
                            ? "border-blue-400 shadow-lg shadow-blue-400/25"
                            : "border-blue-400/30 hover:border-blue-400/50"
                        }`}
                        placeholder={field.placeholder}
                      />

                      {/* Focus indicator */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-blue-500/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
                          focusedField === field.name ? "opacity-100" : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subject Field */}
              <div
                className="relative group animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-blue-100 mb-2 transition-colors duration-300 group-hover:text-white"
                >
                  Asunto <span className="text-blue-300">*</span>
                </label>
                <div className="relative">
                  <div
                    className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      focusedField === "subject"
                        ? "text-blue-400"
                        : "text-blue-300"
                    }`}
                  >
                    <Zap className="w-5 h-5" />
                  </div>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    required
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-xl text-white transition-all duration-300 focus:outline-none focus:scale-105 hover:bg-white/15 ${
                      focusedField === "subject"
                        ? "border-blue-400 shadow-lg shadow-blue-400/25"
                        : "border-blue-400/30 hover:border-blue-400/50"
                    }`}
                  >
                    {subjectOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-blue-900 text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div
                className="relative group animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-100 mb-2 transition-colors duration-300 group-hover:text-white"
                >
                  Mensaje <span className="text-blue-300">*</span>
                </label>
                <div className="relative">
                  <div
                    className={`absolute left-3 top-4 transition-colors duration-300 ${
                      focusedField === "message"
                        ? "text-blue-400"
                        : "text-blue-300"
                    }`}
                  >
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    required
                    rows={6}
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-xl text-white placeholder-blue-200 transition-all duration-300 focus:outline-none focus:scale-105 hover:bg-white/15 resize-none ${
                      focusedField === "message"
                        ? "border-blue-400 shadow-lg shadow-blue-400/25"
                        : "border-blue-400/30 hover:border-blue-400/50"
                    }`}
                    placeholder="Cuéntanos sobre tu proyecto, ideas o cualquier pregunta que tengas..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div
                className="text-center animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-8 md:px-12 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Button content */}
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </div>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-xl transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                </button>
              </div>

              {/* Form Footer */}
              <div
                className="text-center pt-4 border-t border-blue-400/20 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="text-blue-200 text-sm">
                  Al enviar este formulario, aceptas que nos pongamos en
                  contacto contigo para discutir tu requerimiento.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-300/40 rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};
