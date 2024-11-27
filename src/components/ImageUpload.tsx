'use client';

import { useState } from 'react';
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
      {/* Área de selección de archivo */}
      <div className="relative">
        <input
          type="file"
          onChange={handleFileSelect}
          accept=".jpg,.jpeg,.png,.tiff,.dcm"
          className="hidden"
          id="file-upload"
          disabled={isLoading}
        />
        <label
          htmlFor="file-upload"
          className={`
            flex flex-col items-center justify-center w-full h-48
            border-2 border-dashed rounded-lg
            cursor-pointer transition-colors
            ${preview ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}
          `}
        >
          {preview ? (
            <div className="relative w-full h-full">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                <FiCheck className="text-blue-500 text-2xl" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2 p-4">
              <FiImage className="text-4xl text-gray-400" />
              <div className="text-center">
                <p className="text-sm font-medium text-gray-600">
                  Arrastre una imagen o haga clic para seleccionar
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  JPEG, PNG, TIFF o DICOM
                </p>
              </div>
            </div>
          )}
        </label>
      </div>

      {/* Mensaje de error */}
      {error && (
        <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
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
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : isLoading
              ? 'bg-blue-100 text-blue-400 cursor-wait'
              : 'bg-blue-600 text-white hover:bg-blue-700'
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
      <div className="text-xs text-gray-500 text-center">
        <p>Tamaño máximo: 10MB</p>
        <p>Resolución recomendada: 2000x2000px</p>
      </div>
    </div>
  );
}