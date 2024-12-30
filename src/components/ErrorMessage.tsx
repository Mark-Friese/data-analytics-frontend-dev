import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage({ message = 'An error occurred while fetching data.' }: ErrorMessageProps) {
  return (
    <div className="flex items-center gap-2 p-4 text-red-700 bg-red-50 rounded-lg">
      <AlertCircle className="w-5 h-5 flex-shrink-0" />
      <p>{message}</p>
    </div>
  );
}