import { useEffect, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface ZoomedRegionProps {
  imageUrl: string;
  region?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  className?: string;
}

export function ZoomedRegion({ imageUrl, region, className = '' }: ZoomedRegionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!region || !imageUrl) return;

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = region.width * 2;
      canvas.height = region.height * 2;

      ctx.drawImage(
        img,
        region.x,
        region.y,
        region.width,
        region.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
    };
  }, [imageUrl, region]);

  if (!region) {
    return (
      <div className="flex items-center justify-center h-48 bg-[#EIF3F9] rounded-lg">
        <span className="text-[#021526]/70">No hay región seleccionada</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <TransformWrapper>
        <TransformComponent>
          <canvas ref={canvasRef} className="w-full h-full" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}