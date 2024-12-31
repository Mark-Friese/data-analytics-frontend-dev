import React from 'react';
import { DemandGroup } from '../../types/demandGroup';

interface DemandGroupSelectProps {
  selectedGroupId: string | null;
  onGroupSelect: (id: string | null) => void;
  demandGroups: DemandGroup[];
}

export function DemandGroupSelect({ 
  selectedGroupId, 
  onGroupSelect, 
  demandGroups 
}: DemandGroupSelectProps) {
  return (
    <select
      value={selectedGroupId || ''}
      onChange={(e) => onGroupSelect(e.target.value || null)}
      className="bg-gray-700 text-sm px-4 py-2 rounded w-full mb-4"
    >
      <option value="">Select a group...</option>
      {demandGroups.map(group => (
        <option key={group.id} value={group.id}>{group.name}</option>
      ))}
    </select>
  );
}