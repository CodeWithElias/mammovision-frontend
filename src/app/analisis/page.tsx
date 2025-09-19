'use client';
import { useState } from 'react';
import ImageUpload from '@/components/ImageUpload';
import ResultsDisplay from '@/components/ResultsDisplay';
import { PredictionResult } from '@/types/types';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useLanguage } from '@/idiomas/LanguageContext';
import { translations } from '@/idiomas/translations';

export default function Home() {

  const {lang} = useLanguage();
  const t = translations[lang];

  const [results, setResults] = useState<PredictionResult | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EIF3F9] to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link 
              href="/"
              className="inline-flex items-center text-[#EIF3F9]/70 hover:text-[#EIF3F9] mb-4 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              {t.analisis_span}
            </Link>
            <h1 className="text-3xl font-bold text-[#EIF3F9]">{t.analisis_title}</h1>
            <p className="text-[#EIF3F9]/70 mt-2">
              {t.analisis_description}
            </p>
          </div>
          
          <div className="hidden md:block">
            <Link 
              href="https://github.com/sm-nunez404/mammovision"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#021526] text-white rounded-lg text-sm hover:bg-[#021526]/90 transition-colors"
            >
              {t.analisis_button}
            </Link>
          </div>
        </div>

        {/* Contenedor principal */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#021526]/10">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Panel izquierdo */}
              <div className="lg:w-[350px] flex-shrink-0">
                <div className="bg-[#EIF3F9] backdrop-blur-sm rounded-xl p-6 border border-[#021526]/10">
                  <h3 className="text-lg font-semibold text-[#021526] mb-4">
                    {t.analisis_button2}
                  </h3>
                  <ImageUpload onResults={setResults} />
                  <div className="mt-4 p-4 bg-white/80 rounded-lg border border-[#021526]/10">
                    <h4 className="text-sm font-medium text-[#021526] mb-2">
                      {t.analisis_format}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['DICOM', 'PNG', 'JPEG', 'TIFF'].map((format) => (
                        <span 
                          key={format}
                          className="px-2.5 py-1 bg-[#021526]/10 text-[#021526] rounded-md text-sm font-medium"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel derecho */}
              <div className="flex-1">
                {results ? (
                  <ResultsDisplay results={results} />
                ) : (
                  <div className="bg-[#EIF3F9]/50 backdrop-blur-sm rounded-xl p-12 text-center border border-[#021526]/10 h-full flex items-center justify-center">
                    <div className="max-w-md mx-auto">
                      <div className="w-20 h-20 bg-[#FFD700]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <svg 
                          className="w-10 h-10 text-[#FFD700]" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-[#021526] mb-3">
                        {t.analisis_span2}
                      </h3>
                      <p className="text-[#021526]/70">
                        {t.analisis_parafo1}
                      </p>
                      <p className="text-sm text-[#021526]/50 mt-4">
                        {t.analisis_parafo2}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
