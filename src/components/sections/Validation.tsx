import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  ChartBarIcon, 
  ClockIcon, 
  DocumentCheckIcon,
  BeakerIcon,
  CheckBadgeIcon 
} from '@heroicons/react/24/outline';

export default function Validation() {
  const validations = [
    {
      icon: ChartBarIcon,
      title: "Precisión en Detección",
      description: "Evaluación exhaustiva del modelo en conjunto de pruebas.",
      metrics: [
        { label: "mAP@50", value: "48.5%" },
        { label: "mAP@[50:95]", value: "31.5%" }
      ]
    },
    {
      icon: DocumentCheckIcon,
      title: "Detección de Malignidad",
      description: "Alta sensibilidad en la identificación de casos positivos.",
      metrics: [
        { label: "Precisión", value: "54.5%" },
        { label: "Recall", value: "57.1%" }
      ]
    },
    {
      icon: BeakerIcon,
      title: "Pruebas con CBIS-DDSM",
      description: "Validación con dataset estándar en mamografía digital.",
      metrics: [
        { label: "Imágenes", value: "2.8K+" },
        { label: "Anotaciones", value: "3.4K+" }
      ]
    },
    {
      icon: ClockIcon,
      title: "Rendimiento",
      description: "Evaluación de velocidad y eficiencia en procesamiento.",
      metrics: [
        { label: "Tiempo/Imagen", value: "~1.2s" },
        { label: "IoU", value: "≥0.5" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title="Validación del Proyecto"
        subtitle="Resultados respaldados por datos y pruebas exhaustivas"
        badge={{
          text: "Resultados Validados",
          icon: CheckBadgeIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {validations.map((validation, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <validation.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{validation.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{validation.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {validation.metrics.map((metric, idx) => (
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