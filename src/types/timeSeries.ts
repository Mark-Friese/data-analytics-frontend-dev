export interface TimeSeriesData {
  timestamp: string;
  value: number;
}

export interface TimeSeriesMetrics {
  modelAccuracy: number;
  forecastStart: number;
  forecastTrend: number;
}

export interface TimeSeriesAnalysis {
  data: TimeSeriesData[];
  metrics: TimeSeriesMetrics;
}