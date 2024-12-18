import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  CurrencyDollarIcon, 
  CloudIcon, 
  WrenchIcon, 
  BeakerIcon,
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline';

export default function Business() {
  const businessModels = [
    {
      icon: CurrencyDollarIcon,
      title: "Licencias SaaS",
      description: "Suscripción mensual/anual para hospitales y clínicas con soporte técnico incluido.",
      metrics: [
        { label: "Ahorro", value: "40%" },
        { label: "ROI", value: "+65%" }
      ]
    },
    {
      icon: CloudIcon,
      title: "Implementación Flexible",
      description: "Soluciones en la nube o locales adaptadas a la infraestructura del cliente.",
      metrics: [
        { label: "Tiempo", value: "~48h" },
        { label: "Uptime", value: "99.9%" }
      ]
    },
    {
      icon: WrenchIcon,
      title: "Consultoría e Integración",
      description: "Soporte técnico especializado y adaptación a flujos de trabajo existentes.",
      metrics: [
        { label: "Soporte", value: "24/7" },
        { label: "SLA", value: "≤2h" }
      ]
    },
    {
      icon: BeakerIcon,
      title: "Pruebas Piloto",
      description: "Validación en entornos reales con datos médicos específicos del cliente.",
      metrics: [
        { label: "Duración", value: "30d" },
        { label: "Éxito", value: "95%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title="Modelo de Negocio"
        subtitle="Soluciones flexibles y escalables para instituciones médicas"
        badge={{
          text: "Propuesta Comercial",
          icon: BuildingOfficeIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {businessModels.map((model, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <model.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{model.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{model.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {model.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-[#021526]/40 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-[#FFD700] mb-1">{metric.value}</div>
                    <div className="text-sm text-[#EIF3F9]/70">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}