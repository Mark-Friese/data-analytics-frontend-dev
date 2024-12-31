import { MapPin } from 'lucide-react';
import { Substation } from '../../types/demandGroup';

interface SubstationGridProps {
  substations: Substation[];
}

export function SubstationGrid({ substations }: SubstationGridProps) {
  return (
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
  );
}