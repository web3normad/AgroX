"use client"

import React, { createContext } from "react"
import { X } from "@phosphor-icons/react"

const ToastContext = createContext(null)

interface ToastProviderProps {
  children: React.ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <ToastContext.Provider value={{}}>
      {children}
    </ToastContext.Provider>
  )
}

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive"
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(({ className = "", variant = "default", children, ...props }, ref) => {
  const variants = {
    default: "bg-background border",
    destructive: "bg-destructive text-destructive-foreground border-destructive",
  }

  return (
    <div
      ref={ref}
      className={`pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})
Toast.displayName = "Toast"

export const ToastTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={`text-sm font-semibold ${className}`} {...props}>
    {children}
  </div>
))
ToastTitle.displayName = "ToastTitle"

export const ToastDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={`text-sm opacity-90 ${className}`} {...props}>
    {children}
  </div>
))
ToastDescription.displayName = "ToastDescription"

export const ToastClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className = "", ...props }, ref) => (
  <button
    ref={ref}
    className={`absolute right-2 top-2 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 ${className}`}
    {...props}
  >
    <X className="h-4 w-4" />
  </button>
))
ToastClose.displayName = "ToastClose"

export const ToastViewport = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] ${className}`}
    {...props}
  />
))
ToastViewport.displayName = "ToastViewport"
