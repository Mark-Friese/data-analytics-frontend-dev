import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileLoad: (data: any) => void;
  accept?: string;
}

export function FileUpload({ onFileLoad, accept = '.csv,.json' }: FileUploadProps) {
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = file.name.endsWith('.json') 
          ? JSON.parse(content)
          : content.split('\n').map(line => line.split(','));
        onFileLoad(data);
      } catch (error) {
        console.error('Error parsing file:', error);
        alert('Error parsing file. Please ensure it\'s a valid CSV or JSON file.');
      }
    };
    reader.readAsText(file);
  }, [onFileLoad]);

  return (
    <div className="relative">
      <label 
        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer
                   hover:bg-blue-100 transition-colors duration-200 border-2 border-dashed border-blue-200"
      >
        <Upload className="w-4 h-4" />
        <span className="text-sm font-medium">Upload Data File</span>
        <input
          type="file"
          className="hidden"
          accept={accept}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}