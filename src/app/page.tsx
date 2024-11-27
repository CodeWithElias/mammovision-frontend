'use client';
import { useState } from 'react';
import ImageUpload from '@/components/ImageUpload';
import ResultsDisplay from '@/components/ResultsDisplay';
import { PredictionResult } from '@/types/types';

export default function Home() {
  const [results, setResults] = useState<PredictionResult | null>(null);

  return (
    <main className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Contenedor principal */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Análisis de Mamografía
            </h2>

            {/* Grid de contenido */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Panel izquierdo - ImageUpload */}
              <div className="lg:w-[300px] flex-shrink-0">
                <div className="bg-gray-50 rounded-lg p-4">
                  <ImageUpload onResults={setResults} />
                </div>
              </div>

              {/* Panel derecho - ResultsDisplay */}
              <div className="flex-1">
                {results ? (
                  <ResultsDisplay results={results} />
                ) : (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <div className="max-w-md mx-auto">
                      <p className="text-gray-600">
                        Seleccione una imagen de mamografía para comenzar el análisis
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Formatos soportados: DICOM, PNG, JPEG, TIFF
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
