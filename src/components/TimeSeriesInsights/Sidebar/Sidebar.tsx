import React from 'react';
import { AnalysisSteps } from './AnalysisSteps';

interface SidebarProps {
  selectedDate: string;
  selectedMetric: string;
  forecastWeeks: number;
  onDateChange: (value: string) => void;
  onMetricChange: (value: string) => void;
  onForecastWeeksChange: (value: number) => void;
}

export function Sidebar({
  selectedDate,
  selectedMetric,
  forecastWeeks,
  onDateChange,
  onMetricChange,
  onForecastWeeksChange,
}: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Analyse your data</h2>
      <AnalysisSteps
        selectedDate={selectedDate}
        selectedMetric={selectedMetric}
        forecastWeeks={forecastWeeks}
        onDateChange={onDateChange}
        onMetricChange={onMetricChange}
        onForecastWeeksChange={onForecastWeeksChange}
      />
    </div>
  );
}