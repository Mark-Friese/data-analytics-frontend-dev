import { Link, useLocation } from 'react-router-dom';
import { Settings, LayoutDashboard, LineChart, Map } from 'lucide-react';

const navigation = [
  { name: 'Flexibility Methods', href: '/methods', icon: Settings },
  { name: 'Network Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Time Series Insights', href: '/insights', icon: LineChart },
  { name: 'Demand Groups', href: '/demand-groups', icon: Map },
];

interface NavigationItemsProps {
  className?: string;
}

export function NavigationItems({ className = '' }: NavigationItemsProps) {
  const location = useLocation();

  return (
    <nav className={className}>
      {navigation.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;
        
        return (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${isActive
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <Icon className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}