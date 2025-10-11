"use client"

import { useState } from "react"
import { Search, TrendingUp, TrendingDown, Star, MapPin, Package, ShoppingCart, Eye, ChevronDown, X } from "lucide-react"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedFilter, setSelectedFilter] = useState("popular")
  const [showBrandFilter, setShowBrandFilter] = useState(false)

  const commodities = [
    {
      id: 1,
      name: "Premium Rice",
      variety: "Basmati",
      seller: "Adebayo Farms",
      location: "Kano State",
      price: 450.00,
      oldPrice: 480.00,
      change24h: 2.5,
      quantity: 500,
      rating: 4.8,
      reviews: 234,
      discount: 95,
      badge: "Top Seller"
    },
    {
      id: 2,
      name: "Organic Maize",
      variety: "Yellow Corn",
      seller: "Fatima Agriculture",
      location: "Kaduna State",
      price: 280.00,
      oldPrice: 300.00,
      change24h: -1.2,
      quantity: 1200,
      rating: 4.9,
      reviews: 456,
      discount: 98,
      badge: null
    },
    {
      id: 3,
      name: "Fresh Cassava",
      variety: "TME 419",
      seller: "Okechukwu Cooperative",
      location: "Enugu State",
      price: 180.00,
      oldPrice: 200.00,
      change24h: 3.8,
      quantity: 800,
      rating: 4.7,
      reviews: 189,
      discount: 96,
      badge: null
    },
    {
      id: 4,
      name: "Premium Yam",
      variety: "White Yam",
      seller: "Benue Farmers Union",
      location: "Benue State",
      price: 520.00,
      oldPrice: 550.00,
      change24h: 1.5,
      quantity: 350,
      rating: 4.6,
      reviews: 145,
      discount: 97,
      badge: null
    },
    {
      id: 5,
      name: "Groundnuts",
      variety: "Kampala Type",
      seller: "Zaria Groundnut Co.",
      location: "Kaduna State",
      price: 320.00,
      oldPrice: 340.00,
      change24h: 1.8,
      quantity: 600,
      rating: 4.5,
      reviews: 178,
      discount: 94,
      badge: null
    },
    {
      id: 6,
      name: "Soybean",
      variety: "TGX Series",
      seller: "Plateau Farmers",
      location: "Plateau State",
      price: 380.00,
      oldPrice: 410.00,
      change24h: 2.2,
      quantity: 450,
      rating: 4.7,
      reviews: 203,
      discount: 93,
      badge: null
    },
  ]

  const categories = [
    "All Products",
    "Grains",
    "Tubers", 
    "Legumes",
    "Vegetables",
    "Fruits"
  ]

  const bestSellers = [
    { name: "Adebayo Farms", discount: "99%" },
    { name: "Fatima Agro", discount: "98%" },
    { name: "Northern Co-op", discount: "97%" },
    { name: "Lagos Traders", discount: "96%" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className=" mx-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">AgriVault</span>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Find the commodity you want"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="w-10 h-10 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-12 px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            {/* Categories */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center justify-between">
                Categories
                <ChevronDown className="w-5 h-5" />
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat.toLowerCase())}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat.toLowerCase()
                        ? 'bg-green-50 text-green-700 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Best Sellers */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-4">BEST SELLERS</h3>
              <div className="space-y-3">
                {bestSellers.map((seller, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {seller.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-gray-900">{seller.name}</div>
                      <div className="text-xs text-green-600 font-semibold">{seller.discount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-9">
            {/* Hot Sale Banner */}
            <div className="mb-6 relative">
              <div className="bg-gradient-to-r from-pink-400 to-pink-300 rounded-3xl p-8 overflow-hidden">
                <div className="absolute top-2 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-pink-600">
                  HOT SALE
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Best discounts</h2>
                    <p className="text-white/90 mb-4">1293 items</p>
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-700">Left</span>
                      <span className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm font-bold">10 DAYS</span>
                    </div>
                  </div>
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Live Market Stats Banner */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="relative">
                  <div className="text-sm opacity-90 mb-1">Total Volume (24h)</div>
                  <div className="text-3xl font-bold mb-1">$2.4M</div>
                  <div className="text-sm flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+12.5% from yesterday</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="relative">
                  <div className="text-sm opacity-90 mb-1">Active Traders</div>
                  <div className="text-3xl font-bold mb-1">5,832</div>
                  <div className="text-sm flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+15.3% this week</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="relative">
                  <div className="text-sm opacity-90 mb-1">Avg Settlement Time</div>
                  <div className="text-3xl font-bold mb-1">&lt;24h</div>
                  <div className="text-sm">Fastest in the market</div>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                {['Popular', 'Cheap', 'Expensive', 'Sale'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter.toLowerCase())}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedFilter === filter.toLowerCase()
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowBrandFilter(!showBrandFilter)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <span className="text-sm font-medium text-gray-700">Brand</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <span className="text-sm font-medium">Filter</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Products Grid - ORIGINAL BEAUTIFUL CARD DESIGN */}
            <div className="grid grid-cols-3 gap-6">
              {commodities.map((commodity) => (
                <div
                  key={commodity.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 border-white/50"
                >
                  {/* Card Header with curved bottom */}
                  <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 relative">
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-white rounded-t-3xl"></div>
                    
                    <div className="flex items-start justify-between relative z-10">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {commodity.name}
                        </h3>
                        <p className="text-green-100 text-sm">{commodity.variety}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                        <span className="text-white font-semibold text-sm">{commodity.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pt-2">
                    {/* Price Section */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-gray-900">${commodity.price}</span>
                      <span className="text-sm text-gray-600">USDC</span>
                      <div className={`ml-auto flex items-center gap-1 px-2 py-1 rounded-full text-sm font-semibold ${
                        commodity.change24h >= 0 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {commodity.change24h >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {Math.abs(commodity.change24h)}%
                      </div>
                    </div>

                    {/* 24h Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 rounded-2xl">
                      <div>
                        <div className="text-xs text-gray-600">24h High</div>
                        <div className="text-sm font-bold text-gray-900">${commodity.oldPrice}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">24h Low</div>
                        <div className="text-sm font-bold text-gray-900">${(commodity.price * 0.98).toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Volume</div>
                        <div className="text-sm font-bold text-gray-900">{(commodity.quantity/10).toFixed(0)}K</div>
                      </div>
                    </div>

                    {/* Seller Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Seller</span>
                        <span className="font-semibold text-gray-900">{commodity.seller}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Location</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-gray-500" />
                          <span className="font-semibold text-gray-900">{commodity.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Available</span>
                        <div className="flex items-center gap-1">
                          <Package className="w-3 h-3 text-gray-500" />
                          <span className="font-semibold text-gray-900">{commodity.quantity} bags</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Views</span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 text-gray-500" />
                          <span className="font-semibold text-gray-900">{commodity.reviews}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}