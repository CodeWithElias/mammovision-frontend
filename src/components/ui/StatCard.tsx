import { 
  ChartBarIcon, 
  HeartIcon, 
  ChartPieIcon 
} from '@heroicons/react/24/outline';

interface StatCardProps {
  stat: string;
  label: string;
  description: string;
  type: 'cases' | 'survival' | 'precision';
}

export function StatCard({ stat, label, description, type }: StatCardProps) {
  const icons = {
    cases: ChartBarIcon,
    survival: HeartIcon,
    precision: ChartPieIcon
  };

  const Icon = icons[type];

  const colors = {
    cases: 'text-blue-600',
    survival: 'text-green-600',
    precision: 'text-purple-600'
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      <Icon className={`w-8 h-8 ${colors[type]} mb-4`} />
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-3xl font-bold text-gray-900">{stat}</span>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{label}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}