import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface CustomTextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name?: string
  id?: string
  fullWidth?: boolean
  required?: boolean
  customClass?: string
  handleOnBlur?: React.FocusEventHandler<HTMLInputElement> | null
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | null
  register?: any | object
  label?: string
  helperText?: React.ReactNode
  error?: boolean
  inputProps?: {
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
  }
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning"
  size?: "small" | "medium" | "large"
  sx?: any // For compatibility, will be ignored
}

const CustomTextField = React.forwardRef<HTMLInputElement, CustomTextFieldProps>(
  ({
    name,
    id,
    fullWidth = true,
    required = false,
    customClass = "",
    handleOnBlur = null,
    handleChange = null,
    register = null,
    label,
    helperText,
    error = false,
    className,
    inputProps,
    color = "primary",
    size = "medium",
    sx, // Ignored for compatibility
    ...rest
  }, ref) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (
        register !== null &&
        register !== undefined &&
        register !== "" &&
        handleChange == null &&
        typeof register.onChange === "function"
      ) {
        register.onChange(e)
      } else if (
        (register == null || register === undefined || register === "") &&
        handleChange != null &&
        typeof handleChange === "function"
      ) {
        handleChange(e)
      }
    }

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

    const getColorClasses = () => {
      if (error) {
        return "border-error focus-visible:ring-error"
      }
      
      switch (color) {
        case "secondary":
          return "border-input focus-visible:ring-secondary"
        case "info":
          return "border-input focus-visible:ring-info"
        case "success":
          return "border-input focus-visible:ring-success"
        case "warning":
          return "border-input focus-visible:ring-warning"
        case "error":
          return "border-error focus-visible:ring-error"
        default:
          return "border-input focus-visible:ring-primary"
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
        <div className="relative">
          {inputProps?.startAdornment && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
              {inputProps.startAdornment}
            </div>
          )}
          <Input
            ref={ref}
            id={id}
            name={name}
            required={required}
            className={cn(
              getSizeClasses(),
              getColorClasses(),
              inputProps?.startAdornment && "pl-10",
              inputProps?.endAdornment && "pr-10",
              className
            )}
            {...register}
            {...rest}
            onChange={handleInputChange}
            onBlur={handleOnBlur || rest.onBlur}
          />
          {inputProps?.endAdornment && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
              {inputProps.endAdornment}
            </div>
          )}
        </div>
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
)

CustomTextField.displayName = "CustomTextField"

export default CustomTextField
