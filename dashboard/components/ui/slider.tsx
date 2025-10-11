"use client"

import React from "react"

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: number[]
  onValueChange?: (value: number[]) => void
  max?: number
  step?: number
}

const Slider = ({ className = "", value = [50], onValueChange, max = 100, step = 1, ...props }: SliderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [parseInt(e.target.value)]
    if (onValueChange) onValueChange(newValue)
  }
  
  return (
    <div className={`relative flex w-full touch-none select-none items-center ${className}`}>
      <input
        type="range"
        min="0"
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider-thumb"
        {...props}
      />
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
        }
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
}

export { Slider }
