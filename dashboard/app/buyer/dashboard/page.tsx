"use client"

import { useState } from "react"
import { ShoppingCart, Clock, CheckCircle, Star, MapPin, Package, ArrowUpRight, Calendar, TrendingUp } from "lucide-react"
import Footer from '@/app/(website)/components/Footer'

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const handleNavigateToMarketplace = () => {
    // For Next.js with App Router, use:
    // import { useRouter } from 'next/navigation'
    // const router = useRouter()
    // router.push('/marketplace')
    
    // For now, using window.location
    window.location.href = '/marketplace'
  }

  // Generate payment performance data (GitHub-style grid)
  const generatePaymentData = () => {
    const weeks = 52
    const data = []
    for (let i = 0; i < weeks * 7; i++) {
      const purchases = Math.floor(Math.random() * 8)
      const defaults = Math.random() > 0.97 ? 1 : 0
      data.push({
        date: new Date(Date.now() - (weeks * 7 - i) * 24 * 60 * 60 * 1000),
        purchases,
        defaults,
        level: defaults > 0 ? -1 : purchases === 0 ? 0 : purchases < 2 ? 1 : purchases < 4 ? 2 : purchases < 6 ? 3 : 4
      })
    }
    return data
  }

  const paymentData = generatePaymentData()

  const stats = [
    { 
      label: "Total Purchases", 
      value: "$128,450", 
      change: "+18.2%",
      icon: ShoppingCart,
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    { 
      label: "Active Orders", 
      value: "12", 
      change: "+3 this week",
      icon: Clock,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    { 
      label: "Completed", 
      value: "89", 
      change: "+12 this month",
      icon: CheckCircle,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    { 
      label: "Avg. Savings", 
      value: "22%", 
      change: "+3.5% better",
      icon: TrendingUp,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
  ]

  const activeOrders = [
    { id: "ORD-101", seller: "Adebayo Farms", commodity: "Premium Rice", quantity: 200, total: 90000, status: "in_transit", eta: "2 days", date: "Apr 2", priority: "high" },
    { id: "ORD-102", seller: "Fatima Agriculture", commodity: "Organic Maize", quantity: 150, total: 42000, status: "processing", eta: "5 days", date: "Apr 1", priority: "medium" },
    { id: "ORD-103", seller: "Okechukwu Cooperative", commodity: "Fresh Cassava", quantity: 100, total: 18000, status: "confirmed", eta: "7 days", date: "Mar 30", priority: "low" },
  ]

  const completedOrders = [
    { id: "ORD-098", seller: "Benue Farmers Union", commodity: "Premium Yam", quantity: 80, total: 41600, date: "Mar 28", rating: 5 },
    { id: "ORD-095", seller: "Amina Agro", commodity: "Sorghum Grain", quantity: 120, total: 38400, date: "Mar 25", rating: 4 },
  ]

  const savedSuppliers = [
    { name: "Adebayo Farms", location: "Kano State", rating: 4.8, orders: 12, specialty: "Rice & Grains" },
    { name: "Fatima Agriculture", location: "Kaduna State", rating: 4.9, orders: 8, specialty: "Maize & Sorghum" },
    { name: "Okechukwu Cooperative", location: "Enugu State", rating: 4.7, orders: 15, specialty: "Tubers" },
  ]

  const getPaymentColor = (level: number) => {
    if (level === -1) return "bg-red-500" // Payment default
    if (level === 0) return "bg-gray-100"
    if (level === 1) return "bg-green-100"
    if (level === 2) return "bg-green-300"
    if (level === 3) return "bg-green-500"
    return "bg-green-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Top Nav */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-md">
                <div className="w-5 h-5 bg-white rounded"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">AgriVault</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-sm">
                  <span className="text-sm font-bold text-white">LT</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Lagos Traders Co.</span>
              </div>
              <button 
                onClick={handleNavigateToMarketplace}
                className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-semibold text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Browse Market</span>
                <span className="sm:hidden">Market</span>
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Your Purchases</h1>
              <p className="text-base text-gray-600">Welcome back! Track your orders and manage suppliers</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 text-sm font-medium shadow-sm">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Last 30 Days</span>
                <span className="sm:hidden">30d</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="bg-white rounded-3xl border border-gray-200 p-6 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                  <ArrowUpRight className="w-4 h-4" />
                  {stat.change}
                </div>
              </div>
            )
          })}
        </div>

        {/* Payment Performance Grid */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Payment Performance</h3>
              <p className="text-sm text-gray-600">89 purchases in the last year • 100% on-time payment rate</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
                <span className="text-gray-600">No activity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-green-100 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                </div>
                <span className="text-gray-600">More purchases</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span className="text-gray-600">Payment default</span>
              </div>
            </div>
          </div>

          {/* Activity Grid */}
          <div className="overflow-x-auto">
            <div className="inline-flex flex-col gap-1 min-w-max">
              {['Mon', 'Wed', 'Fri'].map((day, dayIndex) => (
                <div key={day} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-8">{day}</span>
                  <div className="flex gap-1">
                    {paymentData.filter((_, i) => i % 7 === dayIndex * 2).map((day, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-sm ${getPaymentColor(day.level)} hover:ring-2 hover:ring-gray-400 transition-all cursor-pointer`}
                        title={`${day.purchases} purchases on ${day.date.toLocaleDateString()}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-gray-200 p-1.5 mb-8 inline-flex gap-1 overflow-x-auto shadow-sm">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === "overview"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "active"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Clock className="w-4 h-4" />
            Active Orders
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "completed"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            Completed
          </button>
          <button
            onClick={() => setActiveTab("suppliers")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === "suppliers"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Suppliers
          </button>
        </div>

        {/* Content Sections */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Active Orders Preview */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">Active Orders</h3>
                <button 
                  onClick={() => setActiveTab("active")}
                  className="text-sm text-green-600 hover:text-green-700 font-semibold"
                >
                  View all
                </button>
              </div>
              {activeOrders.slice(0, 2).map((order) => (
                <div key={order.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 hover:shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{order.id}</h3>
                        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                          order.status === 'in_transit'
                            ? 'bg-blue-50 text-blue-700 border border-blue-100'
                            : order.status === 'processing'
                            ? 'bg-yellow-50 text-yellow-700 border border-yellow-100'
                            : 'bg-gray-50 text-gray-700 border border-gray-100'
                        }`}>
                          {order.status.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                        <MapPin className="w-4 h-4" />
                        {order.seller}
                      </div>
                      <div className="text-xs text-gray-500">{order.date}</div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xs text-gray-600 mb-1">ETA</div>
                      <div className="text-lg font-bold text-gray-900">{order.eta}</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-4 mb-4">
                    <div className="font-semibold text-base text-gray-900 mb-1">{order.commodity}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Package className="w-4 h-4" />
                      Quantity: {order.quantity} bags
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">Total Amount</div>
                    <div className="text-2xl font-bold text-gray-900">${order.total.toLocaleString()}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg transition-all">
                      Track Order
                    </button>
                    <button className="flex-1 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-2xl font-semibold text-sm shadow-sm">
                      Contact Seller
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Saved Suppliers */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Saved Suppliers</h3>
              <div className="space-y-4">
                {savedSuppliers.map((supplier) => (
                  <div key={supplier.name} className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-4 hover:from-gray-100 hover:to-gray-200/50 transition-all border border-gray-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-base text-white font-bold">{supplier.name[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-base text-gray-900 truncate mb-1">{supplier.name}</div>
                        <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                          <MapPin className="w-3 h-3" />
                          {supplier.location}
                        </div>
                        <div className="text-xs text-gray-500">{supplier.specialty}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-bold text-gray-900">{supplier.rating}</span>
                      </div>
                      <span className="text-xs text-gray-600">{supplier.orders} orders</span>
                    </div>

                    <button className="w-full py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active Orders */}
        {activeTab === "active" && (
          <div className="space-y-4">
            {activeOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{order.id}</h3>
                        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                          order.status === 'in_transit'
                            ? 'bg-blue-50 text-blue-700 border border-blue-100'
                            : order.status === 'processing'
                            ? 'bg-yellow-50 text-yellow-700 border border-yellow-100'
                            : 'bg-gray-50 text-gray-700 border border-gray-100'
                        }`}>
                          {order.status.replace('_', ' ')}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.priority === 'high' ? 'bg-red-50 text-red-700 border border-red-100' :
                          order.priority === 'medium' ? 'bg-yellow-50 text-yellow-700 border border-yellow-100' :
                          'bg-gray-50 text-gray-700 border border-gray-100'
                        }`}>
                          {order.priority}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                        <MapPin className="w-4 h-4" />
                        {order.seller}
                      </div>
                      <div className="text-sm text-gray-500">Ordered: {order.date}</div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-sm text-gray-600 mb-1">ETA</div>
                      <div className="text-2xl font-bold text-gray-900">{order.eta}</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-4 mb-4">
                    <div className="font-semibold text-lg text-gray-900 mb-1">{order.commodity}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Package className="w-4 h-4" />
                      Quantity: {order.quantity} bags
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">Total Amount</div>
                    <div className="text-3xl font-bold text-gray-900">${order.total.toLocaleString()}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-semibold text-base shadow-md hover:shadow-lg transition-all">
                      Track Order
                    </button>
                    <button className="flex-1 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-2xl font-semibold text-base shadow-sm">
                      Contact Seller
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Completed Orders */}
        {activeTab === "completed" && (
          <div className="space-y-4">
            {completedOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{order.id}</h3>
                        <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-100">
                          Delivered
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                        <MapPin className="w-4 h-4" />
                        {order.seller}
                      </div>
                      <div className="text-sm text-gray-500">Delivered: {order.date}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(order.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-4 mb-4">
                    <div className="font-semibold text-lg text-gray-900 mb-1">{order.commodity}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Package className="w-4 h-4" />
                      Quantity: {order.quantity} bags
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">Total Amount</div>
                    <div className="text-3xl font-bold text-gray-900">${order.total.toLocaleString()}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-semibold text-base shadow-md hover:shadow-lg transition-all">
                      Reorder
                    </button>
                    <button className="flex-1 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-2xl font-semibold text-base shadow-sm">
                      View Receipt
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Suppliers Tab */}
        {activeTab === "suppliers" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedSuppliers.map((supplier) => (
              <div key={supplier.name} className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-xl text-white font-bold">{supplier.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-lg text-gray-900 truncate mb-1">{supplier.name}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                      <MapPin className="w-4 h-4" />
                      {supplier.location}
                    </div>
                    <div className="text-sm text-gray-500">{supplier.specialty}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-3 rounded-2xl border border-yellow-200">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-lg font-bold text-gray-900">{supplier.rating}</span>
                    </div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-3 rounded-2xl border border-blue-200">
                    <div className="text-lg font-bold text-gray-900 mb-1">{supplier.orders}</div>
                    <div className="text-xs text-gray-600">Orders</div>
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-semibold text-base shadow-md hover:shadow-lg transition-all">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <Footer /> */}
    </div>
  )
}