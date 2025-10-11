'use client';

import React from 'react';
import { TrendingUp, AlertCircle, Wallet, ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  userType: 'buyer' | 'seller';
}

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  const pathname = usePathname();

  const sellerLinks = [
    { name: 'Sales Metrics', href: '/seller/dashboard', icon: TrendingUp },
    { name: 'Disputes', href: '/seller/disputes', icon: AlertCircle },
    { name: 'Wallet', href: '/seller/wallet', icon: Wallet },
  ];

  const buyerLinks = [
    { name: 'Purchase Metrics', href: '/buyer/dashboard', icon: ShoppingCart },
    { name: 'Disputes', href: '/buyer/disputes', icon: AlertCircle },
    { name: 'Wallet', href: '/buyer/wallet', icon: Wallet },
  ];

  const links = userType === 'seller' ? sellerLinks : buyerLinks;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16 pt-8">
      <nav className="px-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.name}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;