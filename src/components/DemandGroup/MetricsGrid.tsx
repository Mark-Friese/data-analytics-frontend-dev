import { MetricCard } from '../TimeSeriesInsights/Charts/MetricCard';
import { keyMetrics } from '../../data/mockDemandData';

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {keyMetrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}