import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { 
  CheckCircle2, 
  Zap, 
  Rocket, 
  Shield, 
  Building2, 
  HelpCircle,
  ArrowRight
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Precios - Insquid | Basado en Uso y Transparente",
  description: "Planes flexibles que crecen contigo. Paga solo por lo que usas: servicios, activos y checklists. Usuarios ilimitados siempre.",
});

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      icon: Rocket,
      price: "1,000",
      desc: "Ideal para empresas pequeñas buscando orden.",
      features: [
        "Hasta 30 servicios/mes",
        "Hasta 25 activos",
        "5 Checklists personalizados",
        "1,000 tokens de IA⁺",
        "Usuarios ilimitados",
        "Soporte por correo"
      ],
      color: "border-gray-200"
    },
    {
      name: "Growth",
      icon: Zap,
      price: "2,100",
      desc: "Para empresas en crecimiento que escalan.",
      popular: true,
      features: [
        "Hasta 150 servicios/mes",
        "Hasta 75 activos",
        "25 Checklists personalizados",
        "15,000 tokens de IA⁺",
        "Usuarios ilimitados",
        "Soporte por WhatsApp"
      ],
      color: "border-primary-500 shadow-primary-500/10 shadow-2xl scale-105"
    },
    {
      name: "Enterprise",
      icon: Building2,
      price: "5,000",
      desc: "Para operaciones complejas a gran escala.",
      features: [
        "Hasta 500 servicios/mes",
        "Hasta 350 activos",
        "Checklists ilimitados",
        "75,000 tokens de IA⁺",
        "Usuarios ilimitados",
        "Gerente de cuenta dedicado"
      ],
      color: "border-gray-200"
    }
  ];

  return (
    <div className="pt-24 bg-gray-50/50 min-h-screen">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">Precios <span className="text-primary-600">Basados en Uso</span></h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance">
              Sin muros de "Contactar a Ventas". Sin cobro por usuario. Paga solo por el volumen de tu operación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <SectionWrapper className="pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-center">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-[3rem] p-10 border-2 transition-all duration-300 relative overflow-hidden ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white px-6 py-2 rounded-bl-3xl font-bold text-sm">
                  MÁS POPULAR
                </div>
              )}
              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl ${plan.popular ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'} flex items-center justify-center mb-6`}>
                  <plan.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-8">{plan.desc}</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-gray-500 font-medium text-xl">$</span>
                  <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 font-medium text-lg">/mes</span>
                </div>
                <div className="text-xs font-bold text-gray-400 mt-2">MXN + IVA</div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                    <span className="font-medium text-sm lg:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <CTAButton 
                href={getWhatsAppLink(`Hola, me interesa el Plan ${plan.name} de Insquid`)}
                variant={plan.popular ? "primary" : "secondary"}
                className={`w-full rounded-full py-4 font-bold text-lg ${!plan.popular ? 'border-2 border-gray-200 hover:bg-gray-50' : ''}`}
              >
                Solicitar Plan {plan.name}
              </CTAButton>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Usage Calculator Placeholder */}
      <SectionWrapper className="bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">¿Necesitas algo a la medida?</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Nuestros planes se adaptan a tu volumen. Si excedes los límites base, solo pagas una pequeña cuota por servicio o activo adicional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-gray-50 p-12 rounded-[3rem]">
             <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                   <ArrowRight className="w-5 h-5 text-primary-600" />
                   Adicionales
                </h4>
                <ul className="space-y-3 text-gray-600 font-medium">
                   <li>Servicio extra: desde $4 MXN</li>
                   <li>Activo extra: desde $2 MXN</li>
                   <li>Checklist extra: $15 MXN</li>
                   <li>100 GB almacenamiento: $50 MXN</li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                   <ArrowRight className="w-5 h-5 text-primary-600" />
                   Descuentos Anuales
                </h4>
                <ul className="space-y-3 text-gray-600 font-medium">
                   <li className="text-primary-700 font-bold">Pago Anual Contado: 30% OFF</li>
                   <li>Pago Anual Financiado: 20% OFF</li>
                </ul>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-8">
            {[
              { q: "¿Los usuarios realmente son ilimitados?", a: "Sí. No importa si tienes 5 o 500 técnicos, administradores o clientes usando la plataforma. Solo cobramos por el volumen de activos y servicios gestionados." },
              { q: "¿Qué pasa si excedo mi límite mensual?", a: "Nada se detiene. Te notificaremos al llegar al 90% y los servicios excedentes se facturarán al precio por unidad de tu plan al final del mes." },
              { q: "¿Hay costo de implementación?", a: "La implementación básica guiada es gratuita en todos los planes. Para integraciones complejas o carga masiva de miles de activos, podemos ofrecerte un paquete de consultoría a la medida." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Hablemos de tus números</h2>
          <p className="text-xl text-gray-600 mb-12">Cuéntanos cuántos técnicos y servicios tienes, y te armamos la propuesta ideal para tu rentabilidad.</p>
          <CTAButton href={getWhatsAppLink("Hola, quiero una cotización a la medida para mi empresa")} className="rounded-full px-12 py-6 text-xl">
            Cotizar por WhatsApp
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
