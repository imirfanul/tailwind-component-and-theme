
import React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface SelectOption {
  id: string | number
  name: string
  value?: any
  disabled?: boolean
}

export interface CustomSelectProps {
  options?: SelectOption[]
  value?: string | number
  onChange?: (value: string | number) => void
  placeholder?: string
  label?: string
  fullWidth?: boolean
  disabled?: boolean
  error?: boolean
  helperText?: React.ReactNode
  required?: boolean
  size?: "small" | "medium" | "large"
  className?: string
  customClass?: string
  id?: string
  name?: string
  multiple?: boolean
  displayEmpty?: boolean
  renderValue?: (selected: any) => React.ReactNode
  sx?: any // For compatibility, will be ignored
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options = [],
  value,
  onChange,
  placeholder = "Select option...",
  label,
  fullWidth = true,
  disabled = false,
  error = false,
  helperText,
  required = false,
  size = "medium",
  className,
  customClass = "",
  id,
  name,
  multiple = false,
  displayEmpty = false,
  renderValue,
  sx, // Ignored for compatibility
  ...rest
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "h-8 text-xs"
      case "large":
        return "h-12 text-base"
      default:
        return "h-10 text-sm"
    }
  }

  const handleValueChange = (selectedValue: string) => {
    if (onChange) {
      const option = options.find(opt => opt.id.toString() === selectedValue)
      onChange(option ? option.id : selectedValue)
    }
  }

  return (
    <div className={cn(fullWidth ? "w-full" : "", customClass)}>
      {label && (
        <Label 
          htmlFor={id} 
          className={cn(
            "text-input-label mb-2 block",
            required && "after:content-['*'] after:ml-1 after:text-error",
            error && "text-error"
          )}
        >
          {label}
        </Label>
      )}
      <Select
        value={value?.toString()}
        onValueChange={handleValueChange}
        disabled={disabled}
        name={name}
      >
        <SelectTrigger
          className={cn(
            getSizeClasses(),
            error && "border-error focus-visible:ring-error",
            fullWidth && "w-full",
            className
          )}
          id={id}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.id}
              value={option.id.toString()}
              disabled={option.disabled}
            >
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {helperText && (
        <p className={cn(
          "text-helper-text mt-1 text-xs",
          error ? "text-error" : "text-muted-foreground"
        )}>
          {helperText}
        </p>
      )}
    </div>
  )
}

export default CustomSelect
