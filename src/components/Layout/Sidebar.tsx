import { ChevronLeft } from 'lucide-react';
import { DemandGroup } from '../../types/demandGroup';
import { SidebarOverlay } from './SidebarOverlay';
import { DemandGroupSelect } from './DemandGroupSelect';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  selectedGroupId: string | null;
  onGroupSelect: (id: string | null) => void;
  demandGroups: DemandGroup[];
  children?: React.ReactNode;
}

export function Sidebar({ 
  isOpen, 
  onToggle, 
  selectedGroupId,
  onGroupSelect,
  demandGroups,
  children 
}: SidebarProps) {
  return (
    <>
      <SidebarOverlay isVisible={isOpen} onClick={onToggle} />
      
      <div
        className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-all duration-300 ease-in-out z-30
          ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold">Controls</h2>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 rounded-md hover:bg-gray-700"
            aria-label="Close sidebar"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <DemandGroupSelect
            selectedGroupId={selectedGroupId}
            onGroupSelect={onGroupSelect}
            demandGroups={demandGroups}
          />
          {children}
        </div>
      </div>
    </>
  );
}