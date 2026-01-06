import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { getWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Insquid - Control Total de Servicios en Campo con IA⁺",
    template: "%s | Insquid",
  },
  description:
    "La plataforma 2026-ready para HVAC, Seguridad e Industria. Elimina el caos operativo y escala tu empresa con Agentes IA⁺. Gestión de activos, servicios e inventario.",
  keywords: [
    "caos operativo",
    "control operativo",
    "software de gestión de servicios en campo",
    "software de mantenimiento",
    "gestión de activos y órdenes de servicio",
    "field service management",
    "asset management",
    "mantenimiento industrial",
    "eliminar caos operativo",
    "IA en field service",
    "agentes IA industrial"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Insquid",
              "operatingSystem": "Web, iOS, Android",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "1000.00",
                "priceCurrency": "MXN"
              },
              "description": "Software de gestión de servicios en campo y activos impulsado por IA para empresas de mantenimiento industrial."
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Global Mobile WhatsApp Floating Button */}
        <div className="md:hidden fixed bottom-6 right-6 z-[100]">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl animate-bounce"
          >
            <WhatsAppIcon className="w-8 h-8" />
          </a>
        </div>
      </body>
    </html>
  );
}

