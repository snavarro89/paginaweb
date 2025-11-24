import Link from "next/link";
import WhatsAppIcon from "./WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500",
  };

  const isExternal = href.startsWith("http");
  const isWhatsApp = href === getWhatsAppLink();

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {isWhatsApp && <WhatsAppIcon className="w-5 h-5" />}
      {children}
    </Link>
  );
}

