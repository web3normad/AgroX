"use client"

import { useState } from "react"
import { Wallet, ArrowUpRight, ArrowDownLeft, Send, Download, DollarSign, TrendingUp, Clock, Copy, CheckCircle2 } from "lucide-react"

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [copied, setCopied] = useState(false)

  const walletAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"

  const stats = [
    { 
      label: "Total Balance", 
      value: "$24,580", 
      change: "+$2,450 this month",
      icon: Wallet,
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    { 
      label: "Pending", 
      value: "$3,200", 
      change: "2 transactions",
      icon: Clock,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    { 
      label: "Total Received", 
      value: "$128,450", 
      change: "+18.2% growth",
      icon: ArrowDownLeft,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    { 
      label: "Total Sent", 
      value: "$103,870", 
      change: "45 transactions",
      icon: ArrowUpRight,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
  ]

  const transactions = [
    { 
      id: "TXN-001", 
      type: "received", 
      from: "Adebayo Farms", 
      amount: 90000, 
      status: "completed", 
      date: "Apr 5, 2024",
      time: "14:32",
      orderId: "ORD-101"
    },
    { 
      id: "TXN-002", 
      type: "sent", 
      to: "Lagos Traders Co.", 
      amount: 42000, 
      status: "completed", 
      date: "Apr 4, 2024",
      time: "10:15",
      orderId: "ORD-102"
    },
    { 
      id: "TXN-003", 
      type: "received", 
      from: "Fatima Agriculture", 
      amount: 38400, 
      status: "pending", 
      date: "Apr 3, 2024",
      time: "16:45",
      orderId: "ORD-098"
    },
    { 
      id: "TXN-004", 
      type: "sent", 
      to: "Withdrawal to Bank", 
      amount: 50000, 
      status: "completed", 
      date: "Apr 2, 2024",
      time: "09:20",
      orderId: null
    },
  ]

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Wallet</h1>
              <p className="text-base text-gray-600">Manage your USDC transactions and balance</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-2xl font-semibold text-sm shadow-sm">
                <Download className="w-4 h-4" />
                Withdraw
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg transition-all">
                <Send className="w-4 h-4" />
                Send Money
              </button>
            </div>
          </div>
        </div>

        {/* Wallet Address Card */}
        <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl p-6 mb-8 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Your Wallet Address</h3>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
            <p className="text-white font-mono text-sm break-all">{walletAddress}</p>
          </div>
          <button 
            onClick={copyAddress}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-green-700 rounded-xl font-semibold text-sm transition-colors"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Address
              </>
            )}
          </button>
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
                <div className="text-xs text-gray-500">{stat.change}</div>
              </div>
            )
          })}
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
            All Transactions
          </button>
          <button
            onClick={() => setActiveTab("received")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === "received"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Received
          </button>
          <button
            onClick={() => setActiveTab("sent")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === "sent"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Sent
          </button>
        </div>

        {/* Transactions List */}
        <div className="space-y-4">
          {transactions
            .filter(txn => {
              if (activeTab === "received") return txn.type === "received"
              if (activeTab === "sent") return txn.type === "sent"
              return true
            })
            .map((txn) => (
            <div key={txn.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    txn.type === "received" 
                      ? "bg-green-50" 
                      : "bg-blue-50"
                  }`}>
                    {txn.type === "received" ? (
                      <ArrowDownLeft className="w-6 h-6 text-green-600" />
                    ) : (
                      <ArrowUpRight className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{txn.id}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        txn.status === "completed"
                          ? "bg-green-50 text-green-700 border border-green-100"
                          : "bg-yellow-50 text-yellow-700 border border-yellow-100"
                      }`}>
                        {txn.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-1">
                      {txn.type === "received" ? "From: " : "To: "}
                      <span className="font-semibold text-gray-900">
                        {txn.from || txn.to}
                      </span>
                    </p>
                    
                    {txn.orderId && (
                      <p className="text-xs text-gray-500">Order: {txn.orderId}</p>
                    )}
                    
                    <p className="text-xs text-gray-500 mt-2">
                      {txn.date} at {txn.time}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`text-2xl font-bold ${
                    txn.type === "received" 
                      ? "text-green-600" 
                      : "text-gray-900"
                  }`}>
                    {txn.type === "received" ? "+" : "-"}${txn.amount.toLocaleString()}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">USDC</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {transactions.filter(txn => {
          if (activeTab === "received") return txn.type === "received"
          if (activeTab === "sent") return txn.type === "sent"
          return true
        }).length === 0 && (
          <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center">
            <Wallet className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No transactions found</h3>
            <p className="text-gray-600">You don't have any {activeTab} transactions yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}