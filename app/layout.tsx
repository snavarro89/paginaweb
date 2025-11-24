import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Insquid - Del Caos Operativo al Control Total | Software de Mantenimiento",
    template: "%s | Insquid",
  },
  description:
    "La plataforma que te lleva del caos operativo al control total en tus mantenimientos y servicios en campo. Elimina horas perdidas, servicios sin cobrar y clientes perdidos. Software de gestión de servicios en campo para empresas de mantenimiento en México y LATAM.",
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

