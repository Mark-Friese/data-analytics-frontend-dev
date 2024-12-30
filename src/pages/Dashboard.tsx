import { useState } from 'react';
import { FileUpload } from '../components/FileUpload';
import { DemandChart } from '../components/DemandChart';
import { DemandHeatmap } from '../components/DemandHeatmap';
import { ServiceWindow } from '../components/ServiceWindow';
import { MetricCard } from '../components/TimeSeriesInsights/Charts/MetricCard';
import { Battery, Zap, Clock, Activity } from 'lucide-react';

const keyMetrics = [
  {
    title: 'PEAK DEMAND',
    value: '45.2 MW',
    description: 'Highest demand in the current period',
    icon: Zap
  },
  {
    title: 'AVERAGE LOAD',
    value: '32.8 MW',
    description: 'Average load across all periods',
    icon: Activity
  },
  {
    title: 'CAPACITY',
    value: '50.0 MW',
    description: 'Total available network capacity',
    icon: Battery
  }
];

// Sample data for heatmap (until we implement API fetch)
const demandData = Array.from({ length: 24 }, (_, hour) => 
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => ({
    hour,
    day,
    demand: 35 + Math.random() * 25
  }))
).flat();

export function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="fixed left-0 top-0 w-64 h-full bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard Controls</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold mb-2">Time Period</h3>
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-gray-700 text-sm px-4 py-2 rounded w-full"
            >
              <option value="day">Last 24 Hours</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="year">Last Year</option>
            </select>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">Data Source</h3>
            <FileUpload onFileLoad={() => {}} />
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">Visualization</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="text-teal-500" />
                <span className="text-sm">Show Demand Profile</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="text-teal-500" />
                <span className="text-sm">Show Heatmap</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="text-teal-500" />
                <span className="text-sm">Show Service Windows</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-64 p-6">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Network Demand Profile</h2>
            <DemandChart />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Demand Heatmap</h2>
            <DemandHeatmap data={demandData} />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Service Windows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ServiceWindow 
                window={{
                  name: "Window 41",
                  start: "06:30",
                  end: "22:30",
                  service_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  capacity_required: "13.05",
                  dispatch_estimate: 7
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}