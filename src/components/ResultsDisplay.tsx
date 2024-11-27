'use client';

import { useState } from 'react';
import { PredictionResult } from '@/types/types';

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
            <h3 className="font-semibold text-base text-gray-800">Imagen Original</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleZoomIn()}
                className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
              >
                🔍+
              </button>
              <button
                onClick={() => handleZoomOut()}
                className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
              >
                🔍-
              </button>
              <button
                onClick={() => handleResetView()}
                className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
              >
                ↺
              </button>
            </div>
          </div>

          <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
            <div 
              className="w-full h-full select-none"
              style={{
                transform: `scale(${zoomSettings.scale}) translate(${zoomSettings.offsetX}px, ${zoomSettings.offsetY}px)`,
                transformOrigin: 'center',
                transition: isDragging ? 'none' : 'transform 300ms ease-in-out'
              }}
            >
              <img
                src={results.imageUrl}
                alt="Mamografía Original"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Detecciones */}
        <div className="lg:col-span-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base text-gray-800">Detecciones</h3>
            <div className="flex items-center space-x-2">
              <button
                className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
                title="Descargar imagen"
              >
                ⬇️
              </button>
              <button
                className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
                title="Imprimir"
              >
                🖨️
              </button>
            </div>
          </div>

          <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
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
              <img
                src={results.processedImageUrl}
                alt="Detecciones"
                className="w-full h-full object-contain"
                style={{
                  filter: `brightness(${imageSettings.brightness}%) contrast(${imageSettings.contrast}%)
                          ${imageSettings.inverted ? 'invert(100%)' : ''}`
                }}
                draggable={false}
              />
              {results.predictions?.[0] && (
                <div
                  className="absolute cursor-pointer hover:bg-red-500/20 transition-colors"
                  style={{
                    left: `${results.predictions[0].location.x}px`,
                    top: `${results.predictions[0].location.y}px`,
                    width: `${results.predictions[0].location.width}px`,
                    height: `${results.predictions[0].location.height}px`,
                    pointerEvents: 'all'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRegionClick(results.predictions[0].location);
                  }}
                  title="Hacer clic para zoom en la región"
                />
              )}
            </div>
          </div>
        </div>

        {/* Panel de Detalles */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="font-semibold text-base text-gray-800">Detalles de la Detección</h3>
          
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            {/* Tipo de lesión */}
            <div>
              <h4 className="text-sm font-medium text-gray-700">Tipo:</h4>
              <p className={`text-lg font-semibold ${
                results.predictions[0]?.type === 'Maligno' ? 'text-red-600' : 'text-green-600'
              }`}>
                {results.predictions[0]?.type || 'No detectado'}
              </p>
            </div>

            {/* Confianza */}
            <div>
              <h4 className="text-sm font-medium text-gray-700">Confianza:</h4>
              <div className="mt-1">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      results.predictions[0]?.type.toLowerCase() === 'maligno' 
                        ? 'bg-red-500' 
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${(results.predictions[0]?.confidence || 0) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {((results.predictions[0]?.confidence || 0) * 100).toFixed(1)}%
                </p>
              </div>
            </div>

            {/* Dimensiones */}
            <div>
              <h4 className="text-sm font-medium text-gray-700">Dimensiones:</h4>
              <p className="text-sm text-gray-600">
                {results.predictions[0]?.location.width.toFixed(1)} x {results.predictions[0]?.location.height.toFixed(1)} mm
              </p>
            </div>

            {/* Ubicación */}
            <div>
              <h4 className="text-sm font-medium text-gray-700">Ubicación:</h4>
              <p className="text-sm text-gray-600">
                X: {results.predictions[0]?.location.x.toFixed(1)}, Y: {results.predictions[0]?.location.y.toFixed(1)}
              </p>
            </div>
          </div>

          {/* Controles de imagen */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700">Ajustes de imagen</h4>
            
            {/* Brillo */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600">Brillo</label>
                <span className="text-sm text-gray-500">{imageSettings.brightness}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={imageSettings.brightness}
                onChange={(e) => setImageSettings(prev => ({ ...prev, brightness: Number(e.target.value) }))}
                className="w-full"
              />
            </div>

            {/* Contraste */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600">Contraste</label>
                <span className="text-sm text-gray-500">{imageSettings.contrast}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={imageSettings.contrast}
                onChange={(e) => setImageSettings(prev => ({ ...prev, contrast: Number(e.target.value) }))}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}