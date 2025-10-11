"use client"

import React, { useState } from "react"

interface SelectProps {
  defaultValue?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean
  setOpen?: (open: boolean) => void
}

interface SelectValueProps {
  placeholder?: string
  value?: string
}

interface SelectContentProps {
  className?: string
  children: React.ReactNode
  open?: boolean
  onValueChange?: (value: string) => void
}

interface SelectItemProps {
  className?: string
  value: string
  children: React.ReactNode
  onValueChange?: (value: string) => void
}

const Select = ({ defaultValue, onValueChange, children }: SelectProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)
  
  const handleValueChange = (newValue: string) => {
    setValue(newValue)
    setOpen(false)
    if (onValueChange) onValueChange(newValue)
  }
  
  return (
    <div className="relative">
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as any, { open, setOpen, value, onValueChange: handleValueChange })
          : child
      )}
    </div>
  )
}

const SelectTrigger = ({ className = "", children, open, setOpen, ...props }: SelectTriggerProps) => (
  <button
    onClick={() => setOpen && setOpen(!open)}
    className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  >
    {children}
    <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
)

const SelectValue = ({ placeholder, value }: SelectValueProps) => (
  <span>{value || placeholder}</span>
)

const SelectContent = ({ className = "", children, open, onValueChange }: SelectContentProps) => {
  if (!open) return null
  
  return (
    <div className={`absolute z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md ${className}`}>
      <div className="p-1">
        {React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child as any, { onValueChange })
            : child
        )}
      </div>
    </div>
  )
}

const SelectItem = ({ className = "", value, children, onValueChange }: SelectItemProps) => (
  <div
    onClick={() => onValueChange && onValueChange(value)}
    className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
  >
    {children}
  </div>
)

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
