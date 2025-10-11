"use client"

import { useState } from "react"
import { TrendUp, TrendDown, CaretUp, Lightning, ChartLine, CurrencyCircleDollar } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

const marketData = [
  { commodity: "Rice", price: 450, change: 2.5, volume: 12500, high: 455, low: 442 },
  { commodity: "Maize", price: 280, change: -1.2, volume: 18200, high: 285, low: 278 },
  { commodity: "Cassava", price: 180, change: 3.8, volume: 9800, high: 182, low: 175 },
  { commodity: "Yam", price: 520, change: 1.5, volume: 6400, high: 525, low: 515 },
  { commodity: "Sorghum", price: 320, change: -0.8, volume: 8900, high: 325, low: 318 },
]

const orderBook = {
  bids: [
    { price: 449.5, quantity: 120, total: 53940 },
    { price: 449.0, quantity: 85, total: 38165 },
    { price: 448.5, quantity: 200, total: 89700 },
    { price: 448.0, quantity: 150, total: 67200 },
    { price: 447.5, quantity: 95, total: 42512 },
  ],
  asks: [
    { price: 450.5, quantity: 110, total: 49555 },
    { price: 451.0, quantity: 75, total: 33825 },
    { price: 451.5, quantity: 180, total: 81270 },
    { price: 452.0, quantity: 140, total: 63280 },
    { price: 452.5, quantity: 90, total: 40725 },
  ],
}

export default function TradingPage() {
  const [selectedCommodity, setSelectedCommodity] = useState("Rice")
  const [orderType, setOrderType] = useState<"market" | "limit">("market")
  const [quantity, setQuantity] = useState(100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container py-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Trading Panel
            </h1>
            <p className="text-muted-foreground text-lg">
              Real-time commodity trading with live order books and instant execution
            </p>
          </div>
          <Badge variant="outline" className="gap-2 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            Market Open
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Market Overview */}
          <Card className="lg:col-span-8 border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <ChartLine className="h-5 w-5 text-primary" />
                  Market Overview
                </CardTitle>
                <Badge variant="outline" className="gap-1">
                  <Lightning className="h-3 w-3 text-yellow-500" weight="fill" />
                  Live Prices
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {marketData.map((item) => (
                  <button
                    key={item.commodity}
                    onClick={() => setSelectedCommodity(item.commodity)}
                    className={`w-full rounded-xl border-2 p-5 text-left transition-all hover:shadow-md ${
                      selectedCommodity === item.commodity
                        ? "border-primary bg-primary/5 shadow-md"
                        : "hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <span className="font-bold text-primary">{item.commodity[0]}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-xl mb-1">{item.commodity}</div>
                          <div className="text-sm text-muted-foreground">Vol: {item.volume.toLocaleString()} bags</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold mb-1">${item.price}</div>
                        <div
                          className={`flex items-center gap-1 text-sm font-medium ${
                            item.change >= 0 ? "text-success" : "text-destructive"
                          }`}
                        >
                          {item.change >= 0 ? (
                            <TrendUp className="h-4 w-4" weight="bold" />
                          ) : (
                            <TrendDown className="h-4 w-4" weight="bold" />
                          )}
                          {Math.abs(item.change)}%
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <div className="text-muted-foreground mb-1">24h High</div>
                        <div className="font-semibold">${item.high}</div>
                        <div className="text-muted-foreground mt-2 mb-1">24h Low</div>
                        <div className="font-semibold">${item.low}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Book */}
          <Card className="lg:col-span-4 border-2">
            <CardHeader>
              <CardTitle className="text-base">Order Book - {selectedCommodity}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Asks */}
                <div>
                  <div className="mb-2 grid grid-cols-3 gap-2 text-xs font-medium text-muted-foreground">
                    <div>Price</div>
                    <div className="text-right">Qty</div>
                    <div className="text-right">Total</div>
                  </div>
                  <div className="space-y-1">
                    {orderBook.asks.reverse().map((ask, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-3 gap-2 text-sm hover:bg-destructive/10 rounded-lg px-2 py-1.5 cursor-pointer transition-colors"
                      >
                        <div className="font-semibold text-destructive">{ask.price}</div>
                        <div className="text-right">{ask.quantity}</div>
                        <div className="text-right text-muted-foreground text-xs">{ask.total}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spread */}
                <div className="flex items-center justify-center gap-2 py-3 border-y-2 bg-muted/30">
                  <span className="text-xl font-bold">450.00</span>
                  <CaretUp className="h-5 w-5 text-success" weight="fill" />
                  <span className="text-sm text-success font-medium">+0.50</span>
                </div>

                {/* Bids */}
                <div>
                  <div className="space-y-1">
                    {orderBook.bids.map((bid, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-3 gap-2 text-sm hover:bg-success/10 rounded-lg px-2 py-1.5 cursor-pointer transition-colors"
                      >
                        <div className="font-semibold text-success">{bid.price}</div>
                        <div className="text-right">{bid.quantity}</div>
                        <div className="text-right text-muted-foreground text-xs">{bid.total}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trading Form */}
          <Card className="lg:col-span-12 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CurrencyCircleDollar className="h-5 w-5 text-primary" />
                Place Order
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-12">
                  <TabsTrigger value="buy" className="text-base">
                    Buy {selectedCommodity}
                  </TabsTrigger>
                  <TabsTrigger value="sell" className="text-base">
                    Sell {selectedCommodity}
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="buy" className="space-y-6 pt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <Label className="text-base">Order Type</Label>
                      <div className="flex gap-2">
                        <Button
                          variant={orderType === "market" ? "default" : "outline"}
                          onClick={() => setOrderType("market")}
                          className="flex-1 h-12"
                        >
                          <Lightning className="h-4 w-4 mr-2" weight="fill" />
                          Market
                        </Button>
                        <Button
                          variant={orderType === "limit" ? "default" : "outline"}
                          onClick={() => setOrderType("limit")}
                          className="flex-1 h-12"
                        >
                          Limit
                        </Button>
                      </div>
                    </div>

                    {orderType === "limit" && (
                      <div className="space-y-3">
                        <Label htmlFor="price" className="text-base">
                          Price (USDC)
                        </Label>
                        <Input id="price" type="number" placeholder="450.00" className="h-12 text-base" />
                      </div>
                    )}

                    <div className="space-y-3">
                      <Label htmlFor="quantity" className="text-base">
                        Quantity (bags)
                      </Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        placeholder="100"
                        className="h-12 text-base"
                      />
                      <Slider
                        value={[quantity]}
                        onValueChange={(value) => setQuantity(value[0])}
                        max={1000}
                        step={10}
                        className="mt-2"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="total" className="text-base">
                        Total (USDC)
                      </Label>
                      <Input
                        id="total"
                        type="number"
                        value={(quantity * 450).toFixed(2)}
                        placeholder="45000.00"
                        disabled
                        className="h-12 text-base font-semibold"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border-2 p-5 bg-muted/30">
                    <div className="text-sm text-muted-foreground">Available Balance</div>
                    <div className="text-xl font-bold">125,000 USDC</div>
                  </div>

                  <Button size="lg" className="w-full h-14 text-lg bg-success hover:bg-success/90">
                    <Lightning className="h-5 w-5 mr-2" weight="fill" />
                    Buy {selectedCommodity}
                  </Button>
                </TabsContent>

                <TabsContent value="sell" className="space-y-6 pt-6">
                  {/* Similar structure for sell tab */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <Label className="text-base">Order Type</Label>
                      <div className="flex gap-2">
                        <Button
                          variant={orderType === "market" ? "default" : "outline"}
                          onClick={() => setOrderType("market")}
                          className="flex-1 h-12"
                        >
                          <Lightning className="h-4 w-4 mr-2" weight="fill" />
                          Market
                        </Button>
                        <Button
                          variant={orderType === "limit" ? "default" : "outline"}
                          onClick={() => setOrderType("limit")}
                          className="flex-1 h-12"
                        >
                          Limit
                        </Button>
                      </div>
                    </div>

                    {orderType === "limit" && (
                      <div className="space-y-3">
                        <Label htmlFor="sell-price" className="text-base">
                          Price (USDC)
                        </Label>
                        <Input id="sell-price" type="number" placeholder="450.00" className="h-12 text-base" />
                      </div>
                    )}

                    <div className="space-y-3">
                      <Label htmlFor="sell-quantity" className="text-base">
                        Quantity (bags)
                      </Label>
                      <Input
                        id="sell-quantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        placeholder="100"
                        className="h-12 text-base"
                      />
                      <Slider
                        value={[quantity]}
                        onValueChange={(value) => setQuantity(value[0])}
                        max={500}
                        step={10}
                        className="mt-2"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="sell-total" className="text-base">
                        Total (USDC)
                      </Label>
                      <Input
                        id="sell-total"
                        type="number"
                        value={(quantity * 450).toFixed(2)}
                        placeholder="45000.00"
                        disabled
                        className="h-12 text-base font-semibold"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border-2 p-5 bg-muted/30">
                    <div className="text-sm text-muted-foreground">Available Inventory</div>
                    <div className="text-xl font-bold">500 bags Rice</div>
                  </div>

                  <Button size="lg" className="w-full h-14 text-lg bg-destructive hover:bg-destructive/90">
                    Sell {selectedCommodity}
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
