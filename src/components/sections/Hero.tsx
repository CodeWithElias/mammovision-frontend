import { Button } from '../ui/Button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-900/95"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-[1280px] mx-auto px-4 h-full flex items-center py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-blue-400/40 rounded-full text-blue-200 text-sm backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            UAGRM - FICCT • Proyecto de Investigación
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Detección Temprana del{' '}
            <span className="text-blue-300 inline-block">Cáncer de Mama</span>
            <br />
            <span className="text-white/90">con Inteligencia Artificial</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
            Sistema de vanguardia que utiliza Deep Learning para la detección
            y segmentación precisa de lesiones mamarias.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button 
              href="/analisis" 
              variant="secondary"
              className="text-base px-8 py-4 bg-white hover:bg-blue-50 text-blue-900"
            >
              Comenzar Análisis
            </Button>
            <Button 
              href="#impacto" 
              variant="outline"
              className="text-base px-8 py-4 border-white/30 text-white hover:bg-white/10"
            >
              Conocer Más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}