import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { MetricCard } from '../ui/MetricCard';
import { 
  MethodologySteps, 
  DatasetItem, 
  Metric 
} from '@/types/methodology';

export default function Methodology() {
  const methodologySteps: MethodologySteps = [
    {
      title: "Dataset y Entrenamiento",
      items: [
        {
          label: "2,825 Imágenes Mamográficas",
          description: "Del conjunto CBIS-DDSM, anotadas por expertos"
        },
        {
          label: "Anotaciones Detalladas",
          description: "Segmentación manual y clasificación por especialistas"
        },
        {
          label: "Preprocesamiento Avanzado",
          description: "Técnicas de aumento de datos y normalización"
        }
      ]
    },
    {
      title: "Resultados Validados",
      metrics: [
        {
          label: "Precisión (Maligno)",
          value: 54.5
        },
        {
          label: "mAP@50",
          value: 48.5
        },
        {
          label: "Recall (Maligno)",
          value: 57.1
        }
      ]
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Metodología Científica
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestro enfoque combina técnicas avanzadas de Deep Learning con un riguroso proceso de validación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dataset y Entrenamiento */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {methodologySteps[0].title}
            </h3>
            <ul className="space-y-6">
              {methodologySteps[0].items.map((item: DatasetItem, index: number) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{item.label}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Resultados */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {methodologySteps[1].title}
            </h3>
            <div className="space-y-4">
            {methodologySteps[1].metrics.map((metric: Metric, index: number) => (
               <MetricCard
               key={index}
               label={metric.label}
               value={metric.value}
               variant={index === 0 ? 'blue' : index === 1 ? 'indigo' : 'purple'}
             />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
