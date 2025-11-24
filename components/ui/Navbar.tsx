"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Insquid Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Acerca de
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center">
                Industrias
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/industries/sistemas-contra-incendios"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    Sistemas Contra Incendios
                  </Link>
                  <Link
                    href="/industries/sistemas-seguridad"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    Sistemas de Seguridad
                  </Link>
                  <Link
                    href="/industries/mantenimiento-industrial"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    Mantenimiento Industrial
                  </Link>
                  <Link
                    href="/industries/hvac"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    HVAC
                  </Link>
                  <Link
                    href="/industries/manufactura"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    Manufactura
                  </Link>
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <Link
                      href="/industries"
                      className="block px-4 py-2 text-primary-600 hover:bg-primary-50 font-semibold transition-colors"
                    >
                      Ver todas las industrias →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/features"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Funcionalidades
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Precios
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <a
              href="https://app.insquid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Iniciar sesión
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Agenda una demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Acerca de
            </Link>
            <div className="space-y-2 pl-2 border-l-2 border-primary-200">
              <div className="text-sm font-semibold text-gray-500 uppercase">
                Industrias
              </div>
              <Link
                href="/industries/sistemas-contra-incendios"
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sistemas Contra Incendios
              </Link>
              <Link
                href="/industries/sistemas-seguridad"
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sistemas de Seguridad
              </Link>
              <Link
                href="/industries/mantenimiento-industrial"
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Mantenimiento Industrial
              </Link>
              <Link
                href="/industries/hvac"
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                HVAC
              </Link>
              <Link
                href="/industries/manufactura"
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Manufactura
              </Link>
              <Link
                href="/industries"
                className="block text-primary-600 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Ver todas →
              </Link>
            </div>
            <Link
              href="/features"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Precios
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <a
              href="https://app.insquid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Iniciar sesión
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center inline-flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Agenda una demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

