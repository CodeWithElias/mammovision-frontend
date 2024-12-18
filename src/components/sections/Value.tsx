import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  GlobeAltIcon, 
  HeartIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

export default function Value() {
  const values = [
    {
      icon: ShieldCheckIcon,
      title: "Diagnósticos más Precisos",
      description: "Reduce errores y mejora la identificación de lesiones malignas en etapas tempranas.",
      metrics: [
        { label: "Precisión", value: "54.5%" },
        { label: "Recall", value: "57.1%" }
      ]
    },
    {
      icon: ClockIcon,
      title: "Optimización del Tiempo",
      description: "Acelera el análisis de imágenes y reduce significativamente la carga de trabajo médico.",
      metrics: [
        { label: "Reducción", value: "-40%" },
        { label: "Eficiencia", value: "+65%" }
      ]
    },
    {
      icon: GlobeAltIcon,
      title: "Acceso Democratizado",
      description: "Adaptable a cualquier entorno clínico, permitiendo su uso en hospitales con recursos limitados.",
      metrics: [
        { label: "Cobertura", value: "100%" },
        { label: "Adaptabilidad", value: "Alta" }
      ]
    },
    {
      icon: HeartIcon,
      title: "Medicina Preventiva",
      description: "Facilita la detección oportuna y mejora significativamente las tasas de supervivencia.",
      metrics: [
        { label: "Detección", value: "+30%" },
        { label: "Supervivencia", value: "+20%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title="Propuesta de Valor"
        subtitle="Transformando el diagnóstico del cáncer de mama"
        badge={{
          text: "Valor Diferencial",
          icon: StarIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{value.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {value.metrics.map((metric, idx) => (
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