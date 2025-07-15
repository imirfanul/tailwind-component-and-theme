
import React from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface CustomLoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  loadingText?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  customClass?: string
  loadingPosition?: "start" | "end" | "center"
  sx?: any // For compatibility, will be ignored
}

const CustomLoadingButton = React.forwardRef<HTMLButtonElement, CustomLoadingButtonProps>(
  ({
    children,
    loading = false,
    loadingText,
    variant = "default",
    size = "default",
    fullWidth = false,
    startIcon,
    endIcon,
    customClass = "",
    loadingPosition = "start",
    className,
    disabled,
    sx, // Ignored for compatibility
    ...rest
  }, ref) => {
    const renderLoadingIcon = () => <Loader2 className="h-4 w-4 animate-spin" />

    const renderContent = () => {
      if (loading) {
        if (loadingPosition === "center") {
          return (
            <>
              {renderLoadingIcon()}
              {loadingText && <span className="ml-2">{loadingText}</span>}
            </>
          )
        }
        
        return (
          <>
            {loadingPosition === "start" && (
              <span className="mr-2">{renderLoadingIcon()}</span>
            )}
            {loadingText || children}
            {loadingPosition === "end" && (
              <span className="ml-2">{renderLoadingIcon()}</span>
            )}
          </>
        )
      }

      return (
        <>
          {startIcon && <span className="mr-2">{startIcon}</span>}
          {children}
          {endIcon && <span className="ml-2">{endIcon}</span>}
        </>
      )
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          fullWidth && "w-full",
          customClass,
          className
        )}
        disabled={disabled || loading}
        {...rest}
      >
        {renderContent()}
      </Button>
    )
  }
)

CustomLoadingButton.displayName = "CustomLoadingButton"

export default CustomLoadingButton
