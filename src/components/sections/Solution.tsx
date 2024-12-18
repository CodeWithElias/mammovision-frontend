import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  MagnifyingGlassIcon, 
  ShieldCheckIcon, 
  ArrowPathIcon,
  GlobeAltIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

export default function Solution() {
  const solutions = [
    {
      icon: MagnifyingGlassIcon,
      title: "Detección y Segmentación",
      description: "Identificación y delimitación precisa de lesiones benignas y malignas en tiempo real.",
      metrics: [
        { label: "mAP@50", value: "48.5%" },
        { label: "IoU", value: "≥0.5" }
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "Reducción de Falsos Negativos",
      description: "Sistema optimizado para maximizar la sensibilidad en la detección de lesiones malignas.",
      metrics: [
        { label: "Recall", value: "57%" },
        { label: "Precisión", value: "54.5%" }
      ]
    },
    {
      icon: ArrowPathIcon,
      title: "Optimización de Flujo",
      description: "Automatización del análisis inicial para permitir enfoque en casos críticos.",
      metrics: [
        { label: "Tiempo", value: "~1.2s" },
        { label: "Eficiencia", value: "+65%" }
      ]
    },
    {
      icon: GlobeAltIcon,
      title: "Accesibilidad Total",
      description: "Compatible con diversos niveles de hardware, democratizando el acceso a la tecnología.",
      metrics: [
        { label: "Cobertura", value: "100%" },
        { label: "Adaptabilidad", value: "Alta" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title="Nuestra Solución"
        subtitle="Sistema avanzado de detección y segmentación con IA"
        badge={{
          text: "Tecnología YOLOv11-seg",
          icon: SparklesIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{solution.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {solution.metrics.map((metric, idx) => (
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