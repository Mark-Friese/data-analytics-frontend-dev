import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AnalysisStepsProps {
  selectedDate: string;
  selectedMetric: string;
  forecastWeeks: number;
  onDateChange: (value: string) => void;
  onMetricChange: (value: string) => void;
  onForecastWeeksChange: (value: number) => void;
}

export function AnalysisSteps({
  selectedDate,
  selectedMetric,
  forecastWeeks,
  onDateChange,
  onMetricChange,
  onForecastWeeksChange,
}: AnalysisStepsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-2">Step 1</h3>
        <p className="text-xs text-gray-400 mb-2">Upload your csv/xlsx/xlsx file</p>
        <button className="bg-gray-700 text-sm px-4 py-2 rounded w-full text-left">
          Browse...
        </button>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Step 2</h3>
        <p className="text-xs text-gray-400 mb-2">Select date column</p>
        <div className="relative">
          <select 
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="bg-gray-700 text-sm px-4 py-2 rounded w-full appearance-none"
          >
            <option value="date">date</option>
          </select>
          <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Step 3</h3>
        <p className="text-xs text-gray-400 mb-2">Select value column</p>
        <div className="relative">
          <select 
            value={selectedMetric}
            onChange={(e) => onMetricChange(e.target.value)}
            className="bg-gray-700 text-sm px-4 py-2 rounded w-full appearance-none"
          >
            <option value="active power">active power</option>
          </select>
          <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Step 4</h3>
        <p className="text-xs text-gray-400 mb-2">What do you want to do?</p>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="analysis" defaultChecked className="text-blue-500" />
            <span className="text-sm">Forecast</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="analysis" className="text-blue-500" />
            <span className="text-sm">Find outliers</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Step 5</h3>
        <p className="text-xs text-gray-400 mb-2">How many weeks to forecast?</p>
        <input 
          type="number" 
          value={forecastWeeks}
          onChange={(e) => onForecastWeeksChange(parseInt(e.target.value))}
          className="bg-gray-700 text-sm px-4 py-2 rounded w-full"
        />
      </div>

      <button className="bg-teal-500 text-white px-4 py-2 rounded w-full">
        Run analysis
      </button>
    </div>
  );
}