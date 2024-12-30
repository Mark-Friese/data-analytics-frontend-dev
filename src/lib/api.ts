import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
  timeout: 10000,
});

export interface DemandData {
  timestamp: string;
  demand: number;
  netFlow: number;
}

export interface ServiceWindowData {
  name: string;
  start: string;
  end: string;
  service_days: string[];
  capacity_required: string;
  dispatch_estimate: number;
}

export async function fetchDemandData(): Promise<DemandData[]> {
  const { data } = await api.get<DemandData[]>('/demand');
  return data;
}

export async function fetchServiceWindows(): Promise<ServiceWindowData[]> {
  const { data } = await api.get<ServiceWindowData[]>('/service-windows');
  return data;
}

export default api;