
import React from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface SwitchWithLabelProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  label: string
  description?: string
  labelPlacement?: "start" | "end"
  className?: string
  name?: string
  id?: string
  required?: boolean
}

const SwitchWithLabel = React.forwardRef<HTMLButtonElement, SwitchWithLabelProps>(
  ({
    checked,
    onChange,
    onCheckedChange,
    disabled = false,
    label,
    description,
    labelPlacement = "start",
    className,
    name,
    id,
    required = false,
    ...rest
  }, ref) => {
    const handleCheckedChange = (newChecked: boolean) => {
      if (onChange) onChange(newChecked)
      if (onCheckedChange) onCheckedChange(newChecked)
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
        {...rest}
      />
    )

    const labelContent = (
      <div className="space-y-1">
        <Label 
          htmlFor={id}
          className={cn(
            "text-sm font-medium cursor-pointer",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          {label}
        </Label>
        {description && (
          <p className={cn(
            "text-xs text-muted-foreground",
            disabled && "opacity-50"
          )}>
            {description}
          </p>
        )}
      </div>
    )

    return (
      <div className={cn(
        "flex items-center justify-between space-x-4",
        labelPlacement === "end" && "flex-row-reverse space-x-reverse",
        className
      )}>
        {labelContent}
        {switchElement}
      </div>
    )
  }
)

SwitchWithLabel.displayName = "SwitchWithLabel"

export default SwitchWithLabel
