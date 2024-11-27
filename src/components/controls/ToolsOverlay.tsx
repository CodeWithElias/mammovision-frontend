import { useState } from 'react';
import { Button } from '@/ui/Button';
import {
  ArrowsPointingOutIcon,
  PencilSquareIcon,
  ArrowPathIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

export function ToolsOverlay() {
  const [activeTools, setActiveTools] = useState<string[]>([]);

  const tools = [
    {
      id: 'measure',
      icon: <ArrowsPointingOutIcon className="w-4 h-4" />,
      title: 'Medición'
    },
    {
      id: 'annotate',
      icon: <PencilSquareIcon className="w-4 h-4" />,
      title: 'Anotar'
    },
    {
      id: 'adjust',
      icon: <AdjustmentsHorizontalIcon className="w-4 h-4" />,
      title: 'Ajustar'
    }
  ];

  const toggleTool = (toolId: string) => {
    setActiveTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  return (
    <div className="absolute top-2 right-2 flex flex-col gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-lg z-10">
      {tools.map(tool => (
        <Button
          key={tool.id}
          variant={activeTools.includes(tool.id) ? 'primary' : 'outline'}
          size="sm"
          onClick={() => toggleTool(tool.id)}
          icon={tool.icon}
          title={tool.title}
        >
          {tool.title}
        </Button>
      ))}
    </div>
  );
}