import { LucideIcon } from 'lucide-react';

export interface DemandGroup {
  id: string;
  name: string;
  description: string;
}

export interface Substation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  capacity_mw: number;
}

export interface KeyMetric {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}