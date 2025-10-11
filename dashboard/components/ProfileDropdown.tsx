'use client';

import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, HelpCircle, LogOut, ChevronDown } from 'lucide-react';

interface ProfileDropdownProps {
  userName: string;
  userInitials: string;
  userType: 'buyer' | 'seller';
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ userName, userInitials, userType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const profileLink = userType === 'seller' ? '/seller/profile' : '/buyer/profile';

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 md:gap-3 hover:bg-gray-50 rounded-2xl p-2 transition-colors"
      >
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-sm">
          <span className="text-sm font-bold text-white">{userInitials}</span>
        </div>
        <span className="hidden md:block text-sm font-medium text-gray-700">{userName}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform hidden md:block ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 z-50">
          {/* User Info Section */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500 capitalize">{userType} Account</p>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <a
              href={profileLink}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">My Profile</span>
            </a>

            <a
              href={`/${userType}/settings`}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Settings</span>
            </a>

            <a
              href="/help"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <HelpCircle className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Help & Support</span>
            </a>
          </div>

          {/* Logout Section */}
          <div className="border-t border-gray-100 pt-2">
            <button
              onClick={() => {
                // Handle logout logic here
                console.log('Logging out...');
                setIsOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors w-full text-left"
            >
              <LogOut className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-red-600">Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;