import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { MetricCard } from '../components/TimeSeriesInsights/Charts/MetricCard';
import { Sidebar } from '../components/DemandGroup/Sidebar';
import { SubstationMap } from '../components/DemandGroup/SubstationMap';
import { DemandChart } from '../components/DemandGroup/DemandChart';
import { demandGroups, substations, keyMetrics } from '../data/mockDemandData';

// Sample time series data
const timeSeriesData = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${i}:00`,
  value: 25 + Math.random() * 20
}));

export function DemandGroupViewer() {
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        selectedGroupId={selectedGroupId}
        onGroupSelect={setSelectedGroupId}
        demandGroups={demandGroups}
      />

      <div className="ml-64 p-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {selectedGroupId ? (
          <div className="space-y-6">
            {/* Demand Profile */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Network Demand Profile</h2>
              <DemandChart data={timeSeriesData} />
            </div>

            {/* Substations Grid */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Substations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {substations.map(substation => (
                  <div key={substation.id} className="border rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-6 w-6 text-blue-500" />
                      <div>
                        <h3 className="font-medium">{substation.name}</h3>
                        <p className="text-sm text-gray-500">
                          Capacity: {substation.capacity_mw} MW
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map View */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Geographic View</h2>
              <div className="h-96">
                <SubstationMap substations={substations} />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
            Select a demand group to view analysis
          </div>
        )}
      </div>
    </div>
  );
}