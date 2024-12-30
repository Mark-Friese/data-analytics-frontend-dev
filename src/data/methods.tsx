import { BarChart2, Activity, Database, Target } from 'lucide-react';
import { Method } from '../types';

export const methods: Method[] = [
  {
    id: 'deterministic',
    title: 'Deterministic Forecasts with Probabilistic Overlays',
    icon: <BarChart2 className="w-5 h-5" />,
    description: 'Combines base deterministic forecasts with probability distributions',
    subMethods: [
      {
        title: 'Monte Carlo Simulations',
        description: 'Generate multiple load scenarios considering weather, economic growth, and behavior'
      },
      {
        title: 'Gaussian Processes',
        description: 'Predict peak load probabilities at different time windows'
      }
    ]
  },
  {
    id: 'probabilistic',
    title: 'Probabilistic Load Analysis',
    icon: <Activity className="w-5 h-5" />,
    description: 'Statistical analysis of load patterns and uncertainties',
    subMethods: [
      {
        title: 'Bayesian Hierarchical Models',
        description: 'Model temporal dependencies and uncertainty propagation'
      },
      {
        title: 'Time Series Decomposition',
        description: 'Separate trends, seasonality, and random variations'
      }
    ]
  },
  {
    id: 'datadriven',
    title: 'Data-Driven Pattern Recognition',
    icon: <Database className="w-5 h-5" />,
    description: 'Extract patterns from historical data',
    subMethods: [
      {
        title: 'Clustering Analysis',
        description: 'Group similar load profiles and identify recurring patterns'
      },
      {
        title: 'Anomaly Detection',
        description: 'Identify unusual demand patterns requiring flexibility'
      }
    ]
  },
  {
    id: 'optimization',
    title: 'Optimization-Based Approaches',
    icon: <Target className="w-5 h-5" />,
    description: 'Mathematical optimization of flexibility requirements',
    subMethods: [
      {
        title: 'Stochastic Programming',
        description: 'Optimize considering multiple possible future scenarios'
      },
      {
        title: 'Robust Optimization',
        description: 'Account for worst-case scenarios within uncertainty bounds'
      }
    ]
  }
];