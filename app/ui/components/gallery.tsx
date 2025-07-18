"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: "/giras/honduras2004.jpg",
      alt: "Honduras 2024",
      category: "2024",
    },
    {
      id: 2,
      src: "/giras/peru2010.jpg",
      alt: "Peru 2010",
      category: "2010",
    },
    {
      id: 3,
      src: "/giras/arequipa2011.jpg",
      alt: "Arequipa 2011",
      category: "2011",
    },
    {
      id: 4,
      src: "/giras/costaRica2014.JPG",
      alt: "Costa Rica 2014",
      category: "2014",
    },
    {
      id: 6,
      src: "/slider6.jpg",
      alt: "Innovación tecnológica",
      category: "Innovación",
    },
    {
      id: 5,
      src: "/slider3.jpg",
      alt: "Peru 2024",
      category: "2024",
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="giras" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 capitalize">
            Giras Internacionales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un vistazo a lo que hacemos y el repertorio presentado en diferentes eventos importantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-on-scroll"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectFit: "cover" }}
                  priority={index < 3}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium text-blue-300">
                    {image.category}
                  </p>
                  <p className="text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in">
          <div className="relative max-w-4xl max-h-full p-4">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={900}
              className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
              style={{ objectFit: "contain" }}
              priority
            />

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-sm text-blue-300">
                {images[selectedImage].category}
              </p>
              <p className="text-lg font-semibold">
                {images[selectedImage].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
