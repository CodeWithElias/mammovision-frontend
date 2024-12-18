'use client';

import { useState, useRef } from 'react';
import { FiUpload, FiImage, FiCheck, FiLoader } from 'react-icons/fi';
import { PredictionResult } from '@/types/types';

interface ImageUploadProps {
  onResults: (results: PredictionResult) => void;
}

export default function ImageUpload({ onResults }: ImageUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
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

    // Crear preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

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

    // Crear preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

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
      console.log('Respuesta del backend:', data);
      onResults(data);
    } catch (err) {
      console.error('Error completo:', err);
      setError(err instanceof Error ? err.message : 'Error al procesar la imagen');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Área de arrastrar y soltar */}
      <div 
        className={`
          border-2 border-dashed rounded-lg p-8
          flex flex-col items-center justify-center
          transition-colors cursor-pointer
          ${isDragging ? 'border-[#FFD700] bg-[#FFD700]/5' : 'border-[#021526]/20 hover:border-[#021526]/40'}
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
        
        {selectedFile ? (
          <div className="text-center">
            <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full mx-auto mb-3 flex items-center justify-center">
              <FiCheck className="w-6 h-6 text-[#FFD700]" />
            </div>
            <p className="text-[#021526] font-medium">{selectedFile.name}</p>
            <p className="text-[#021526]/70 text-sm">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-12 h-12 bg-[#021526]/10 rounded-full mx-auto mb-3 flex items-center justify-center">
              <FiImage className="w-6 h-6 text-[#021526]/70" />
            </div>
            <p className="text-[#021526]/70">
              Arrastre una imagen o haga clic para seleccionar
            </p>
          </div>
        )}
      </div>

      {/* Mensaje de error */}
      {error && (
        <div className="text-red-600 text-sm bg-red-100/50 p-2 rounded">
          {error}
        </div>
      )}

      {/* Botón de análisis */}
      <button
        onClick={handleUpload}
        disabled={!selectedFile || isLoading}
        className={`
          w-full py-2 px-4 rounded-md
          flex items-center justify-center space-x-2
          font-medium text-sm
          transition-colors
          ${
            !selectedFile
              ? 'bg-[#021526]/10 text-[#021526]/40 cursor-not-allowed'
              : isLoading
              ? 'bg-[#FFD700]/20 text-[#021526]/40 cursor-wait'
              : 'bg-[#FFD700] text-[#021526] hover:bg-[#FFD700]/90'
          }
        `}
      >
        {isLoading ? (
          <>
            <FiLoader className="animate-spin" />
            <span>Analizando...</span>
          </>
        ) : (
          <>
            <FiUpload />
            <span>Analizar Imagen</span>
          </>
        )}
      </button>

      {/* Información adicional */}
      <div className="text-xs text-[#021526]/50 text-center">
        <p>Tamaño máximo: 10MB</p>
        <p>Resolución recomendada: 2000x2000px</p>
      </div>
    </div>
  );
}