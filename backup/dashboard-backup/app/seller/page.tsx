"use client"

import { useState } from "react"
import {
  Package,
  TrendUp,
  CurrencyCircleDollar,
  ShoppingCart,
  Eye,
  ChartLine,
  Users,
  Clock,
} from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { SellProduceDialog } from "@/components/sell-produce-dialog"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,280",
    change: "+12.5%",
    icon: CurrencyCircleDollar,
    trend: "up",
    description: "vs last month",
  },
  {
    title: "Active Listings",
    value: "24",
    change: "+3",
    icon: Package,
    trend: "up",
    description: "currently selling",
  },
  {
    title: "Total Sales",
    value: "156",
    change: "+8.2%",
    icon: ShoppingCart,
    trend: "up",
    description: "this month",
  },
  {
    title: "Avg. Rating",
    value: "4.8",
    change: "+0.2",
    icon: TrendUp,
    trend: "up",
    description: "from 89 reviews",
  },
]

const listings = [
  {
    id: 1,
    name: "Premium Rice",
    variety: "Basmati",
    price: 450,
    quantity: 500,
    sold: 120,
    status: "active",
    views: 1240,
  },
  {
    id: 2,
    name: "Organic Maize",
    variety: "Yellow Corn",
    price: 280,
    quantity: 1200,
    sold: 450,
    status: "active",
    views: 2180,
  },
  {
    id: 3,
    name: "Fresh Cassava",
    variety: "TME 419",
    price: 180,
    quantity: 800,
    sold: 280,
    status: "active",
    views: 980,
  },
  {
    id: 4,
    name: "Premium Yam",
    variety: "White Yam",
    price: 520,
    quantity: 0,
    sold: 350,
    status: "sold_out",
    views: 1560,
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    buyer: "Lagos Traders Co.",
    commodity: "Premium Rice",
    quantity: 50,
    total: 22500,
    status: "completed",
    date: "2025-01-03",
  },
  {
    id: "ORD-002",
    buyer: "Abuja Food Supplies",
    commodity: "Organic Maize",
    quantity: 100,
    total: 28000,
    status: "pending",
    date: "2025-01-04",
  },
  {
    id: "ORD-003",
    buyer: "Port Harcourt Distributors",
    commodity: "Fresh Cassava",
    quantity: 75,
    total: 13500,
    status: "in_transit",
    date: "2025-01-04",
  },
]

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Seller Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">Manage your inventory, track sales, and grow your business</p>
          </div>
          <SellProduceDialog />
        </div>

        {/* Stats Grid with Enhanced Design */}
        <div className="grid gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.title}
                className="relative overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-16 -mt-16" />
                <CardContent className="pt-6 relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium text-muted-foreground">{stat.title}</div>
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" weight="fill" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="gap-1 bg-success/10 text-success border-success/20">
                        <TrendUp className="h-3 w-3" weight="bold" />
                        {stat.change}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{stat.description}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Content with Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview" className="gap-2">
              <ChartLine className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="listings" className="gap-2">
              <Package className="h-4 w-4" />
              Listings
            </TabsTrigger>
            <TabsTrigger value="orders" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              Orders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Performance Chart */}
              <Card className="lg:col-span-8 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChartLine className="h-5 w-5 text-primary" />
                    Sales Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent rounded-lg border-2 border-dashed">
                    <div className="text-center space-y-2">
                      <ChartLine className="h-12 w-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Sales chart visualization</p>
                      <p className="text-sm text-muted-foreground">Track your revenue trends over time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="lg:col-span-4 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Customer Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Repeat Customers</span>
                      <span className="font-bold">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Avg. Order Value</span>
                      <span className="font-bold">$2,840</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Customer Satisfaction</span>
                      <span className="font-bold">96%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendUp className="h-5 w-5 text-primary" weight="fill" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Top Performer</p>
                        <p className="text-xs text-muted-foreground">Premium Rice - 120 sales</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="listings" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Active Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {listings.map((listing) => (
                    <div
                      key={listing.id}
                      className="flex items-center justify-between rounded-xl border-2 p-4 hover:border-primary/50 transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <Package className="h-8 w-8 text-primary" weight="fill" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">{listing.name}</h3>
                            <Badge variant={listing.status === "active" ? "default" : "secondary"}>
                              {listing.status === "active" ? "Active" : "Sold Out"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{listing.variety}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <CurrencyCircleDollar className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">${listing.price}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Package className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{listing.quantity} in stock</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{listing.sold} sold</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{listing.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-xl border-2 p-4 hover:border-primary/50 transition-all hover:shadow-md"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-semibold text-lg mb-1">{order.id}</div>
                          <div className="text-sm text-muted-foreground">{order.buyer}</div>
                        </div>
                        <Badge
                          variant={
                            order.status === "completed"
                              ? "default"
                              : order.status === "pending"
                                ? "secondary"
                                : "outline"
                          }
                          className="gap-1"
                        >
                          {order.status === "completed" && <TrendUp className="h-3 w-3" weight="fill" />}
                          {order.status === "completed"
                            ? "Completed"
                            : order.status === "pending"
                              ? "Pending"
                              : "In Transit"}
                        </Badge>
                      </div>
                      <div className="text-sm font-medium mb-2">{order.commodity}</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Package className="h-4 w-4" />
                            {order.quantity} bags
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {order.date}
                          </div>
                        </div>
                        <div className="text-lg font-bold">${order.total.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
