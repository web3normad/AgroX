import React from 'react';
import { BarChart3, Leaf, ShoppingCart, Wallet } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Dashboard */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AgriVault Dashboard</span>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Connected: Hedera Testnet
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to AgriVault</h1>
          <p className="text-gray-600">Manage your commodity trading activities</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">₦25.4M</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">USDC Balance</p>
                <p className="text-2xl font-bold text-gray-900">$15.9K</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Wallet className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">96.8%</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <p className="text-gray-600 mb-8">Get started with commodity trading</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <button className="p-6 border-2 border-green-200 rounded-xl hover:border-green-400 hover:bg-green-50 transition-all">
              <ShoppingCart className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Browse Marketplace</h3>
              <p className="text-sm text-gray-600">Find and purchase commodities</p>
            </button>
            
            <button className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all">
              <Leaf className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">List Commodity</h3>
              <p className="text-sm text-gray-600">Sell your agricultural products</p>
            </button>
            
            <button className="p-6 border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-all">
              <Wallet className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Manage Wallet</h3>
              <p className="text-sm text-gray-600">View balance and transactions</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
