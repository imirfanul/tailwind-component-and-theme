
import React from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface CustomSwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  labelPlacement?: "start" | "end" | "top" | "bottom"
  size?: "small" | "medium" | "large"
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "info"
  className?: string
  name?: string
  id?: string
  required?: boolean
  sx?: any // For compatibility, will be ignored
}

const CustomSwitch = React.forwardRef<HTMLButtonElement, CustomSwitchProps>(
  ({
    checked,
    onChange,
    onCheckedChange,
    disabled = false,
    label,
    labelPlacement = "end",
    size = "medium",
    color = "primary",
    className,
    name,
    id,
    required = false,
    sx, // Ignored for compatibility
    ...rest
  }, ref) => {
    const handleCheckedChange = (newChecked: boolean) => {
      if (onChange) onChange(newChecked)
      if (onCheckedChange) onCheckedChange(newChecked)
    }

    const getSizeClasses = () => {
      switch (size) {
        case "small":
          return "h-5 w-9"
        case "large":
          return "h-7 w-13"
        case "medium":
        default:
          return "h-6 w-11"
      }
    }

    const getColorClasses = () => {
      switch (color) {
        case "success":
          return "data-[state=checked]:bg-success"
        case "warning":
          return "data-[state=checked]:bg-warning"
        case "error":
          return "data-[state=checked]:bg-error"
        case "info":
          return "data-[state=checked]:bg-info"
        case "secondary":
          return "data-[state=checked]:bg-secondary"
        case "primary":
        default:
          return "data-[state=checked]:bg-primary"
      }
    }

    const switchElement = (
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
          className
        )}
        {...rest}
      />
    )

    if (!label) {
      return switchElement
    }

    const labelElement = (
      <Label 
        htmlFor={id}
        className={cn(
          "text-sm font-medium cursor-pointer",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        {label}
      </Label>
    )

    const getFlexDirection = () => {
      switch (labelPlacement) {
        case "start":
          return "flex-row-reverse justify-between"
        case "top":
          return "flex-col-reverse"
        case "bottom":
          return "flex-col"
        case "end":
        default:
          return "flex-row justify-between"
      }
    }

    return (
      <div className={cn("flex items-center gap-2", getFlexDirection())}>
        {labelElement}
        {switchElement}
      </div>
    )
  }
)

CustomSwitch.displayName = "CustomSwitch"

export default CustomSwitch
