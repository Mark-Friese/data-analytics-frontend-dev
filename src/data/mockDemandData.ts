import { Activity, Zap, Battery, Gauge } from 'lucide-react';
import { DemandGroup, Substation, KeyMetric } from '../types/demandGroup';

export const demandGroups: DemandGroup[] = [
  { id: '1', name: 'Glasgow Grid', description: 'Western Scotland distribution area' },
  { id: '2', name: 'Edinburgh Grid', description: 'Eastern Scotland distribution area' },
];

export const substations: Substation[] = [
  { 
    id: '1', 
    name: 'Glasgow Central', 
    latitude: 55.8642, 
    longitude: -4.2518, 
    capacity_mw: 20 
  },
  { 
    id: '2', 
    name: 'Edinburgh Main', 
    latitude: 55.9533, 
    longitude: -3.1883, 
    capacity_mw: 30 
  },
];

export const keyMetrics: KeyMetric[] = [
  {
    title: 'FIRM CAPACITY',
    value: '50.0 MVA',
    description: 'Total available network capacity',
    icon: Gauge
  },
  {
    title: 'PEAK DEMAND',
    value: '45.2 MVA',
    description: 'Highest demand in the current period',
    icon: Zap
  },
  {
    title: 'LOAD INDEX',
    value: 'LI 4',
    description: 'Load Index for the demand group',
    icon: Activity
  },
  {
    title: 'UTILIZATION',
    value: '80%',
    description: 'Current utilization rate',
    icon: Battery
  }
];

export const demandProfileData = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `2024-03-${String(i + 1).padStart(2, '0')}`,
  value: 30 + Math.random() * 20 + Math.sin(i / 3) * 10
}));