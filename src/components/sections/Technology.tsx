import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  CpuChipIcon, 
  BeakerIcon, 
  ServerIcon,
  AdjustmentsHorizontalIcon,
  CommandLineIcon 
} from '@heroicons/react/24/outline';

export default function Technology() {
  const technologies = [
    {
      icon: CpuChipIcon,
      title: "Modelo YOLOv11-seg",
      description: "Arquitectura optimizada para segmentación y detección de lesiones mamarias.",
      metrics: [
        { label: "mAP@50", value: "48.5%" },
        { label: "IoU", value: "≥0.5" }
      ]
    },
    {
      icon: BeakerIcon,
      title: "Dataset CBIS-DDSM",
      description: "Conjunto de datos etiquetado para entrenamiento y validación.",
      metrics: [
        { label: "Imágenes", value: "2.8K+" },
        { label: "Anotaciones", value: "3.4K+" }
      ]
    },
    {
      icon: ServerIcon,
      title: "Hardware Optimizado",
      description: "Entrenamiento en GPU Tesla P100 para alto rendimiento.",
      metrics: [
        { label: "GPU", value: "P100" },
        { label: "VRAM", value: "16GB" }
      ]
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: "Optimización Avanzada",
      description: "Early Stopping y Distribution Focal Loss para mejor rendimiento.",
      metrics: [
        { label: "Precisión", value: "54.5%" },
        { label: "Recall", value: "57.1%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title="Tecnología Aplicada"
        subtitle="Infraestructura y técnicas avanzadas de IA"
        badge={{
          text: "Stack Tecnológico",
          icon: CommandLineIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{tech.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {tech.metrics.map((metric, idx) => (
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