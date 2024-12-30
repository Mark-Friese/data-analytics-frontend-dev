import { Menu, X } from 'lucide-react';
import { NavigationItems } from './NavigationItems';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  return (
    <div className="lg:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4">
            <button
              onClick={onToggle}
              className="mb-4 p-2 text-gray-600 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>
            <NavigationItems className="flex flex-col space-y-4" />
          </div>
        </div>
      )}
    </div>
  );
}