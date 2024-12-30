import React, { useState } from 'react';
import { TrendingUp, Target, Clock } from 'lucide-react';
import { Sidebar } from '../components/TimeSeriesInsights/Sidebar/Sidebar';
import { MetricCard } from '../components/TimeSeriesInsights/Charts/MetricCard';
import { TimeSeriesChart } from '../components/TimeSeriesInsights/Charts/TimeSeriesChart';
import { FullResults } from '../components/TimeSeriesInsights/Charts/FullResults';

// Mock data - replace with real data in production
const data = [
  { date: '2019-12-8', value: 1050 },
  { date: '2019-12-22', value: 1150 },
  { date: '2020-01-05', value: 1100 },
  { date: '2020-01-19', value: 950 },
  { date: '2020-02-02', value: 1000 },
  { date: '2020-02-16', value: 1100 }
];

const keyMetrics = [
  {
    title: 'MODEL ACCURACY',
    value: '96.9%',
    description: 'Average accuracy of the estimate (up to the forecast)',
    icon: Target
  },
  {
    title: 'FORECAST START',
    value: '1,056.1',
    description: 'First value of the forecast period',
    icon: Clock
  },
  {
    title: 'FORECAST TREND',
    value: '+2.7',
    description: 'Average increase in collisions per week',
    icon: TrendingUp
  }
];

export function TimeSeriesInsights() {
  const [selectedDate, setSelectedDate] = useState('date');
  const [selectedMetric, setSelectedMetric] = useState('active power');
  const [forecastWeeks, setForecastWeeks] = useState(12);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Sidebar
        selectedDate={selectedDate}
        selectedMetric={selectedMetric}
        forecastWeeks={forecastWeeks}
        onDateChange={setSelectedDate}
        onMetricChange={setSelectedMetric}
        onForecastWeeksChange={setForecastWeeks}
      />

      <div className="ml-64 p-6">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <div className="mb-8">
          <TimeSeriesChart 
            data={data} 
            title="The forecast period" 
          />
        </div>

        <FullResults data={data} />
      </div>
    </div>
  );
}