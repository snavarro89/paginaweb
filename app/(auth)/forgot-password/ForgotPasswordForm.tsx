"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [correo, setCorreo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend implementation
    setSubmitted(true);
  };

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Recuperar Contraseña
              </h1>
              <p className="text-gray-600">
                Te enviaremos un enlace para restablecer tu contraseña
              </p>
            </div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="tu@empresa.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Enviar Enlace de Recuperación
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Correo Enviado
                </h2>
                <p className="text-gray-600 mb-6">
                  Si existe una cuenta asociada a {correo}, recibirás un correo
                  con instrucciones para restablecer tu contraseña.
                </p>
                <Link
                  href="/log-in"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Volver al inicio de sesión
                </Link>
              </div>
            )}
            <div className="mt-6 text-center">
              <Link
                href="/log-in"
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                ← Volver al inicio de sesión
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

