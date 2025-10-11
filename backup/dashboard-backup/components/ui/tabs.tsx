"use client"

import React, { useState } from "react"

interface TabsProps {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  className?: string
  children: React.ReactNode
}

interface TabsListProps {
  className?: string
  children: React.ReactNode
  activeTab?: string
  onTabChange?: (value: string) => void
}

interface TabsTriggerProps {
  className?: string
  value: string
  children: React.ReactNode
  activeTab?: string
  onTabChange?: (value: string) => void
}

interface TabsContentProps {
  className?: string
  value: string
  children: React.ReactNode
  activeTab?: string
}

const Tabs = ({ value, onValueChange, defaultValue, className = "", children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue || value || "")
  
  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue)
    if (onValueChange) onValueChange(newValue)
  }
  
  return (
    <div className={className}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { activeTab, onTabChange: handleTabChange })
          : child
      )}
    </div>
  )
}

const TabsList = ({ className = "", children, activeTab, onTabChange }: TabsListProps) => (
  <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}>
    {React.Children.map(children, child =>
      React.isValidElement(child)
        ? React.cloneElement(child as React.ReactElement<any>, { activeTab, onTabChange })
        : child
    )}
  </div>
)

const TabsTrigger = ({ className = "", value, children, activeTab, onTabChange }: TabsTriggerProps) => {
  const isActive = activeTab === value
  
  return (
    <button
      onClick={() => onTabChange && onTabChange(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive ? "bg-background text-foreground shadow-sm" : ""
      } ${className}`}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ className = "", value, children, activeTab }: TabsContentProps) => {
  if (activeTab !== value) return null
  
  return (
    <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}>
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
