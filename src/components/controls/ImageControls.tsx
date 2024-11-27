import { useState } from 'react';
import { Button } from '@/ui/Button';
import {
  SunIcon,
  MoonIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

interface ImageControlsProps {
  onBrightnessChange: (value: number) => void;
  onContrastChange: (value: number) => void;
  onInvert: (value: boolean) => void;
  onReset: () => void;
}

export function ImageControls({
  onBrightnessChange,
  onContrastChange,
  onInvert,
  onReset
}: ImageControlsProps) {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [inverted, setInverted] = useState(false);

  const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setBrightness(value);
    onBrightnessChange(value);
  };

  const handleContrastChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setContrast(value);
    onContrastChange(value);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <SunIcon className="w-5 h-5 text-gray-500" />
        <input
          type="range"
          min="0"
          max="200"
          value={brightness}
          onChange={handleBrightnessChange}
          className="w-full"
        />
        <span className="w-12 text-sm text-gray-600">{brightness}%</span>
      </div>

      <div className="flex items-center gap-4">
        <MoonIcon className="w-5 h-5 text-gray-500" />
        <input
          type="range"
          min="0"
          max="200"
          value={contrast}
          onChange={handleContrastChange}
          className="w-full"
        />
        <span className="w-12 text-sm text-gray-600">{contrast}%</span>
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInverted(!inverted);
            onInvert(!inverted);
          }}
          icon={<MoonIcon className="w-4 h-4" />}
        >
          {inverted ? 'Normal' : 'Invertir'}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setBrightness(100);
            setContrast(100);
            setInverted(false);
            onReset();
          }}
          icon={<ArrowPathIcon className="w-4 h-4" />}
        >
          Restablecer
        </Button>
      </div>
    </div>
  );
}