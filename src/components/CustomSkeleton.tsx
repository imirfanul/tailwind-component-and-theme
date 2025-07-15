
import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export interface CustomSkeletonProps {
  variant?: "text" | "rectangular" | "rounded" | "circular"
  width?: number | string
  height?: number | string
  className?: string
  animation?: "pulse" | "wave" | false
  sx?: any // For compatibility, will be ignored
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({
  variant = "rectangular",
  width,
  height,
  className,
  animation = "pulse",
  sx, // Ignored for compatibility
  ...rest
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "text":
        return "h-4 w-full"
      case "circular":
        return "rounded-full aspect-square"
      case "rounded":
        return "rounded-md"
      case "rectangular":
      default:
        return "rounded-sm"
    }
  }

  const getAnimationClasses = () => {
    if (animation === false) return ""
    return animation === "wave" ? "animate-pulse" : "animate-pulse"
  }

  const style: React.CSSProperties = {}
  if (width) style.width = typeof width === "number" ? `${width}px` : width
  if (height) style.height = typeof height === "number" ? `${height}px` : height

  return (
    <Skeleton
      className={cn(
        getVariantClasses(),
        getAnimationClasses(),
        className
      )}
      style={style}
      {...rest}
    />
  )
}

export default CustomSkeleton
