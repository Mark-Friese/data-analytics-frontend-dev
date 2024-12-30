import { useState } from 'react';
import { AlertCircle, BarChart2, Activity, Database, Target } from 'lucide-react';
import { methods } from '../data/methods';
import { MetricCard } from '../components/TimeSeriesInsights/Charts/MetricCard';

const keyMetrics = [
  {
    title: 'TOTAL METHODS',
    value: '4',
    description: 'Available flexibility analysis methods',
    icon: BarChart2
  },
  {
    title: 'ACTIVE ANALYSES',
    value: '2',
    description: 'Currently running analysis processes',
    icon: Activity
  },
  {
    title: 'DATA SOURCES',
    value: '6',
    description: 'Connected data sources for analysis',
    icon: Database
  }
];

export function Methods() {
  const [expandedNodes, setExpandedNodes] = useState(new Set<string>());

  const toggleNode = (id: string) => {
    setExpandedNodes((prevExpanded) => {
      const newExpanded = new Set(prevExpanded);
      if (newExpanded.has(id)) {
        newExpanded.delete(id);
      } else {
        newExpanded.add(id);
      }
      return newExpanded;
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="fixed left-0 top-0 w-64 h-full bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Method Selection</h2>
        <div className="space-y-4">
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={() => toggleNode(method.id)}
              className="w-full text-left p-3 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center">
                {method.icon}
                <span className="ml-2 text-sm">{method.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="ml-64 p-6">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Selected Method Details</h2>
          <div className="space-y-4">
            {Array.from(expandedNodes).map((id) => {
              const method = methods.find(m => m.id === id);
              if (!method) return null;
              return (
                <div key={id} className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {method.subMethods.map((sub, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-1">{sub.title}</h4>
                        <p className="text-sm text-gray-500">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}