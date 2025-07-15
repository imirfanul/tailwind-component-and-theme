
import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface CustomTextFieldPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customClass?: string
  register?: any | object
  handleClickShowPassword?: React.MouseEventHandler<HTMLButtonElement> | undefined
  show?: boolean
  fullWidth?: boolean
  label?: string
  helperText?: React.ReactNode
  error?: boolean
}

const CustomTextFieldPassword = React.forwardRef<HTMLInputElement, CustomTextFieldPasswordProps>(
  ({
    name,
    id,
    fullWidth = true,
    handleClickShowPassword,
    show: externalShow,
    placeholder = "",
    customClass = "",
    register = null,
    label,
    helperText,
    error = false,
    className,
    ...rest
  }, ref) => {
    const [internalShow, setInternalShow] = useState(false)
    const show = externalShow !== undefined ? externalShow : internalShow

    const handleToggleVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if (handleClickShowPassword) {
        handleClickShowPassword(e)
      } else {
        setInternalShow(!internalShow)
      }
    }

    return (
      <div className={cn(fullWidth ? "w-full" : "", customClass)}>
        {label && (
          <Label 
            htmlFor={id} 
            className={cn(
              "text-input-label mb-2 block",
              error && "text-error"
            )}
          >
            {label}
          </Label>
        )}
        <div className="relative">
          <Input
            ref={ref}
            id={id}
            name={name}
            type={show ? "text" : "password"}
            placeholder={placeholder}
            className={cn(
              "h-10 pr-10",
              error && "border-error focus-visible:ring-error",
              className
            )}
            {...register}
            {...rest}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={handleToggleVisibility}
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
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

CustomTextFieldPassword.displayName = "CustomTextFieldPassword"

export default CustomTextFieldPassword
