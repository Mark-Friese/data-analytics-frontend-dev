import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MobileNav } from './MobileNav';
import { NavigationItems } from './NavigationItems';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Mobile menu button */}
            <MobileNav 
              isOpen={isMobileMenuOpen} 
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            />

            {/* Desktop navigation */}
            <div className="hidden lg:block w-full">
              <NavigationItems className="flex space-x-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={`pt-16 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
}