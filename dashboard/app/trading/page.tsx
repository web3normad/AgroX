"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, ShoppingCart, Activity, DollarSign, Package2 } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function TradingPage() {
  const [selectedCommodity, setSelectedCommodity] = useState("RICE")
  const [side, setSide] = useState<"buy" | "sell">("buy")
  const [price, setPrice] = useState("450.00")
  const [amount, setAmount] = useState("")
  const [currentPrice, setCurrentPrice] = useState(450.00)
  const [chartData, setChartData] = useState<any[]>([])

  const commodities = [
    { symbol: "RICE", name: "Premium Rice (Basmati)", price: 450.00, change: 2.5, volume: 12500, high: 455.00, low: 442.00, unit: "per ton" },
    { symbol: "MAIZE", name: "Organic Maize", price: 280.00, change: -1.2, volume: 18200, high: 285.00, low: 278.00, unit: "per ton" },
    { symbol: "CASSAVA", name: "Fresh Cassava", price: 180.00, change: 3.8, volume: 9800, high: 182.00, low: 175.00, unit: "per ton" },
    { symbol: "YAM", name: "Premium Yam", price: 520.00, change: 1.5, volume: 6400, high: 525.00, low: 515.00, unit: "per ton" },
    { symbol: "SOYBEAN", name: "Soybeans", price: 380.00, change: -0.8, volume: 7200, high: 385.00, low: 378.00, unit: "per ton" },
  ]

  const currentCommodity = commodities.find(c => c.symbol === selectedCommodity) || commodities[0]

  const orderBook = {
    asks: [
      { price: 451.50, amount: 180, total: 81270 },
      { price: 451.00, amount: 75, total: 33825 },
      { price: 450.50, amount: 110, total: 49555 },
      { price: 450.30, amount: 95, total: 42778.5 },
      { price: 450.10, amount: 120, total: 54012 },
    ],
    bids: [
      { price: 449.90, amount: 120, total: 53988 },
      { price: 449.50, amount: 85, total: 38207.5 },
      { price: 449.00, amount: 200, total: 89800 },
      { price: 448.50, amount: 150, total: 67275 },
      { price: 448.00, amount: 180, total: 80640 },
    ]
  }

  const recentTrades = [
    { price: 450.00, amount: 25, time: "14:32:15", type: "buy" },
    { price: 449.80, amount: 40, time: "14:31:52", type: "sell" },
    { price: 450.20, amount: 15, time: "14:31:30", type: "buy" },
    { price: 449.90, amount: 30, time: "14:31:10", type: "sell" },
    { price: 450.10, amount: 20, time: "14:30:45", type: "buy" },
  ]

  // Generate initial chart data
  useEffect(() => {
    const generateHistoricalData = () => {
      const data = []
      let basePrice = currentCommodity.price - 20
      const now = Date.now()
      const interval = 300000 // 5 minutes

      for (let i = 100; i >= 0; i--) {
        const time = now - (i * interval)
        const priceChange = (Math.random() - 0.5) * 8
        basePrice += priceChange
        
        data.push({
          time: new Date(time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          price: parseFloat(basePrice.toFixed(2)),
          timestamp: time
        })
      }
      
      return data
    }

    setChartData(generateHistoricalData())
  }, [selectedCommodity, currentCommodity.price])

  // Real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const priceChange = (Math.random() - 0.5) * 2
      const newPrice = Math.max(currentPrice + priceChange, currentCommodity.low)
      
      setCurrentPrice(newPrice)
      setPrice(newPrice.toFixed(2))

      setChartData(prevData => {
        const newDataPoint = {
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          price: parseFloat(newPrice.toFixed(2)),
          timestamp: Date.now()
        }
        
        return [...prevData.slice(1), newDataPoint]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [currentPrice, currentCommodity.low])

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-semibold text-gray-900">${payload[0].value}</p>
          <p className="text-xs text-gray-600">{payload[0].payload.time}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">AgriVault</span>
              <span className="hidden md:inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold ml-3">
                MARKET
              </span>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <button className="hidden md:block text-gray-600 hover:text-gray-900 font-medium text-sm">
                Marketplace
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              </button>
              <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 lg:px-6 py-3 md:py-4">
        <div className="grid grid-cols-12 gap-2 md:gap-4">
          
          <div className="hidden lg:block lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Commodities</h3>
                <Activity className="w-4 h-4 text-gray-500" />
              </div>
              
              <div className="space-y-2">
                {commodities.map((commodity) => (
                  <button
                    key={commodity.symbol}
                    onClick={() => {
                      setSelectedCommodity(commodity.symbol)
                      setPrice(commodity.price.toFixed(2))
                      setCurrentPrice(commodity.price)
                    }}
                    className={`w-full p-3 rounded-xl transition-all text-left ${
                      selectedCommodity === commodity.symbol
                        ? 'bg-green-50 border-2 border-green-200 shadow-sm'
                        : 'hover:bg-gray-50 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-gray-900">{commodity.symbol}</span>
                      <span className={`text-xs font-bold ${
                        commodity.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {commodity.change >= 0 ? '+' : ''}{commodity.change}%
                      </span>
                    </div>
                    <div className="text-base font-bold text-gray-900">${commodity.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-500 mt-1">{commodity.unit}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-4">
            
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{currentCommodity.name}</h2>
                    <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
                      currentCommodity.change >= 0 ? 'bg-green-50' : 'bg-red-50'
                    }`}>
                      {currentCommodity.change >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={`text-sm font-bold ${
                        currentCommodity.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {currentCommodity.change >= 0 ? '+' : ''}{currentCommodity.change}%
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Price {currentCommodity.unit} • USD</div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">24h High</div>
                    <div className="text-base font-bold text-green-600">${currentCommodity.high.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">24h Low</div>
                    <div className="text-base font-bold text-red-600">${currentCommodity.low.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">24h Volume</div>
                    <div className="text-base font-bold text-gray-900">{(currentCommodity.volume/1000).toFixed(1)}K tons</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700">Price Chart - Real-Time</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center gap-2">
                  {['5m', '15m', '1H', '4H', '1D'].map((interval) => (
                    <button
                      key={interval}
                      className="px-3 py-1 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      {interval}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-4">
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="time" 
                      stroke="#9ca3af"
                      style={{ fontSize: '12px' }}
                      interval="preserveStartEnd"
                      minTickGap={50}
                    />
                    <YAxis 
                      stroke="#9ca3af"
                      style={{ fontSize: '12px' }}
                      domain={['dataMin - 10', 'dataMax + 10']}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorPrice)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  onClick={() => setSide("buy")}
                  className={`py-3 rounded-xl font-semibold transition-all ${
                    side === "buy"
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setSide("sell")}
                  className={`py-3 rounded-xl font-semibold transition-all ${
                    side === "sell"
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Sell
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price (USD/{currentCommodity.unit.split(' ')[1]})
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount (tons)
                  </label>
                  <div className="relative">
                    <Package2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-4">
                <span className="text-sm font-medium text-gray-600">Total Cost</span>
                <span className="text-lg font-bold text-gray-900">
                  {amount && price ? '$' + (parseFloat(amount) * parseFloat(price)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '$0.00'} USD
                </span>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                side === "buy"
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}>
                {side === "buy" ? 'Buy' : 'Sell'} {currentCommodity.symbol}
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-3 space-y-4">
            
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-900">Order Book</h3>
                <p className="text-xs text-gray-500 mt-1">Buy & sell orders</p>
              </div>
              
              <div className="p-3">
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 mb-2 px-2">
                  <div>Price (USD)</div>
                  <div className="text-right">Amount</div>
                  <div className="text-right">Total</div>
                </div>

                <div className="mb-3">
                  {orderBook.asks.reverse().map((order, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 py-1.5 hover:bg-red-50 rounded px-2 cursor-pointer relative overflow-hidden">
                      <div 
                        className="absolute right-0 top-0 bottom-0 bg-red-50 opacity-30"
                        style={{ width: `${(order.amount / 200) * 100}%` }}
                      />
                      <span className="text-sm font-bold text-red-600 relative z-10">{order.price.toFixed(2)}</span>
                      <span className="text-sm text-gray-700 text-right relative z-10">{order.amount}</span>
                      <span className="text-xs text-gray-500 text-right relative z-10">{(order.total/1000).toFixed(1)}K</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center py-3 bg-gradient-to-r from-green-50 to-green-100 rounded-xl mb-3">
                  <span className="text-xl font-bold text-green-600">${currentPrice.toFixed(2)}</span>
                  <TrendingUp className="w-5 h-5 text-green-600 ml-2" />
                </div>

                <div>
                  {orderBook.bids.map((order, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 py-1.5 hover:bg-green-50 rounded px-2 cursor-pointer relative overflow-hidden">
                      <div 
                        className="absolute right-0 top-0 bottom-0 bg-green-50 opacity-30"
                        style={{ width: `${(order.amount / 200) * 100}%` }}
                      />
                      <span className="text-sm font-bold text-green-600 relative z-10">{order.price.toFixed(2)}</span>
                      <span className="text-sm text-gray-700 text-right relative z-10">{order.amount}</span>
                      <span className="text-xs text-gray-500 text-right relative z-10">{(order.total/1000).toFixed(1)}K</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-900">Recent Trades</h3>
                <p className="text-xs text-gray-500 mt-1">Last transactions</p>
              </div>
              
              <div className="p-3">
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 mb-2 px-2">
                  <div>Price</div>
                  <div className="text-right">Amount</div>
                  <div className="text-right">Time</div>
                </div>
                
                <div className="space-y-1">
                  {recentTrades.map((trade, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 py-1.5 px-2 hover:bg-gray-50 rounded">
                      <span className={`text-sm font-bold ${
                        trade.type === 'buy' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {trade.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-700 text-right">{trade.amount}</span>
                      <span className="text-xs text-gray-500 text-right">{trade.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}