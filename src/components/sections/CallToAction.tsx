import { Button } from '../ui/Button';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function CallToAction() {
  return (
    <section className="relative py-32 bg-[#021526] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] mb-8">
            <SparklesIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Únete al Futuro de la Medicina</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#EIF3F9] mb-6 leading-tight">
            Revoluciona la Detección del<br />
            <span className="text-[#FFD700]">Cáncer de Mama</span>
          </h2>
          
          <p className="text-xl text-[#EIF3F9]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Con MammoVision, estamos creando un futuro donde cada mujer tenga acceso 
            a diagnósticos tempranos, precisos y oportunos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              href="/demo"
              variant="secondary"
              className="group relative text-base px-8 py-4 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#021526] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-[#FFD700]/20"
            >
              Solicitar Demo
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="/contacto"
              variant="outline"
              className="text-base px-8 py-4 border-2 border-[#EIF3F9]/30 text-[#EIF3F9] hover:bg-[#EIF3F9]/10 hover:border-[#EIF3F9]/50 transform hover:scale-105 transition-all duration-200"
            >
              Contactar Equipo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}