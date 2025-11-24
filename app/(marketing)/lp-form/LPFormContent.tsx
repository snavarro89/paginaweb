"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import { useState } from "react";

export default function LPFormContent() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    numeroTecnicos: "",
    serviciosMensuales: "",
    horasPerdidas: "",
    serviciosSinCobrar: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend implementation
    window.location.href = "/gracias-por-registrarte";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Diagnóstico de Caos Operativo y Potencial de Ahorro
          </h1>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Descubre cuánto te está costando el caos operativo y cómo Insquid puede
            eliminarlo. Completa el formulario y calcularemos el impacto real en tu
            operación.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Qué Incluye el Diagnóstico?
              </h2>
              <div className="space-y-4 mb-8">
                <FeatureCard
                  title="Cálculo del Costo del Caos"
                  description="Calculamos cuántas horas pierdes buscando información, cuántos servicios no se cobran a tiempo, y cuánto dinero se va en retrabajos y urgencias."
                />
                <FeatureCard
                  title="Potencial de Ahorro"
                  description="Te mostramos cuánto podrías ahorrar eliminando el tiempo perdido, acelerando la facturación y reduciendo servicios sin cobrar."
                />
                <FeatureCard
                  title="Plan Personalizado"
                  description="Basado en tu operación, te mostramos cómo Insquid se adapta a tus procesos y elimina el caos específico de tu empresa."
                />
                <FeatureCard
                  title="Sesión Gratuita"
                  description="Una llamada de 30 minutos donde hacemos los números juntos. Sin compromiso, solo números reales de tu operación."
                />
              </div>
              <div className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  El Número Real
                </h3>
                <p className="text-gray-700 text-sm">
                  Un técnico promedio pierde 2-3 horas diarias en tareas no
                  productivas. Eso son 40-60 horas al mes por técnico. Multiplica eso
                  por tu costo por hora y número de técnicos, y verás el costo real
                  del caos operativo.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Completa el Diagnóstico
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Mientras más información compartas, más preciso será el cálculo del
                costo de tu caos operativo.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre Completo *
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
                    Número de Técnicos
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
                    htmlFor="serviciosMensuales"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Servicios Mensuales Aproximados
                  </label>
                  <select
                    id="serviciosMensuales"
                    name="serviciosMensuales"
                    value={formData.serviciosMensuales}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1-50">1-50 servicios/mes</option>
                    <option value="51-150">51-150 servicios/mes</option>
                    <option value="151-300">151-300 servicios/mes</option>
                    <option value="301-500">301-500 servicios/mes</option>
                    <option value="500+">Más de 500 servicios/mes</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="horasPerdidas"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ¿Cuántas horas al día pierden tus técnicos buscando información?
                  </label>
                  <select
                    id="horasPerdidas"
                    name="horasPerdidas"
                    value={formData.horasPerdidas}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="menos-1">Menos de 1 hora</option>
                    <option value="1-2">1-2 horas</option>
                    <option value="2-3">2-3 horas</option>
                    <option value="3-4">3-4 horas</option>
                    <option value="mas-4">Más de 4 horas</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="serviciosSinCobrar"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ¿Cuántos servicios al mes no se cobran a tiempo por falta de
                    información?
                  </label>
                  <select
                    id="serviciosSinCobrar"
                    name="serviciosSinCobrar"
                    value={formData.serviciosSinCobrar}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="ninguno">Ninguno</option>
                    <option value="1-5">1-5 servicios</option>
                    <option value="6-15">6-15 servicios</option>
                    <option value="16-30">16-30 servicios</option>
                    <option value="30+">Más de 30 servicios</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Calcular Costo del Caos Operativo
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <a href="/privacy-policy" className="text-primary-600 hover:underline">
                    Política de Privacidad
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
