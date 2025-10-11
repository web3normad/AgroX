"use client"

import { useState } from "react"
import { AlertCircle, Clock, CheckCircle, XCircle, MessageSquare, FileText, ArrowUpRight, Calendar } from "lucide-react"

export default function DisputesPage() {
  const [activeTab, setActiveTab] = useState("active")

  const disputes = [
    { 
      id: "DIS-001", 
      orderId: "ORD-101", 
      party: "Adebayo Farms", 
      reason: "Quality Issue", 
      amount: 90000, 
      status: "open", 
      date: "Apr 5, 2024",
      lastUpdate: "2 hours ago",
      messages: 3
    },
    { 
      id: "DIS-002", 
      orderId: "ORD-098", 
      party: "Lagos Traders Co.", 
      reason: "Late Delivery", 
      amount: 41600, 
      status: "under_review", 
      date: "Apr 3, 2024",
      lastUpdate: "1 day ago",
      messages: 7
    },
    { 
      id: "DIS-003", 
      orderId: "ORD-095", 
      party: "Fatima Agriculture", 
      reason: "Payment Delay", 
      amount: 38400, 
      status: "resolved", 
      date: "Mar 28, 2024",
      lastUpdate: "5 days ago",
      messages: 12,
      resolution: "Refund issued"
    },
  ]

  const stats = [
    { 
      label: "Active Disputes", 
      value: "2", 
      icon: AlertCircle,
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    { 
      label: "Under Review", 
      value: "1", 
      icon: Clock,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    { 
      label: "Resolved", 
      value: "8", 
      icon: CheckCircle,
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    { 
      label: "Avg. Resolution Time", 
      value: "3.2 days", 
      icon: Clock,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
  ]

  const getStatusBadge = (status: string) => {
    const badges = {
      open: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-100', label: 'Open' },
      under_review: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-100', label: 'Under Review' },
      resolved: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-100', label: 'Resolved' },
      rejected: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-100', label: 'Rejected' },
    }
    const badge = badges[status as keyof typeof badges] || badges.open
    return (
      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${badge.bg} ${badge.text} ${badge.border}`}>
        {badge.label}
      </span>
    )
  }

  const filteredDisputes = disputes.filter(d => {
    if (activeTab === "active") return d.status === "open" || d.status === "under_review"
    if (activeTab === "resolved") return d.status === "resolved"
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Disputes</h1>
              <p className="text-base text-gray-600">Manage and resolve your transaction disputes</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg transition-all">
              <AlertCircle className="w-4 h-4" />
              File New Dispute
            </button>
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
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </div>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-gray-200 p-1.5 mb-8 inline-flex gap-1 overflow-x-auto shadow-sm">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === "all"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Disputes
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === "active"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab("resolved")}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === "resolved"
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Resolved
          </button>
        </div>

        {/* Disputes List */}
        <div className="space-y-4">
          {filteredDisputes.map((dispute) => (
            <div key={dispute.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{dispute.id}</h3>
                    {getStatusBadge(dispute.status)}
                    <span className="text-sm text-gray-500">Order: {dispute.orderId}</span>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Party Involved</p>
                      <p className="text-sm font-semibold text-gray-900">{dispute.party}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Reason</p>
                      <p className="text-sm font-semibold text-gray-900">{dispute.reason}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Amount in Dispute</p>
                      <p className="text-sm font-bold text-red-600">${dispute.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Last Update</p>
                      <p className="text-sm text-gray-700">{dispute.lastUpdate}</p>
                    </div>
                  </div>

                  {dispute.resolution && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4">
                      <p className="text-sm font-semibold text-green-800">
                        <CheckCircle className="w-4 h-4 inline mr-2" />
                        Resolution: {dispute.resolution}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-row lg:flex-col gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all">
                    <MessageSquare className="w-4 h-4" />
                    <span className="hidden sm:inline">Messages</span>
                    <span className="bg-white text-green-600 px-2 py-0.5 rounded-full text-xs font-bold">{dispute.messages}</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-semibold text-sm shadow-sm">
                    <FileText className="w-4 h-4" />
                    <span className="hidden sm:inline">Details</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  Filed on {dispute.date}
                </div>
                <a href="#" className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1">
                  View Full Details
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredDisputes.length === 0 && (
          <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center">
            <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No disputes found</h3>
            <p className="text-gray-600">You don't have any {activeTab} disputes at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}