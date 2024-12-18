'use client';

import { useState } from 'react';
import { PredictionResult } from '@/types/types';
import Image from 'next/image';

interface ResultsDisplayProps {
  results: PredictionResult;
}

interface ZoomSettings {
  scale: number;
  offsetX: number;
  offsetY: number;
}

interface ImageSettings {
  brightness: number;
  contrast: number;
  inverted: false;
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  console.log('Results:', results);

  const [imageSettings, setImageSettings] = useState<ImageSettings>({
    brightness: 100,
    contrast: 100,
    inverted: false
  });

  const [zoomSettings, setZoomSettings] = useState<ZoomSettings>({
    scale: 1,
    offsetX: 0,
    offsetY: 0
  });

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastOffset, setLastOffset] = useState({ x: 0, y: 0 });

  // Funciones de manejo de arrastre
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY
    });
    setLastOffset({
      x: zoomSettings.offsetX,
      y: zoomSettings.offsetY
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const sensitivity = 1.5;
    const deltaX = (e.clientX - dragStart.x) / (zoomSettings.scale * sensitivity);
    const deltaY = (e.clientY - dragStart.y) / (zoomSettings.scale * sensitivity);
    
    setZoomSettings(prev => ({
      ...prev,
      offsetX: lastOffset.x + deltaX,
      offsetY: lastOffset.y + deltaY
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setLastOffset({
      x: zoomSettings.offsetX,
      y: zoomSettings.offsetY
    });
  };

  // Funciones de zoom
  const handleZoomIn = () => {
    setZoomSettings(prev => ({
      ...prev,
      scale: Math.min(prev.scale + 0.2, 3)
    }));
  };

  const handleZoomOut = () => {
    setZoomSettings(prev => ({
      ...prev,
      scale: Math.max(prev.scale - 0.2, 0.5)
    }));
  };

  const handleResetView = () => {
    setZoomSettings({
      scale: 1,
      offsetX: 0,
      offsetY: 0
    });
    setImageSettings({
      brightness: 100,
      contrast: 100,
      inverted: false
    });
  };

  const handleRegionClick = (location: { x: number, y: number, width: number, height: number }) => {
    // Calcular el factor de zoom necesario para que la región ocupe aproximadamente el 80% del contenedor
    const containerWidth = 400; // Ajusta según el tamaño real de tu contenedor
    const containerHeight = 600;
    
    const scaleX = (containerWidth * 0.8) / location.width;
    const scaleY = (containerHeight * 0.8) / location.height;
    const newScale = Math.min(scaleX, scaleY, 3); // Limitamos el zoom máximo a 3x
    
    // Calcular el offset necesario para centrar la región
    const offsetX = -(location.x + location.width / 2);
    const offsetY = -(location.y + location.height / 2);
    
    // Actualizar el zoom
    setZoomSettings({
      scale: newScale,
      offsetX: offsetX,
      offsetY: offsetY
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-3">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* Imagen Original */}
        <div className="lg:col-span-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base text-[#021526]">Imagen Original</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleZoomIn()}
                className="p-1.5 text-[#021526]/70 hover:bg-[#EIF3F9] rounded"
              >
                🔍+
              </button>
              <button
                onClick={() => handleZoomOut()}
                className="p-1.5 text-[#021526]/70 hover:bg-[#EIF3F9] rounded"
              >
                🔍-
              </button>
              <button
                onClick={() => handleResetView()}
                className="p-1.5 text-[#021526]/70 hover:bg-[#EIF3F9] rounded"
              >
                ↺
              </button>
            </div>
          </div>

          <div className="relative aspect-[3/4] bg-[#EIF3F9] rounded-lg overflow-hidden">
            <div 
              className="w-full h-full select-none"
              style={{
                transform: `scale(${zoomSettings.scale}) translate(${zoomSettings.offsetX}px, ${zoomSettings.offsetY}px)`,
                transformOrigin: 'center',
                transition: isDragging ? 'none' : 'transform 300ms ease-in-out'
              }}
            >
              <Image
                src={results.imageUrl}
                alt="Mamografía Original"
                width={500}
                height={500}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Detecciones */}
        <div className="lg:col-span-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base text-[#021526]">Detecciones</h3>
            <div className="flex items-center space-x-2">
              <button
                className="p-1.5 text-[#021526]/70 hover:bg-[#EIF3F9] rounded"
                title="Descargar imagen"
              >
                ⬇️
              </button>
              <button
                className="p-1.5 text-[#021526]/70 hover:bg-[#EIF3F9] rounded"
                title="Imprimir"
              >
                🖨️
              </button>
            </div>
          </div>

          <div className="relative aspect-[3/4] bg-[#EIF3F9] rounded-lg overflow-hidden">
            <div 
              className={`w-full h-full select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{
                transform: `scale(${zoomSettings.scale}) translate(${zoomSettings.offsetX}px, ${zoomSettings.offsetY}px)`,
                transformOrigin: 'center',
                transition: isDragging ? 'none' : 'transform 300ms ease-in-out'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <Image
                src={results.processedImageUrl}
                alt="Detecciones"
                width={500}
                height={500}
                className="max-w-full h-auto"
                style={{
                  filter: `brightness(${imageSettings.brightness}%) contrast(${imageSettings.contrast}%)
                          ${imageSettings.inverted ? 'invert(100%)' : ''}`,
                  display: results.processedImageUrl ? 'block' : 'none'
                }}
                onError={(e) => {
                  console.error('Error loading processed image:', e);
                  e.currentTarget.style.display = 'none';
                }}
                draggable={false}
              />
              {results.predictions.map((prediction, index) => (
                <div
                  key={index}
                  className="absolute cursor-pointer hover:bg-[#FFD700]/20 transition-colors"
                  style={{
                    left: `${prediction.location.x}px`,
                    top: `${prediction.location.y}px`,
                    width: `${prediction.location.width}px`,
                    height: `${prediction.location.height}px`,
                    pointerEvents: 'all'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRegionClick(prediction.location);
                  }}
                  title="Hacer clic para zoom en la región"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Panel de Detalles */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="font-semibold text-base text-[#021526]">Detalles de las Detecciones</h3>
          
          <div className="space-y-4">
            {results.predictions.map((prediction, index) => (
              <div key={index} className="bg-[#EIF3F9] rounded-lg p-4 space-y-4">
                {/* Tipo de lesión */}
                <div>
                  <h4 className="text-sm font-medium text-[#021526]/70">Tipo:</h4>
                  <p className={`text-lg font-semibold ${
                    prediction.type === 'Maligno' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {prediction.type || 'No detectado'}
                  </p>
                </div>

                {/* Confianza */}
                <div>
                  <h4 className="text-sm font-medium text-[#021526]/70">Confianza:</h4>
                  <div className="mt-1">
                    <div className="w-full bg-[#021526]/10 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          prediction.type.toLowerCase() === 'maligno' 
                            ? 'bg-red-500' 
                            : 'bg-green-500'
                        }`}
                        style={{ width: `${(prediction.confidence || 0) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm text-[#021526]/70 mt-1">
                      {((prediction.confidence || 0) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Dimensiones y Ubicación */}
                <div>
                  <h4 className="text-sm font-medium text-[#021526]/70">Dimensiones:</h4>
                  <p className="text-sm text-[#021526]/70">
                    {prediction.location.width.toFixed(1)} x {prediction.location.height.toFixed(1)} mm
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[#021526]/70">Ubicación:</h4>
                  <p className="text-sm text-[#021526]/70">
                    X: {prediction.location.x.toFixed(1)}, Y: {prediction.location.y.toFixed(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de imagen */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-[#021526]">Ajustes de imagen</h4>
            
            {/* Brillo y Contraste */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm text-[#021526]/70">Brillo</label>
                <span className="text-sm text-[#021526]/50">{imageSettings.brightness}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={imageSettings.brightness}
                onChange={(e) => setImageSettings(prev => ({ ...prev, brightness: Number(e.target.value) }))}
                className="w-full accent-[#FFD700]"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm text-[#021526]/70">Contraste</label>
                <span className="text-sm text-[#021526]/50">{imageSettings.contrast}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={imageSettings.contrast}
                onChange={(e) => setImageSettings(prev => ({ ...prev, contrast: Number(e.target.value) }))}
                className="w-full accent-[#FFD700]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}