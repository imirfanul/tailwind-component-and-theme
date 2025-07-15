
import React, { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface CustomDatePickerProps {
  value?: Date | null
  onChange?: (date: Date | null) => void
  placeholder?: string
  label?: string
  disabled?: boolean
  error?: boolean
  helperText?: React.ReactNode
  required?: boolean
  fullWidth?: boolean
  className?: string
  customClass?: string
  id?: string
  name?: string
  format?: string
  minDate?: Date
  maxDate?: Date
  disableFuture?: boolean
  disablePast?: boolean
  size?: "small" | "medium" | "large"
  sx?: any // For compatibility, will be ignored
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  placeholder = "Pick a date",
  label,
  disabled = false,
  error = false,
  helperText,
  required = false,
  fullWidth = true,
  className,
  customClass = "",
  id,
  name,
  format: dateFormat = "PPP",
  minDate,
  maxDate,
  disableFuture = false,
  disablePast = false,
  size = "medium",
  sx, // Ignored for compatibility
  ...rest
}) => {
  const [open, setOpen] = useState(false)

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

  const isDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (disableFuture && date > today) return true
    if (disablePast && date < today) return true
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    
    return false
  }

  const handleSelect = (selectedDate: Date | undefined) => {
    if (onChange) {
      onChange(selectedDate || null)
    }
    setOpen(false)
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
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "justify-start text-left font-normal",
              getSizeClasses(),
              fullWidth && "w-full",
              !value && "text-muted-foreground",
              error && "border-error focus-visible:ring-error",
              className
            )}
            disabled={disabled}
            id={id}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, dateFormat) : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value || undefined}
            onSelect={handleSelect}
            disabled={isDateDisabled}
            initialFocus
            className="p-3 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
      {helperText && (
        <p className={cn(
          "text-helper-text mt-1 text-xs",
          error ? "text-error" : "text-muted-foreground"
        )}>
          {helperText}
        </p>
      )}
      <input
        type="hidden"
        name={name}
        value={value ? format(value, "yyyy-MM-dd") : ""}
      />
    </div>
  )
}

export default CustomDatePicker
