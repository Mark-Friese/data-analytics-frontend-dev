import { SubMethod } from '../types';

interface SubMethodNodeProps {
  subMethod: SubMethod;
}

export function SubMethodNode({ subMethod }: SubMethodNodeProps) {
  return (
    <div className="mb-2 p-3 bg-gray-50 rounded-md border-l-4 border-blue-500 hover:bg-gray-100 transition-colors duration-200">
      <h4 className="font-medium text-gray-800">{subMethod.title}</h4>
      <p className="text-sm text-gray-600 mt-1">{subMethod.description}</p>
    </div>
  );
}