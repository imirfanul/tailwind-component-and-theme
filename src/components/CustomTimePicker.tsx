
import React, { useState } from "react"
import { Clock } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface CustomTimePickerProps {
  label?: string | null
  register?: any | null
  value?: Date | null
  onChange?: (value: Date | null) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  name?: string
  id?: string
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  label = null,
  register = null,
  value: externalValue,
  onChange,
  placeholder = "Select time",
  disabled = false,
  className,
  name,
  id,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState<Date | null>(externalValue || null)
  const [timeInput, setTimeInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const value = externalValue !== undefined ? externalValue : internalValue
  const setValue = onChange || setInternalValue

  const handleTimeChange = (timeString: string) => {
    if (!timeString) {
      setValue(null)
      setTimeInput("")
      return
    }

    const [hours, minutes] = timeString.split(':').map(Number)
    if (isNaN(hours) || isNaN(minutes) || hours > 23 || minutes > 59) {
      return
    }

    const newDate = new Date()
    newDate.setHours(hours, minutes, 0, 0)
    setValue(newDate)
    setTimeInput(timeString)
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setTimeInput(inputValue)
    
    // Try to parse time as user types
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/
    if (timeRegex.test(inputValue)) {
      handleTimeChange(inputValue)
    }
  }

  const generateTimeOptions = () => {
    const times = []
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        times.push(timeString)
      }
    }
    return times
  }

  return (
    <div className="space-y-2">
      {label && (
        <Label htmlFor={id} className="text-sm font-medium">
          {label}
        </Label>
      )}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !value && "text-muted-foreground",
              disabled && "opacity-50 cursor-not-allowed",
              className
            )}
            disabled={disabled}
            id={id}
            {...register}
            {...rest}
          >
            <Clock className="mr-2 h-4 w-4" />
            {value ? format(value, "HH:mm") : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3 space-y-3">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Enter time</Label>
              <Input
                type="time"
                value={timeInput}
                onChange={handleInputChange}
                className="w-full"
                placeholder="HH:MM"
              />
            </div>
            <div className="max-h-60 overflow-y-auto space-y-1">
              <Label className="text-sm font-medium">Quick select</Label>
              <div className="grid grid-cols-2 gap-1">
                {generateTimeOptions().slice(0, 20).map((time) => (
                  <Button
                    key={time}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleTimeChange(time)}
                    className="justify-start text-sm"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <input
        type="hidden"
        name={name}
        value={value ? format(value, "HH:mm") : ""}
      />
    </div>
  )
}

export default CustomTimePicker
