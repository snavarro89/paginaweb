"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";
import { ChevronDown, Menu, X, Rocket, Shield, Box, BarChart3, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productLinks = [
    { name: "Gestión de Servicios", href: "/product/service-management", icon: Rocket, desc: "Órdenes, técnicos y programación" },
    { name: "Activos y Contratos", href: "/product/asset-management", icon: Shield, desc: "Mantenimiento y cumplimiento" },
    { name: "Inventario", href: "/product/inventory", icon: Box, desc: "Stock, herramientas y almacén" },
    { name: "Reportes y Analytics", href: "/product/reporting", icon: BarChart3, desc: "KPIs y reportes automáticos" },
  ];

  const industryLinks = [
    { name: "HVAC", href: "/industries/hvac" },
    { name: "Seguridad Electrónica", href: "/industries/security-systems" },
    { name: "Sistemas Contra Incendio", href: "/industries/fire-safety" },
    { name: "Contratistas de Mantenimiento", href: "/industries/maintenance-contractors" },
    { name: "Manufactura", href: "/industries/manufacturing" },
    { name: "Elevadores", href: "/industries/elevators" },
    { name: "Energía", href: "/industries/energy" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Insquid Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">
                <span>Producto</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'product' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 overflow-hidden"
                  >
                    <div className="grid gap-2">
                      {productLinks.map((item) => (
                        <Link 
                          key={item.href}
                          href={item.href}
                          className="flex items-start space-x-4 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                        >
                          <div className="bg-primary-100 p-2 rounded-lg group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <item.icon className="w-5 h-5 text-primary-600 group-hover:text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-500">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">
                <span>Industrias</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4"
                  >
                    <div className="grid gap-1">
                      {industryLinks.map((item) => (
                        <Link 
                          key={item.href}
                          href={item.href}
                          className="px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link href="/industries" className="px-4 py-2 text-primary-600 font-bold hover:underline">
                          Ver todas →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/ai-agents" className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">
              <Zap className="w-4 h-4 text-primary-500 fill-primary-500" />
              <span>Agentes IA</span>
            </Link>
            
            <Link href="/pricing" className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">Precios</Link>
            <Link href="/blog" className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">Blog</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://app.insquid.com" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Login</a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-200/50 font-bold inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Demo por WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 mt-4 py-6 space-y-4"
            >
              <div className="space-y-4">
                <div className="font-bold text-gray-900 px-2 uppercase text-xs tracking-widest">Producto</div>
                <div className="grid gap-2 pl-4">
                  {productLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-gray-700 py-1" onClick={() => setIsOpen(false)}>{link.name}</Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-bold text-gray-900 px-2 uppercase text-xs tracking-widest">Industrias</div>
                <div className="grid gap-2 pl-4">
                  {industryLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-gray-700 py-1" onClick={() => setIsOpen(false)}>{link.name}</Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col space-y-4 px-2">
                <Link href="/ai-agents" className="font-bold text-primary-600 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Zap className="w-5 h-5" />
                  <span>Agentes IA</span>
                </Link>
                <Link href="/pricing" className="font-medium text-gray-700" onClick={() => setIsOpen(false)}>Precios</Link>
                <Link href="/blog" className="font-medium text-gray-700" onClick={() => setIsOpen(false)}>Blog</Link>
                <a href="https://app.insquid.com" className="font-medium text-gray-700" onClick={() => setIsOpen(false)}>Iniciar sesión</a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 text-white px-4 py-3 rounded-xl hover:bg-primary-700 transition-colors font-bold text-center flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Demo por WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

