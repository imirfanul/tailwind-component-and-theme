
import React, { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"

export interface AutoCompleteOption {
  id: string | number
  name: string
  value?: any
}

export interface CustomAutoCompleteProps {
  options?: AutoCompleteOption[]
  value?: AutoCompleteOption | null
  onChange?: (value: AutoCompleteOption | null) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  label?: string
  fullWidth?: boolean
  disabled?: boolean
  error?: boolean
  helperText?: React.ReactNode
  required?: boolean
  loading?: boolean
  multiple?: boolean
  size?: "small" | "medium" | "large"
  className?: string
  customClass?: string
  id?: string
  name?: string
  renderOption?: (option: AutoCompleteOption) => React.ReactNode
  getOptionLabel?: (option: AutoCompleteOption) => string
  onInputChange?: (value: string) => void
  freeSolo?: boolean
  disableClearable?: boolean
  sx?: any // For compatibility, will be ignored
}

const CustomAutoComplete: React.FC<CustomAutoCompleteProps> = ({
  options = [],
  value,
  onChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  emptyText = "No options found",
  label,
  fullWidth = true,
  disabled = false,
  error = false,
  helperText,
  required = false,
  loading = false,
  multiple = false,
  size = "medium",
  className,
  customClass = "",
  id,
  name,
  renderOption,
  getOptionLabel = (option) => option.name,
  onInputChange,
  freeSolo = false,
  disableClearable = false,
  sx, // Ignored for compatibility
  ...rest
}) => {
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

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

  const handleSelect = (selectedOption: AutoCompleteOption) => {
    if (onChange) {
      onChange(selectedOption)
    }
    setOpen(false)
  }

  const handleSearchChange = (search: string) => {
    setSearchValue(search)
    if (onInputChange) {
      onInputChange(search)
    }
  }

  const filteredOptions = options.filter(option =>
    getOptionLabel(option).toLowerCase().includes(searchValue.toLowerCase())
  )

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
            role="combobox"
            aria-expanded={open}
            className={cn(
              "justify-between",
              getSizeClasses(),
              fullWidth && "w-full",
              error && "border-error focus-visible:ring-error",
              !value && "text-muted-foreground",
              className
            )}
            disabled={disabled}
            id={id}
          >
            {value ? getOptionLabel(value) : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput 
              placeholder={searchPlaceholder}
              value={searchValue}
              onValueChange={handleSearchChange}
            />
            <CommandList>
              <CommandEmpty>{loading ? "Loading..." : emptyText}</CommandEmpty>
              <CommandGroup>
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={option.id}
                    value={option.id.toString()}
                    onSelect={() => handleSelect(option)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value?.id === option.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {renderOption ? renderOption(option) : getOptionLabel(option)}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
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
        value={value?.id || ""}
      />
    </div>
  )
}

export default CustomAutoComplete
