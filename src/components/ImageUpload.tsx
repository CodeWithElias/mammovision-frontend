'use client';

import { useState, useRef } from 'react';
import { FiUpload, FiImage, FiCheck, FiLoader } from 'react-icons/fi';
import { PredictionResult } from '@/types/types';
import { useLanguage } from '@/idiomas/LanguageContext';
import { translations } from '@/idiomas/translations';

interface ImageUploadProps {
  onResults: (results: PredictionResult) => void;
}

export default function ImageUpload({ onResults }: ImageUploadProps) {

  const {lang} = useLanguage();
  const t = translations[lang];

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    
    if (!file) return;

    // Validar tipo de archivo
    const validTypes = ['image/jpeg', 'image/png', 'image/tiff', 'application/dicom'];
    if (!validTypes.includes(file.type)) {
      setError('Formato de archivo no soportado');
      return;
    }

    setSelectedFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (!file) return;

    // Validar tipo de archivo
    const validTypes = ['image/jpeg', 'image/png', 'image/tiff', 'application/dicom'];
    if (!validTypes.includes(file.type)) {
      setError('Formato de archivo no soportado');
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {        
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error en el análisis');
      }

      const data = await response.json();
      onResults(data);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Error al procesar la imagen');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div 
        className={`
          relative border-2 border-dashed rounded-xl p-10
          flex flex-col items-center justify-center
          transition-all duration-300 cursor-pointer
          min-h-[200px]
          ${isDragging 
            ? 'border-[#FFD700] bg-[#FFD700]/5 scale-105' 
            : 'border-[#021526]/20 hover:border-[#FFD700] hover:bg-[#FFD700]/5'
          }
        `}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".dcm,.png,.jpg,.jpeg,.tiff"
          onChange={handleFileSelect}
          className="hidden"
          ref={fileInputRef}
        />
        
        {!selectedFile ? (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#FFD700]/10 rounded-xl mx-auto flex items-center justify-center">
              <FiImage className="w-8 h-8 text-[#FFD700]" />
            </div>
            <div>
              <p className="text-[#021526] font-medium mb-1">
                {t.imagen_span}
              </p>
              <p className="text-sm text-[#021526]/60">
                {t.imagen_span2}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#FFD700]/20 rounded-xl mx-auto flex items-center justify-center">
              <FiCheck className="w-8 h-8 text-[#FFD700]" />
            </div>
            <div>
              <p className="text-[#021526] font-medium mb-1">{selectedFile.name}</p>
              <p className="text-sm text-[#021526]/60">
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-red-600 text-sm bg-red-100/50 p-3 rounded-lg">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!selectedFile || isLoading}
        className={`
          w-full py-3 px-4 rounded-xl
          flex items-center justify-center space-x-3
          font-medium text-sm
          transition-all duration-300
          ${
            !selectedFile
              ? 'bg-[#021526]/10 text-[#021526]/40 cursor-not-allowed'
              : isLoading
              ? 'bg-[#FFD700]/20 text-[#021526]/40 cursor-wait'
              : 'bg-[#FFD700] text-[#021526] hover:bg-[#FFD700]/90 hover:scale-[1.02] active:scale-[0.98]'
          }
        `}
      >
        {isLoading ? (
          <>
            <FiLoader className="animate-spin w-5 h-5" />
            <span>{t.imagen_button1}</span>
          </>
        ) : (
          <>
            <FiUpload className="w-5 h-5" />
            <span>{t.imagen_button2}</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center space-x-6 text-xs text-[#021526]/50">
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>{t.imagen_span3}</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9h.01M21 9h.01M3 15h.01M21 15h.01M12 3v.01M12 21v.01M9 3h.01M15 3h.01M9 21h.01M15 21h.01" />
          </svg>
          <span>{t.imagen_span4}</span>
        </div>
      </div>
    </div>
  );
}