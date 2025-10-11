'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';


interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'buyer' | 'seller';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userType }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar userType={userType} />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;