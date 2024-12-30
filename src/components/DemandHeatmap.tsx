import React from 'react';
import { format } from 'date-fns';

interface DemandData {
  hour: number;
  day: string;
  demand: number;
}

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const hours = Array.from({ length: 24 }, (_, i) => i);

interface DemandHeatmapProps {
  data: DemandData[];
}

export function DemandHeatmap({ data }: DemandHeatmapProps) {
  const getColor = (value: number) => {
    const minDemand = 30;
    const maxDemand = 60;
    const normalized = (value - minDemand) / (maxDemand - minDemand);
    const hue = ((1 - normalized) * 60).toFixed(0); // 60 = yellow, 0 = red
    return `hsl(${hue}, 90%, 60%)`;
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="flex">
          <div className="w-16"></div>
          {days.map(day => (
            <div key={day} className="flex-1 text-center font-medium text-gray-700">
              {day}
            </div>
          ))}
        </div>
        {hours.map(hour => (
          <div key={hour} className="flex">
            <div className="w-16 flex items-center justify-end pr-2 text-sm text-gray-600">
              {format(new Date().setHours(hour), 'HH:mm')}
            </div>
            {days.map(day => {
              const cellData = data.find(d => d.hour === hour && d.day === day);
              return (
                <div
                  key={`${day}-${hour}`}
                  className="flex-1 h-8 border border-gray-100"
                  style={{
                    backgroundColor: cellData ? getColor(cellData.demand) : '#f3f4f6',
                  }}
                  title={cellData ? `${cellData.demand.toFixed(1)} MW` : 'No data'}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}