import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  ExclamationTriangleIcon, 
  ClockIcon, 
  UsersIcon, 
  ChartBarIcon,
  ExclamationCircleIcon 
} from '@heroicons/react/24/outline';

export default function Problem() {
  const problems = [
    {
      icon: ExclamationTriangleIcon,
      title: "Alta Tasa de Mortalidad",
      description: "El cáncer de mama es la principal causa de muerte en mujeres, con 2.3M+ casos anuales globalmente.",
      metrics: [
        { label: "Casos Anuales", value: "2.3M+" },
        { label: "Mortalidad", value: "685K+" }
      ]
    },
    {
      icon: ChartBarIcon,
      title: "Errores en Diagnóstico",
      description: "La interpretación de mamografías es compleja y hasta un 20% de lesiones malignas no son detectadas.",
      metrics: [
        { label: "Falsos Negativos", value: "20%" },
        { label: "Error Humano", value: "~15%" }
      ]
    },
    {
      icon: ClockIcon,
      title: "Sobrecarga Laboral",
      description: "Los radiólogos analizan cientos de imágenes diarias, aumentando el riesgo de fatiga y omisiones.",
      metrics: [
        { label: "Sobrecarga", value: "+85%" },
        { label: "Tiempo/Imagen", value: "~4min" }
      ]
    },
    {
      icon: UsersIcon,
      title: "Acceso Limitado",
      description: "En países de bajos recursos, muchos hospitales no cuentan con herramientas avanzadas de diagnóstico.",
      metrics: [
        { label: "Déficit", value: "60%" },
        { label: "Cobertura", value: "-40%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title="Problemática Actual"
        subtitle="Desafíos críticos en la detección del cáncer de mama"
        badge={{
          text: "Desafíos Críticos",
          icon: ExclamationCircleIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {problems.map((problem, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{problem.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {problem.metrics.map((metric, idx) => (
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