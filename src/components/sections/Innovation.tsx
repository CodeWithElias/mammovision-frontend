import { Card } from '../ui/Card';
import { 
  BoltIcon, 
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  DocumentIcon 
} from '@heroicons/react/24/outline';

export default function Innovation() {
  const features = [
    {
      title: "Detección en Tiempo Real",
      description: "Análisis instantáneo de mamografías con resultados precisos.",
      icon: BoltIcon
    },
    {
      title: "Segmentación Precisa",
      description: "Identificación exacta de lesiones con YOLOv11-seg.",
      icon: CursorArrowRaysIcon
    },
    {
      title: "Interfaz Intuitiva",
      description: "Diseño centrado en profesionales médicos.",
      icon: DevicePhoneMobileIcon
    },
    {
      title: "Multi-formato",
      description: "Soporte para DICOM, PNG, JPEG y TIFF.",
      icon: DocumentIcon
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Innovación Tecnológica
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnología de vanguardia para un diagnóstico preciso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
