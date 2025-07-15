import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Contained variants (filled background)
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-sm",
        warning: "bg-warning text-warning-foreground hover:bg-warning-hover shadow-sm",
        success: "bg-success text-success-foreground hover:bg-success-hover shadow-sm",
        error: "bg-error text-error-foreground hover:bg-error-hover shadow-sm",
        info: "bg-info text-info-foreground hover:bg-info-hover shadow-sm",
        accent: "bg-accent text-accent-foreground hover:bg-accent-hover shadow-sm",
        
        // Outlined variants
        "primary-outline": "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        "secondary-outline": "border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        "warning-outline": "border border-warning text-warning hover:bg-warning hover:text-warning-foreground",
        "success-outline": "border border-success text-success hover:bg-success hover:text-success-foreground",
        "error-outline": "border border-error text-error hover:bg-error hover:text-error-foreground",
        "info-outline": "border border-info text-info hover:bg-info hover:text-info-foreground",
        "accent-outline": "border border-accent text-accent hover:bg-accent hover:text-accent-foreground",
        
        // Text variants (no background)
        "primary-text": "text-primary hover:bg-primary/10",
        "secondary-text": "text-secondary hover:bg-secondary/10",
        "warning-text": "text-warning hover:bg-warning/10",
        "success-text": "text-success hover:bg-success/10",
        "error-text": "text-error hover:bg-error/10",
        "info-text": "text-info hover:bg-info/10",
        "accent-text": "text-accent hover:bg-accent/10",
        
        // Legacy variants for compatibility
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
        destructive: "bg-error text-error-foreground hover:bg-error-hover shadow-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        small: "h-8 px-3 text-xs",
        medium: "h-10 px-4 py-2",
        large: "h-12 px-6 text-base",
        icon: "h-10 w-10",
        "icon-small": "h-8 w-8",
        "icon-large": "h-12 w-12",
        // Legacy sizes for compatibility
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth, 
    asChild = false, 
    loading = false,
    startIcon,
    endIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const isDisabled = disabled || loading
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" />}
        {!loading && startIcon && startIcon}
        {children}
        {!loading && endIcon && endIcon}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
