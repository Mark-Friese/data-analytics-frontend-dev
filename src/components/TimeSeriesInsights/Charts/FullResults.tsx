import React, { useState } from 'react';
import { TimeSeriesChart } from './TimeSeriesChart';

interface FullResultsProps {
  data: Array<{ date: string; value: number }>;
}

type Tab = 'whole' | 'detail' | 'trends';

export function FullResults({ data }: FullResultsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('whole');

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Full results</h2>
        <div className="flex space-x-4">
          {[
            { id: 'whole', label: 'Whole period' },
            { id: 'detail', label: 'Detail' },
            { id: 'trends', label: 'Trends' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`text-sm font-medium ${
                activeTab === tab.id
                  ? 'text-gray-600 border-b-2 border-teal-500'
                  : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <TimeSeriesChart data={data} title="" />
    </div>
  );
}