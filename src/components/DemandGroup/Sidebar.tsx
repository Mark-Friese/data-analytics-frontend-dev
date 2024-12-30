import React from 'react';
import { DemandGroup } from '../../types/demandGroup';

interface SidebarProps {
  selectedGroupId: string | null;
  onGroupSelect: (id: string | null) => void;
  demandGroups: DemandGroup[];
}

export function Sidebar({ selectedGroupId, onGroupSelect, demandGroups }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard Controls</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-2">Demand Group</h3>
          <select
            className="bg-gray-700 text-sm px-4 py-2 rounded w-full"
            value={selectedGroupId || ''}
            onChange={(e) => onGroupSelect(e.target.value || null)}
          >
            <option value="">Select a group...</option>
            {demandGroups.map(group => (
              <option key={group.id} value={group.id}>{group.name}</option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">View Options</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="text-blue-500" />
              <span className="text-sm">Show Demand Profile</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="text-blue-500" />
              <span className="text-sm">Show Substations</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="text-blue-500" />
              <span className="text-sm">Show Map View</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}