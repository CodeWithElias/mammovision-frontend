import { 
  ChartBarIcon, 
  ArrowTrendingDownIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface StatCardProps {
  stat: string;
  label: string;
  description: string;
  type: 'reduction' | 'optimization' | 'accessibility';
}

const typeConfig = {
  reduction: {
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-emerald-400',
    icon: ArrowTrendingDownIcon,
  },
  optimization: {
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400',
    icon: ChartBarIcon,
  },
  accessibility: {
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-pink-400',
    icon: GlobeAltIcon,
  },
};

export function StatCard({ stat, label, description, type }: StatCardProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div className="group relative">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl`} />
      
      <div className="relative bg-[#EIF3F9]/5 backdrop-blur-sm p-8 rounded-2xl border border-[#EIF3F9]/10 group-hover:border-[#EIF3F9]/20 transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <Icon className={`w-8 h-8 ${config.iconColor} transform group-hover:scale-110 transition-transform duration-300`} />
          <span className="text-4xl font-bold text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
            {stat}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-[#EIF3F9] mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
          {label}
        </h3>
        
        <p className="text-[#EIF3F9]/70 leading-relaxed group-hover:text-[#EIF3F9]/90 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}