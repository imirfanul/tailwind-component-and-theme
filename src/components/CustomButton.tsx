
import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  loading?: boolean
  loadingText?: string
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  customClass?: string
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning"
  sx?: any // For compatibility, will be ignored
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({
    children,
    variant = "default",
    size = "default",
    loading = false,
    loadingText,
    fullWidth = false,
    startIcon,
    endIcon,
    customClass = "",
    color = "primary",
    className,
    disabled,
    sx, // Ignored for compatibility
    ...rest
  }, ref) => {
    const getColorVariant = () => {
      switch (color) {
        case "error":
          return "destructive"
        case "secondary":
          return "secondary"
        case "success":
        case "info":
        case "warning":
          return "outline"
        default:
          return variant
      }
    }

    const getColorClasses = () => {
      if (variant !== "default") return ""
      
      switch (color) {
        case "success":
          return "bg-success hover:bg-success/90 text-success-foreground"
        case "info":
          return "bg-info hover:bg-info/90 text-info-foreground"
        case "warning":
          return "bg-warning hover:bg-warning/90 text-warning-foreground"
        default:
          return ""
      }
    }

    return (
      <Button
        ref={ref}
        variant={getColorVariant()}
        size={size}
        className={cn(
          fullWidth && "w-full",
          getColorClasses(),
          customClass,
          className
        )}
        disabled={disabled || loading}
        {...rest}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!loading && startIcon && <span className="mr-2">{startIcon}</span>}
        {loading ? (loadingText || "Loading...") : children}
        {!loading && endIcon && <span className="ml-2">{endIcon}</span>}
      </Button>
    )
  }
)

CustomButton.displayName = "CustomButton"

export default CustomButton
