import { Button } from '@/ui/Button';
import { 
  MagnifyingGlassPlusIcon, 
  MagnifyingGlassMinusIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  className?: string;
}

export function ZoomControls({ onZoomIn, onZoomOut, onReset, className = '' }: ZoomControlsProps) {
  return (
    <div className={`flex gap-1 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={onZoomIn}
        title="Acercar"
        icon={<MagnifyingGlassPlusIcon className="w-4 h-4" />}
      />
      <Button
        variant="outline"
        size="sm"
        onClick={onZoomOut}
        title="Alejar"
        icon={<MagnifyingGlassMinusIcon className="w-4 h-4" />}
      />
      <Button
        variant="outline"
        size="sm"
        onClick={onReset}
        title="Restablecer zoom"
        icon={<ArrowPathIcon className="w-4 h-4" />}
      />
    </div>
  );
}