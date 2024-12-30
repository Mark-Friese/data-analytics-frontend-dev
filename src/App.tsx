import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { TimeSeriesInsights } from './pages/TimeSeriesInsights';
import { Dashboard } from './pages/Dashboard';
import { Methods } from './pages/Methods';
import { DemandGroupViewer } from './pages/DemandGroupViewer';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/methods" replace />} />
        <Route path="methods" element={<Methods />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="insights" element={<TimeSeriesInsights />} />
        <Route path="demand-groups" element={<DemandGroupViewer />} />
      </Route>
    </Routes>
  );
}