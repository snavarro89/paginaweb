"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    numeroTecnicos: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend implementation
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hablemos de Cuánto te Está Costando el Caos Operativo
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Agenda una sesión gratuita donde calcularemos el costo real del caos en
            tu operación y te mostraremos cómo Insquid lo elimina. Sin compromiso,
            solo números reales.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Agenda tu Sesión de Diagnóstico
              </h2>
              <p className="text-gray-600 mb-6">
                Completa el formulario y te contactaremos para agendar una sesión
                donde calcularemos cuánto te está costando el caos operativo y cómo
                Insquid lo elimina.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="numeroTecnicos"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Número de Técnicos / Servicios
                  </label>
                  <select
                    id="numeroTecnicos"
                    name="numeroTecnicos"
                    value={formData.numeroTecnicos}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1-5">1-5 técnicos</option>
                    <option value="6-15">6-15 técnicos</option>
                    <option value="16-30">16-30 técnicos</option>
                    <option value="31-50">31-50 técnicos</option>
                    <option value="50+">Más de 50 técnicos</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Correo de Ventas
                  </h3>
                  <a
                    href="mailto:ventas@insquid.com"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    ventas@insquid.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Teléfono / WhatsApp
                  </h3>
                  <a
                    href="tel:+528112345678"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    +52 81 1234 5678
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ubicación
                  </h3>
                  <p className="text-gray-700">
                    Monterrey, Nuevo León, México
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Horario de Atención
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM (CST)
                  </p>
                  <p className="text-gray-700">
                    <strong>Sábados:</strong> 10:00 AM - 2:00 PM (CST)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

