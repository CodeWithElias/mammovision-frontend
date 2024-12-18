interface SectionHeaderProps {
    title: string;
    subtitle: string;
    badge?: {
      text: string;
      icon?: React.ElementType;
    };
  }
  
  export function SectionHeader({ title, subtitle, badge }: SectionHeaderProps) {
    return (
      <div className="relative text-center mb-16">
        {/* Decorative gradient */}
        <div className="absolute inset-0 -top-24 mx-auto w-3/4 h-32 bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/10 to-[#FFD700]/0 blur-3xl opacity-50" />
        
        {/* Content */}
        <div className="relative">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] mb-6 backdrop-blur-sm">
              {badge.icon && <badge.icon className="w-4 h-4" />}
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          )}
  
          <h2 className="text-4xl font-bold text-[#EIF3F9] mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-[#EIF3F9]/70 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    );
  }