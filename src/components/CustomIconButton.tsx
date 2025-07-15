
import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface CustomIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleButton?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: "small" | "medium" | "large"
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning"
  customClass?: string
  sx?: any // For compatibility, will be ignored
}

const CustomIconButton = React.forwardRef<HTMLButtonElement, CustomIconButtonProps>(
  ({
    children,
    handleButton,
    size = "medium",
    color = "primary",
    customClass = "",
    className,
    onClick,
    sx, // Ignored for compatibility
    ...rest
  }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (handleButton) {
        handleButton(event)
      }
      if (onClick) {
        onClick(event)
      }
    }

    const getSizeClasses = () => {
      switch (size) {
        case "small":
          return "h-8 w-8"
        case "large":
          return "h-12 w-12"
        default:
          return "h-10 w-10"
      }
    }

    const getColorVariant = () => {
      switch (color) {
        case "secondary":
          return "secondary"
        case "error":
          return "error"
        case "info":
          return "info"
        case "success":
          return "success"
        case "warning":
          return "warning"
        default:
          return "primary"
      }
    }

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        onClick={handleClick}
        className={cn(
          getSizeClasses(),
          `hover:bg-${getColorVariant()}/10`,
          customClass,
          className
        )}
        {...rest}
      >
        {children}
      </Button>
    )
  }
)

CustomIconButton.displayName = "CustomIconButton"

export default CustomIconButton
