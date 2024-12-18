import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  HeartIcon, 
  ClockIcon, 
  ExclamationTriangleIcon,
  LightBulbIcon 
} from '@heroicons/react/24/outline';

export default function Introduction() {
  const challenges = [
    {
      icon: HeartIcon,
      title: "Principal Causa de Mortalidad",
      description: "El cáncer de mama afecta a millones de mujeres globalmente, con 2.3M de nuevos casos anuales.",
      metrics: [
        { label: "Casos Anuales", value: "2.3M+" },
        { label: "Impacto", value: "Global" }
      ]
    },
    {
      icon: ClockIcon,
      title: "Detección Temprana",
      description: "La identificación oportuna es crucial para salvar vidas y mejorar el pronóstico.",
      metrics: [
        { label: "Supervivencia", value: "+30%" },
        { label: "Efectividad", value: "Alta" }
      ]
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Desafíos Actuales",
      description: "Los métodos tradicionales enfrentan limitaciones en precisión y accesibilidad.",
      metrics: [
        { label: "Falsos Negativos", value: "10-20%" },
        { label: "Subjetividad", value: "Alta" }
      ]
    },
    {
      icon: LightBulbIcon,
      title: "Solución Innovadora",
      description: "IA y deep learning para detección precisa y segmentación en tiempo real.",
      metrics: [
        { label: "Precisión", value: "91.2%" },
        { label: "Tiempo", value: "~1.2s" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title="El Desafío del Cáncer de Mama"
        subtitle="Transformando el diagnóstico con tecnología avanzada"
        badge={{
          text: "Contexto Global",
          icon: HeartIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {challenges.map((challenge, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <challenge.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{challenge.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{challenge.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {challenge.metrics.map((metric, idx) => (
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