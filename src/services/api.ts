import axios from 'axios';
import { PredictionResult } from '@/types/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:10000';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const uploadImage = async (file: File): Promise<PredictionResult> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await api.post<PredictionResult>('/predict', formData);
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Error al procesar la imagen');
  }
};