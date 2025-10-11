"use client"

import { useState } from "react"
import { X, Plus } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SellProduceDialog() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    variety: "",
    price: "",
    quantity: "",
    category: "grains"
  })
  
  const handleSubmit = () => {
    console.log("Produce listed:", formData)
    setOpen(false)
    setFormData({ name: "", variety: "", price: "", quantity: "", category: "grains" })
  }
  
  if (!open) {
    return (
      <Button onClick={() => setOpen(true)} size="lg" className="gap-2">
        <Plus className="h-5 w-5" weight="bold" />
        List New Produce
      </Button>
    )
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-semibold">List New Produce</h2>
          <button onClick={() => setOpen(false)} className="rounded-sm opacity-70 hover:opacity-100">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Commodity Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g., Premium Rice"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="variety">Variety</Label>
            <Input
              id="variety"
              value={formData.variety}
              onChange={(e) => setFormData({...formData, variety: e.target.value})}
              placeholder="e.g., Basmati"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select 
              defaultValue={formData.category}
              onValueChange={(value) => setFormData({...formData, category: value})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grains">Grains</SelectItem>
                <SelectItem value="tubers">Tubers</SelectItem>
                <SelectItem value="legumes">Legumes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price (per 50kg)</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                placeholder="450"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity (bags)</Label>
              <Input
                id="quantity"
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                placeholder="500"
              />
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="flex-1">
              List Produce
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
