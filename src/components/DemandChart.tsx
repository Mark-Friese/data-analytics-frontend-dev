import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { useDemandData } from '../hooks/useDemandData';

export function DemandChart() {
  const { data, isLoading, isError } = useDemandData();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage />;
  if (!data) return null;

  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => format(new Date(value), 'MMM dd')}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(value) => format(new Date(value), 'MMM dd, yyyy HH:mm')}
            formatter={(value: number) => [`${value.toFixed(2)} MW`]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="demand"
            stroke="#8884d8"
            name="Demand (MW)"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="netFlow"
            stroke="#82ca9d"
            name="Net Flow (MW)"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}