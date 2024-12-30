import { Link, Outlet, useLocation } from 'react-router-dom';
import { Settings, LayoutDashboard, LineChart, Map } from 'lucide-react';

const navigation = [
  { name: 'Flexibility Methods', href: '/methods', icon: Settings },
  { name: 'Network Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Time Series Insights', href: '/insights', icon: LineChart },
  { name: 'Demand Groups', href: '/demand-groups', icon: Map },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Fixed top navigation */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow pl-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-4 py-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main content with proper top padding */}
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}