import { StatCard } from '../ui/StatCard';

export default function Impact() {
  const stats = [
    {
      stat: '2.3M+',
      label: 'Casos Anuales',
      description: 'Diagnósticos globales de cáncer de mama',
      type: 'cases' as const
    },
    {
      stat: '98.5%',
      label: 'Supervivencia',
      description: 'En detección temprana',
      type: 'survival' as const
    },
    {
      stat: '48.5%',
      label: 'Precisión',
      description: 'mAP@50 en detección',
      type: 'precision' as const
    }
  ];

  return (
    <section id="impacto" className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Impacto en la Salud
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mejorando la detección temprana y salvando vidas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((item) => (
            <StatCard 
              key={item.stat}
              stat={item.stat}
              label={item.label}
              description={item.description}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
}