"use client"

import { useState } from "react"
import { TrendingUp, Package, DollarSign, Eye, Plus, CheckCircle, Calendar, ArrowUpRight, X, Upload, Tag, Box } from "lucide-react"
import Footer from '@/app/(website)/components/Footer'

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isNewListingModalOpen, setIsNewListingModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    variety: '',
    description: '',
    price: '',
    quantity: '',
    unit: 'bags',
    category: 'grains',
    image: null as File | null
  })
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  // Generate activity data (GitHub-style grid)
  const generateActivityData = () => {
    const weeks = 52
    const data = []
    for (let i = 0; i < weeks * 7; i++) {
      const sales = Math.floor(Math.random() * 15)
      const defaults = Math.random() > 0.95 ? 1 : 0
      data.push({
        date: new Date(Date.now() - (weeks * 7 - i) * 24 * 60 * 60 * 1000),
        sales,
        defaults,
        level: defaults > 0 ? -1 : sales === 0 ? 0 : sales < 3 ? 1 : sales < 6 ? 2 : sales < 10 ? 3 : 4
      })
    }
    return data
  }

  const activityData = generateActivityData()

  const stats = [
    { 
      label: "Total Revenue", 
      value: "$45,280", 
      change: "+12.5%", 
      icon: DollarSign,
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    { 
      label: "Active Listings", 
      value: "24", 
      change: "+3 this month",
      icon: Package,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    { 
      label: "Total Sales", 
      value: "156", 
      change: "+8.2%",
      icon: TrendingUp,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    { 
      label: "Avg. Rating", 
      value: "4.8", 
      change: "+0.2 points",
      icon: CheckCircle,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
  ]

  const listings = [
    { id: 1, name: "Premium Rice", variety: "Basmati", price: 450, quantity: 500, sold: 120, views: 1240, status: "active", trend: "up" },
    { id: 2, name: "Organic Maize", variety: "Yellow Corn", price: 280, quantity: 1200, sold: 450, views: 2180, status: "active", trend: "up" },
    { id: 3, name: "Fresh Cassava", variety: "TME 419", price: 180, quantity: 800, sold: 280, views: 980, status: "active", trend: "down" },
  ]

  const recentOrders = [
    { id: "ORD-001", buyer: "Lagos Traders Co.", commodity: "Premium Rice", quantity: 50, total: 22500, status: "completed", date: "Apr 2", priority: "medium" },
    { id: "ORD-002", buyer: "Abuja Food Supplies", commodity: "Organic Maize", quantity: 100, total: 28000, status: "in_progress", date: "Apr 1", priority: "high" },
    { id: "ORD-003", buyer: "Port Harcourt Dist.", commodity: "Fresh Cassava", quantity: 75, total: 13500, status: "pending", date: "Mar 30", priority: "low" },
  ]

  const getActivityColor = (level: number) => {
    if (level === -1) return "bg-red-500"
    if (level === 0) return "bg-gray-100"
    if (level === 1) return "bg-green-100"
    if (level === 2) return "bg-green-300"
    if (level === 3) return "bg-green-500"
    return "bg-green-600"
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, image: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('New listing:', formData)
    setIsNewListingModalOpen(false)
    // Reset form
    setFormData({
      name: '',
      variety: '',
      description: '',
      price: '',
      quantity: '',
      unit: 'bags',
      category: 'grains',
      image: null
    })
    setImagePreview(null)
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
                  <span className="text-sm font-bold text-white">AF</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Adebayo Farms</span>
              </div>
              <button 
                onClick={() => setIsNewListingModalOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-semibold text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">New Listing</span>
                <span className="sm:hidden">Add</span>
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Your Sales Analysis</h1>
              <p className="text-base text-gray-600">Good morning, Adebayo! Track your performance and manage listings</p>
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

        {/* Sales Performance Grid */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sales Performance</h3>
              <p className="text-sm text-gray-600">156 sales in the last year</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
                <span className="text-gray-600">No sales</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-green-100 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                </div>
                <span className="text-gray-600">More sales</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span className="text-gray-600">Default</span>
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
                    {activityData.filter((_, i) => i % 7 === dayIndex * 2).map((day, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-sm ${getActivityColor(day.level)} hover:ring-2 hover:ring-gray-400 transition-all cursor-pointer`}
                        title={`${day.sales} sales on ${day.date.toLocaleDateString()}`}
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
            onClick={() => setActiveTab("listings")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === "listings"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Active Listings
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === "orders"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Recent Orders
          </button>
        </div>

        {/* Content Sections */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Top Listings */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing</h3>
              <div className="space-y-3">
                {listings.slice(0, 3).map((listing) => (
                  <div key={listing.id} className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl hover:from-gray-100 hover:to-gray-200/50 transition-all border border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                      <Package className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base text-gray-900 truncate">{listing.name}</div>
                      <div className="text-sm text-gray-600">{listing.sold} sold</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-base text-gray-900">${listing.price}</div>
                      <div className="text-xs text-green-600">+{listing.views} views</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h3>
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      order.status === 'completed' ? 'bg-green-500' :
                      order.status === 'in_progress' ? 'bg-blue-500' : 'bg-yellow-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-gray-900">{order.id}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          order.priority === 'high' ? 'bg-red-50 text-red-700 border border-red-100' :
                          order.priority === 'medium' ? 'bg-yellow-50 text-yellow-700 border border-yellow-100' :
                          'bg-gray-50 text-gray-700 border border-gray-100'
                        }`}>
                          {order.priority}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 truncate">{order.buyer}</div>
                      <div className="text-xs text-gray-500">{order.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-sm text-gray-900">${order.total.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "listings" && (
          <div className="space-y-4">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-all">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Package className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-gray-900">{listing.name}</h3>
                          <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-100">
                            Active
                          </span>
                        </div>
                        <p className="text-base text-gray-600">{listing.variety}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-semibold text-gray-700 self-start transition-colors">
                      Edit
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-2xl border border-green-200">
                      <div className="text-sm text-gray-600 mb-1">Price</div>
                      <div className="text-2xl font-bold text-gray-900">${listing.price}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-2xl border border-blue-200">
                      <div className="text-sm text-gray-600 mb-1">In Stock</div>
                      <div className="text-2xl font-bold text-gray-900">{listing.quantity}</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-2xl border border-purple-200">
                      <div className="text-sm text-gray-600 mb-1">Sold</div>
                      <div className="text-2xl font-bold text-gray-900">{listing.sold}</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-4 rounded-2xl border border-yellow-200">
                      <div className="text-sm text-gray-600 mb-1 flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        Views
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{listing.views}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Sales Progress</span>
                      <span>{((listing.sold / (listing.quantity + listing.sold)) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-600 to-green-700 rounded-full transition-all"
                        style={{ width: `${(listing.sold / (listing.quantity + listing.sold)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "orders" && (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-br from-gray-50 to-gray-100/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Order ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Buyer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 hidden md:table-cell">Commodity</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Total</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{order.buyer}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 hidden md:table-cell">{order.commodity}</td>
                      <td className="px-6 py-4 text-sm text-right font-bold text-gray-900">${order.total.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                          order.status === 'completed'
                            ? 'bg-green-50 text-green-700 border border-green-100'
                            : order.status === 'in_progress'
                            ? 'bg-blue-50 text-blue-700 border border-blue-100'
                            : 'bg-yellow-50 text-yellow-700 border border-yellow-100'
                        }`}>
                          {order.status.replace('_', ' ')}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* New Listing Modal */}
      {isNewListingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsNewListingModalOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Decorative curved header */}
            <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 p-8 pb-16">
              {/* Noise texture */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px'
                }}
              />

              {/* Curved bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[3rem]" />

              {/* Close button */}
              <button
                onClick={() => setIsNewListingModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Header content */}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Package className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Create New Listing
                </h2>
                <p className="text-green-100 text-sm">
                  Add your commodity to the marketplace
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 pt-4">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="w-full h-40 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center hover:border-green-500 transition-colors cursor-pointer overflow-hidden"
                    >
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600 font-medium">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Product Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Name
                    </label>
                    <div className="relative">
                      <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Premium Rice"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Variety */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Variety/Type
                    </label>
                    <div className="relative">
                      <Box className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.variety}
                        onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                        placeholder="Basmati"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your product quality, origin, and any certifications..."
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors resize-none"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                      required
                    >
                      <option value="grains">Grains</option>
                      <option value="tubers">Tubers</option>
                      <option value="legumes">Legumes</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="fruits">Fruits</option>
                      <option value="livestock">Livestock</option>
                    </select>
                  </div>

                  {/* Unit */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Unit Type
                    </label>
                    <select
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                      required
                    >
                      <option value="bags">Bags</option>
                      <option value="tons">Tons</option>
                      <option value="kg">Kilograms</option>
                      <option value="crates">Crates</option>
                      <option value="baskets">Baskets</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Price */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Price per Unit ($)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        placeholder="450"
                        min="0"
                        step="0.01"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Quantity Available
                    </label>
                    <div className="relative">
                      <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="500"
                        min="1"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Terms checkbox */}
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-0.5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    required
                  />
                  <span className="text-xs text-gray-600">
                    I confirm that this product meets quality standards and complies with{' '}
                    <button type="button" className="text-green-600 hover:text-green-700 font-semibold">
                      marketplace policies
                    </button>
                  </span>
                </label>

                {/* Submit Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsNewListingModalOpen(false)
                      setImagePreview(null)
                    }}
                    className="flex-1 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 rounded-2xl font-bold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Create Listing
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </div>
  )
}