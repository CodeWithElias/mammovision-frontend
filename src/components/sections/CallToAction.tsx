'use client'
import { useLanguage } from '@/idiomas/LanguageContext';
import { Button } from '../ui/Button';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { translations } from '@/idiomas/translations';

export default function CallToAction() {

  const {lang} = useLanguage();
  const t = translations[lang];

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
            <span className="text-sm font-medium">{t.call_span}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#EIF3F9] mb-6 leading-tight">
            {t.call_title1}<br />
            <span className="text-[#FFD700]">{t.call_title2}</span>
          </h2>
          
          <p className="text-xl text-[#EIF3F9]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.call_description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              href="/demo"
              variant="secondary"
              className="group relative text-base px-8 py-4 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#021526] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-[#FFD700]/20"
            >
              {t.call_button1}
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="/contacto"
              variant="outline"
              className="text-base px-8 py-4 border-2 border-[#EIF3F9]/30 text-[#EIF3F9] hover:bg-[#EIF3F9]/10 hover:border-[#EIF3F9]/50 transform hover:scale-105 transition-all duration-200"
            >
              {t.call_button2}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}