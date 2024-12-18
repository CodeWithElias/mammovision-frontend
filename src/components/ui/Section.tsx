interface SectionProps {
    children: React.ReactNode;
    className?: string;
    decorative?: boolean;
    id?: string;
  }
  
  export function Section({ children, className = "", decorative = false, id }: SectionProps) {
    return (
      <section 
        id={id}
        className={`relative py-16 bg-gradient-to-br from-[#011627] via-[#011627] to-[#011627]/95 overflow-hidden ${className}`}
      >
        {decorative && (
          <>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#011627]/80 to-[#011627]" />
            </div>
            <div className="absolute inset-0">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent" />
            </div>
          </>
        )}
        
        <div className="relative z-10 container mx-auto px-4">
          {children}
        </div>
      </section>
    );
  }