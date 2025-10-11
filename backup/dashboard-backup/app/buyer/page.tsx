"use client"

import { useState } from "react"
import {
  ShoppingCart,
  Clock,
  CheckCircle,
  TrendUp,
  CurrencyCircleDollar,
  Package,
  MapPin,
  Star,
} from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const stats = [
  {
    title: "Total Purchases",
    value: "$128,450",
    change: "+18.2%",
    icon: CurrencyCircleDollar,
  },
  {
    title: "Active Orders",
    value: "12",
    change: "+3",
    icon: ShoppingCart,
  },
  {
    title: "Completed",
    value: "89",
    change: "+12",
    icon: CheckCircle,
  },
  {
    title: "Avg. Savings",
    value: "22%",
    change: "+3.5%",
    icon: TrendUp,
  },
]

const activeOrders = [
  {
    id: "ORD-101",
    seller: "Adebayo Farms",
    commodity: "Premium Rice",
    quantity: 200,
    total: 90000,
    status: "in_transit",
    eta: "2 days",
    date: "2025-01-02",
  },
  {
    id: "ORD-102",
    seller: "Fatima Agriculture",
    commodity: "Organic Maize",
    quantity: 150,
    total: 42000,
    status: "processing",
    eta: "5 days",
    date: "2025-01-04",
  },
  {
    id: "ORD-103",
    seller: "Okechukwu Cooperative",
    commodity: "Fresh Cassava",
    quantity: 100,
    total: 18000,
    status: "confirmed",
    eta: "7 days",
    date: "2025-01-04",
  },
]

const completedOrders = [
  {
    id: "ORD-098",
    seller: "Benue Farmers Union",
    commodity: "Premium Yam",
    quantity: 80,
    total: 41600,
    status: "delivered",
    date: "2024-12-28",
    rating: 5,
  },
  {
    id: "ORD-095",
    seller: "Amina Agro",
    commodity: "Sorghum Grain",
    quantity: 120,
    total: 38400,
    status: "delivered",
    date: "2024-12-25",
    rating: 4,
  },
  {
    id: "ORD-092",
    seller: "Northern Traders Co.",
    commodity: "Groundnut",
    quantity: 90,
    total: 34200,
    status: "delivered",
    date: "2024-12-20",
    rating: 5,
  },
]

const savedSuppliers = [
  {
    name: "Adebayo Farms",
    location: "Kano State",
    rating: 4.8,
    orders: 12,
    specialty: "Rice & Grains",
  },
  {
    name: "Fatima Agriculture",
    location: "Kaduna State",
    rating: 4.9,
    orders: 8,
    specialty: "Maize & Sorghum",
  },
  {
    name: "Okechukwu Cooperative",
    location: "Enugu State",
    rating: 4.7,
    orders: 15,
    specialty: "Tubers",
  },
]

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState("active")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Buyer Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your orders, manage suppliers, and optimize your procurement
          </p>
        </div>

        {/* Stats Grid with Enhanced Design */}
        <div className="grid gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
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
                    <Badge variant="secondary" className="gap-1 bg-success/10 text-success border-success/20">
                      <TrendUp className="h-3 w-3" weight="bold" />
                      {stat.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Orders Section */}
          <Card className="lg:col-span-8 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6 grid w-full grid-cols-2">
                  <TabsTrigger value="active" className="gap-2">
                    <Clock className="h-4 w-4" />
                    Active Orders
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Completed
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-4">
                  {activeOrders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-xl border-2 p-5 hover:border-primary/50 transition-all hover:shadow-md"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="font-semibold text-lg mb-1">{order.id}</div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {order.seller}
                          </div>
                        </div>
                        <Badge variant={order.status === "in_transit" ? "default" : "secondary"} className="gap-1">
                          {order.status === "in_transit" && <TrendUp className="h-3 w-3" weight="fill" />}
                          {order.status === "in_transit"
                            ? "In Transit"
                            : order.status === "processing"
                              ? "Processing"
                              : "Confirmed"}
                        </Badge>
                      </div>

                      <div className="mb-4 p-3 rounded-lg bg-muted/50">
                        <div className="font-medium mb-1">{order.commodity}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Package className="h-4 w-4" />
                          Quantity: {order.quantity} bags
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">ETA: {order.eta}</span>
                        </div>
                        <div className="text-xl font-bold">${order.total.toLocaleString()}</div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          Track Order
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1">
                          Contact Seller
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  {completedOrders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-xl border-2 p-5 hover:border-primary/50 transition-all hover:shadow-md"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="font-semibold text-lg mb-1">{order.id}</div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {order.seller}
                          </div>
                        </div>
                        <Badge variant="outline" className="gap-1 bg-success/10 text-success border-success/20">
                          <CheckCircle className="h-3 w-3" weight="fill" />
                          Delivered
                        </Badge>
                      </div>

                      <div className="mb-4 p-3 rounded-lg bg-muted/50">
                        <div className="font-medium mb-1">{order.commodity}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Package className="h-4 w-4" />
                          Quantity: {order.quantity} bags
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(order.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-500" weight="fill" />
                          ))}
                        </div>
                        <div className="text-xl font-bold">${order.total.toLocaleString()}</div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          Reorder
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1">
                          View Receipt
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Saved Suppliers */}
          <Card className="lg:col-span-4 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Saved Suppliers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savedSuppliers.map((supplier) => (
                  <div
                    key={supplier.name}
                    className="rounded-xl border-2 p-4 hover:border-primary/50 transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">{supplier.name[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold mb-1 truncate">{supplier.name}</div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                          <MapPin className="h-3 w-3" />
                          {supplier.location}
                        </div>
                        <div className="text-xs text-muted-foreground">{supplier.specialty}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" weight="fill" />
                        <span className="font-medium text-sm">{supplier.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{supplier.orders} orders</div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Profile
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
