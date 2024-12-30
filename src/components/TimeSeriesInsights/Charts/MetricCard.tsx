import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export function MetricCard({ title, value, description, icon: Icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start space-x-4">
        <div className="bg-teal-500 p-2 rounded">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
          <p className="text-2xl font-bold mb-1">{value}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}