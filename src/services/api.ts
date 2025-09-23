import axios from 'axios';
import { PredictionResult } from '@/types/types';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://mammovision-backend-nxzk.onrender.com';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://mammovision-backend-leub.onrender.com';
//const API_URL = 'http://192.168.1.41:10000';
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
  } catch (error: any) {
    console.error('Error uploading image:', error);
    if (error.response) {
      // El backend respondió con un código de error
      throw new Error('Error del servidor: ' + error.response.status + ' - ' + error.response.statusText);
    } else if (error.request) {
      // No se recibió respuesta del backend
      throw new Error('No se recibió respuesta del servidor. Por favor, intenta más tarde.');
    } else {
      // Otro error
      throw new Error('Error al procesar la imagen');
    }
  }
};
