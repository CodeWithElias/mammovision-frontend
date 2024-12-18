import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  HeartIcon,
  LightBulbIcon,
  GlobeAltIcon,
  SparklesIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

export default function Conclusion() {
  const conclusions = [
    {
      icon: HeartIcon,
      title: "Impacto en Vidas",
      description: "Solución integral que redefine la detección temprana del cáncer de mama, salvando millones de vidas.",
      metrics: [
        { label: "Detección", value: "+20%" },
        { label: "Supervivencia", value: "+30%" }
      ]
    },
    {
      icon: LightBulbIcon,
      title: "Innovación Tecnológica",
      description: "Combinación única de precisión y rapidez mediante inteligencia artificial avanzada.",
      metrics: [
        { label: "Precisión", value: "54.5%" },
        { label: "Tiempo", value: "~1.2s" }
      ]
    },
    {
      icon: GlobeAltIcon,
      title: "Accesibilidad Global",
      description: "Democratización de tecnología avanzada, cerrando la brecha en sistemas de salud.",
      metrics: [
        { label: "Cobertura", value: "100%" },
        { label: "Adopción", value: "89%" }
      ]
    },
    {
      icon: SparklesIcon,
      title: "Eficiencia Económica",
      description: "Reducción significativa de costos médicos y optimización de recursos sanitarios.",
      metrics: [
        { label: "Ahorro", value: "40%" },
        { label: "ROI", value: "+65%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title="Conclusión"
        subtitle="Transformando el futuro de la detección del cáncer de mama"
        badge={{
          text: "Impacto Real",
          icon: StarIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {conclusions.map((conclusion, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <conclusion.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{conclusion.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{conclusion.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {conclusion.metrics.map((metric, idx) => (
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