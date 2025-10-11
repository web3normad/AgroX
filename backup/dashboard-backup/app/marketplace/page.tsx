"use client"

import { useState } from "react"
import { MagnifyingGlass, Funnel, MapPin, Star, ShoppingCart } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const commodities = [
  {
    id: 1,
    name: "Premium Rice",
    variety: "Basmati",
    seller: "Adebayo Farms",
    location: "Kano State",
    price: 450,
    unit: "per 50kg bag",
    quantity: 500,
    rating: 4.8,
    verified: true,
    image: "/rice-grains.jpg",
  },
  {
    id: 2,
    name: "Organic Maize",
    variety: "Yellow Corn",
    seller: "Fatima Agriculture",
    location: "Kaduna State",
    price: 280,
    unit: "per 50kg bag",
    quantity: 1200,
    rating: 4.9,
    verified: true,
    image: "/corn-maize.jpg",
  },
  {
    id: 3,
    name: "Fresh Cassava",
    variety: "TME 419",
    seller: "Okechukwu Cooperative",
    location: "Enugu State",
    price: 180,
    unit: "per 100kg",
    quantity: 800,
    rating: 4.7,
    verified: true,
    image: "/cassava-tubers.jpg",
  },
  {
    id: 4,
    name: "Premium Yam",
    variety: "White Yam",
    seller: "Benue Farmers Union",
    location: "Benue State",
    price: 520,
    unit: "per 100kg",
    quantity: 350,
    rating: 4.6,
    verified: true,
    image: "/yam-tubers.jpg",
  },
  {
    id: 5,
    name: "Sorghum Grain",
    variety: "Red Sorghum",
    seller: "Amina Agro",
    location: "Sokoto State",
    price: 320,
    unit: "per 50kg bag",
    quantity: 600,
    rating: 4.5,
    verified: true,
    image: "/sorghum-grain.jpg",
  },
  {
    id: 6,
    name: "Groundnut",
    variety: "Kampala",
    seller: "Northern Traders Co.",
    location: "Katsina State",
    price: 380,
    unit: "per 50kg bag",
    quantity: 450,
    rating: 4.8,
    verified: true,
    image: "/groundnut-peanuts.jpg",
  },
]

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Commodity Marketplace</h1>
        <p className="text-muted-foreground">
          Browse verified agricultural commodities from trusted sellers across Nigeria
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <MagnifyingGlass className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search commodities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="grains">Grains</SelectItem>
              <SelectItem value="tubers">Tubers</SelectItem>
              <SelectItem value="legumes">Legumes</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="kano">Kano State</SelectItem>
              <SelectItem value="kaduna">Kaduna State</SelectItem>
              <SelectItem value="benue">Benue State</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon">
            <Funnel className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Commodity Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {commodities.map((commodity) => (
          <Card key={commodity.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <img
                  src={commodity.image || "/placeholder.svg"}
                  alt={commodity.name}
                  className="h-full w-full object-cover"
                />
                {commodity.verified && (
                  <Badge className="absolute top-2 right-2 bg-success text-success-foreground">Verified</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{commodity.name}</h3>
                  <p className="text-sm text-muted-foreground">{commodity.variety}</p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star weight="fill" className="h-4 w-4 text-amber-500" />
                  <span className="font-medium">{commodity.rating}</span>
                </div>
              </div>

              <div className="mb-3 space-y-1 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{commodity.location}</span>
                </div>
                <div className="text-muted-foreground">Seller: {commodity.seller}</div>
                <div className="text-muted-foreground">Available: {commodity.quantity} bags</div>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-primary">${commodity.price}</span>
                <span className="text-sm text-muted-foreground">{commodity.unit}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 gap-2">
              <Button className="flex-1 gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
