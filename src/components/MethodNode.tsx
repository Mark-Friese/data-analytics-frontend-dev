import { ChevronDown, ChevronRight } from 'lucide-react';
import { Method } from '../types';
import { SubMethodNode } from './SubMethodNode';

interface MethodNodeProps {
  method: Method;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

export function MethodNode({ method, isExpanded, onToggle }: MethodNodeProps) {
  return (
    <div className="mb-4 group">
      <div 
        className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer 
                   hover:bg-gray-50 hover:shadow-md transition-all duration-200"
        onClick={() => onToggle(method.id)}
        role="button"
        aria-expanded={isExpanded}
        tabIndex={0}
      >
        <div className="mr-3 text-blue-600 transform group-hover:scale-110 transition-transform duration-200">
          {method.icon}
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-gray-900">{method.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{method.description}</p>
        </div>
        <div className="text-gray-400">
          {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="ml-8 mt-3 space-y-3 animate-fadeIn">
          {method.subMethods.map((subMethod, index) => (
            <SubMethodNode key={index} subMethod={subMethod} />
          ))}
        </div>
      )}
    </div>
  );
}