interface MetricCardProps {
    label: string;
    value: number;
    variant?: 'blue' | 'indigo' | 'purple';
  }
  
  export function MetricCard({ 
    label, 
    value, 
    variant = 'blue' 
  }: MetricCardProps) {
    const colors = {
      blue: {
        text: 'text-blue-600',
        bg: 'bg-blue-600'
      },
      indigo: {
        text: 'text-indigo-600',
        bg: 'bg-indigo-600'
      },
      purple: {
        text: 'text-purple-600',
        bg: 'bg-purple-600'
      }
    };

    return (
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium text-gray-900">{label}</span>
          <span className={`${colors[variant].text} font-semibold`}>
            {value.toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5">
          <div 
            className={`${colors[variant].bg} h-2.5 rounded-full transition-all duration-300`} 
            style={{width: `${value}%`}}
          />
        </div>
      </div>
    );
  }