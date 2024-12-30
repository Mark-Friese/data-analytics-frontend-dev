import axios from 'axios';
import { API_CONFIG } from '../config/api';
import { TimeSeriesData, TimeSeriesAnalysis } from '../types/timeSeries';

const api = axios.create(API_CONFIG);

export async function fetchTimeSeriesData(): Promise<TimeSeriesData[]> {
  const { data } = await api.get<TimeSeriesData[]>('/time-series');
  return data;
}

export async function analyzeTimeSeries(
  startDate: string,
  endDate: string
): Promise<TimeSeriesAnalysis> {
  const { data } = await api.get<TimeSeriesAnalysis>('/time-series/analyze', {
    params: { startDate, endDate }
  });
  return data;
}