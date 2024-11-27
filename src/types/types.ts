export interface Detection {
    type: 'benigno' | 'maligno';
    confidence: number;
    location: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    birads?: number;
  }
  
  export interface PredictionResult {
    imageUrl: string;
    processedImageUrl: string;
    status: string;
    predictions: Array<{
      type: string;
      confidence: number;
      location: {
        x: number;
        y: number;
        width: number;
        height: number;
      };
    }>;
  }