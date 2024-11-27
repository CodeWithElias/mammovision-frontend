interface DetailRowProps {
    label: string;
    value: string | number;
    className?: string;
  }
  
  export function DetailRow({ label, value, className = '' }: DetailRowProps) {
    return (
      <div className={`flex justify-between items-center py-2 ${className}`}>
        <span className="text-gray-600 font-medium">{label}</span>
        <span className="text-gray-900">{value}</span>
      </div>
    );
  }