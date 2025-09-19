'use client';
import { useState } from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import { useLanguage } from '@/idiomas/LanguageContext';
import { translations } from '@/idiomas/translations';



export function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];


  
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#021526]/95 via-[#021526]/90 to-[#021526]/95"></div>
      </div>
      
      <div className="relative max-w-[1280px] mx-auto px-4 h-full flex items-center py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#EIF3F9]/40 rounded-full text-[#EIF3F9] text-sm backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></span>
            {t.noticia}
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            {t.titulo1}{' '}
            <span className="text-[#FFD000] inline-block">{t.titulo2}</span>
            <br />
            <span className="text-[#EIF3F9]/90">{t.titulo3}</span>
          </h1>

          <p className="text-xl text-[#EIF3F9] mb-10 leading-relaxed max-w-2xl">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button 
              href="/analisis" 
              variant="secondary"
              className="text-base px-8 py-4 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#021526]"
            >
              {t.boton_analisis}
            </Button>
            <Button 
              href="#impacto" 
              variant="outline"
              className="text-base px-8 py-4 border-[#EIF3F9]/30 text-[#EIF3F9] hover:bg-[#EIF3F9]/10"
            >
              {t.boton_conocer}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}