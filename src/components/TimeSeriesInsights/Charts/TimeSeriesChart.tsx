import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TimeSeriesChartProps {
  data: Array<{ date: string; value: number }>;
  title: string;
  height?: number;
}

export function TimeSeriesChart({ data, title, height = 320 }: TimeSeriesChartProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#14b8a6"
              strokeWidth={2}
              dot={{ fill: '#14b8a6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}