
import React from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface GlobalSwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  description?: string
  size?: "small" | "medium" | "large"
  color?: "primary" | "secondary" | "success" | "warning" | "error"
  className?: string
  labelClassName?: string
  name?: string
  id?: string
  required?: boolean
  error?: boolean
  helperText?: string
}

const GlobalSwitch = React.forwardRef<HTMLButtonElement, GlobalSwitchProps>(
  ({
    checked,
    onChange,
    onCheckedChange,
    disabled = false,
    label,
    description,
    size = "medium",
    color = "primary",
    className,
    labelClassName,
    name,
    id,
    required = false,
    error = false,
    helperText,
    ...rest
  }, ref) => {
    const handleCheckedChange = (newChecked: boolean) => {
      if (onChange) onChange(newChecked)
      if (onCheckedChange) onCheckedChange(newChecked)
    }

    const getSizeClasses = () => {
      switch (size) {
        case "small":
          return "h-5 w-9 data-[state=checked]:translate-x-4"
        case "large":
          return "h-7 w-13 data-[state=checked]:translate-x-6"
        case "medium":
        default:
          return "h-6 w-11 data-[state=checked]:translate-x-5"
      }
    }

    const getColorClasses = () => {
      if (error) {
        return "data-[state=checked]:bg-error"
      }
      
      switch (color) {
        case "success":
          return "data-[state=checked]:bg-success"
        case "warning":
          return "data-[state=checked]:bg-warning"
        case "error":
          return "data-[state=checked]:bg-error"
        case "secondary":
          return "data-[state=checked]:bg-secondary"
        case "primary":
        default:
          return "data-[state=checked]:bg-primary"
      }
    }

    return (
      <div className={cn("space-y-2", className)}>
        <div className="flex items-center justify-between">
          {label && (
            <div className="space-y-1">
              <Label 
                htmlFor={id}
                className={cn(
                  "text-sm font-medium cursor-pointer",
                  disabled && "cursor-not-allowed opacity-50",
                  error && "text-error",
                  labelClassName
                )}
              >
                {label}
                {required && <span className="text-error ml-1">*</span>}
              </Label>
              {description && (
                <p className={cn(
                  "text-xs text-muted-foreground",
                  disabled && "opacity-50",
                  error && "text-error"
                )}>
                  {description}
                </p>
              )}
            </div>
          )}
          
          <Switch
            ref={ref}
            checked={checked}
            onCheckedChange={handleCheckedChange}
            disabled={disabled}
            name={name}
            id={id}
            required={required}
            className={cn(
              getSizeClasses(),
              getColorClasses(),
              error && "border-error"
            )}
            {...rest}
          />
        </div>
        
        {helperText && (
          <p className={cn(
            "text-xs",
            error ? "text-error" : "text-muted-foreground"
          )}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

GlobalSwitch.displayName = "GlobalSwitch"

export default GlobalSwitch
