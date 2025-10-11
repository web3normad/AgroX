import React from "react"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
}

const Progress = ({ className = "", value = 0, ...props }: ProgressProps) => (
  <div className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary ${className}`} {...props}>
    <div
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
)

export { Progress }
