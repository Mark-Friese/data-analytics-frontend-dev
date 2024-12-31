import React from 'react';

interface SidebarOverlayProps {
  isVisible: boolean;
  onClick: () => void;
}

export function SidebarOverlay({ isVisible, onClick }: SidebarOverlayProps) {
  if (!isVisible) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity lg:hidden z-20"
      onClick={onClick}
    />
  );
}