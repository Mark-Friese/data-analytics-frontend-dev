import { useState } from 'react';
import { Sidebar } from '../components/Layout/Sidebar';
import { DemandChart } from '../components/DemandGroup/DemandChart';
import { SubstationMap } from '../components/DemandGroup/SubstationMap';
import { SubstationGrid } from '../components/DemandGroup/SubstationGrid';
import { MetricsGrid } from '../components/DemandGroup/MetricsGrid';
import { demandGroups, substations, demandProfileData } from '../data/mockDemandData';
import { useDemandGroup } from '../hooks/useDemandGroup';

export function DemandGroupViewer() {
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>("1");
  const { demandGroup } = useDemandGroup(selectedGroupId);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        isOpen={true}
        onToggle={() => {}}
        selectedGroupId={selectedGroupId}
        onGroupSelect={setSelectedGroupId}
        demandGroups={demandGroups}
      />

      <div className="ml-64 p-6">
        <MetricsGrid />

        {selectedGroupId ? (
          <div className="space-y-6">
            {/* Demand Profile */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Network Demand Profile</h2>
              <DemandChart data={demandProfileData} />
            </div>

            {/* Substations Grid */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Substations</h2>
              <SubstationGrid substations={substations} />
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