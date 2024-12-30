import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface ServiceWindowProps {
  window: {
    name: string;
    start: string;
    end: string;
    service_days: string[];
    capacity_required: string;
    dispatch_estimate: number;
  };
}

export function ServiceWindow({ window }: ServiceWindowProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-900 mb-2">{window.name}</h3>
      
      <div className="space-y-3">
        <div className="flex items-center text-sm">
          <Clock className="w-4 h-4 mr-2 text-blue-600" />
          <span className="text-gray-600">
            {window.start} - {window.end}
          </span>
        </div>
        
        <div className="flex items-center text-sm">
          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
          <span className="text-gray-600">
            {window.service_days.join(', ')}
          </span>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <div className="text-gray-500">Required Capacity</div>
              <div className="font-medium">{window.capacity_required} MW</div>
            </div>
            <div>
              <div className="text-gray-500">Dispatch Estimate</div>
              <div className="font-medium">{window.dispatch_estimate} times</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}