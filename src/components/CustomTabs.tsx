
import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export interface TabData {
  label: string
  value: string
  content?: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
}

export interface CustomTabsProps {
  tabs: TabData[]
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "pills" | "underline"
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  centered?: boolean
  className?: string
  tabsListClassName?: string
  tabsTriggerClassName?: string
  tabsContentClassName?: string
  sx?: any // For compatibility, will be ignored
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  defaultValue,
  value,
  onValueChange,
  orientation = "horizontal",
  variant = "default",
  size = "medium",
  fullWidth = false,
  centered = false,
  className,
  tabsListClassName,
  tabsTriggerClassName,
  tabsContentClassName,
  sx, // Ignored for compatibility
  ...rest
}) => {
  const getTabsListClasses = () => {
    let classes = ""
    
    if (orientation === "vertical") {
      classes += " flex-col h-auto w-auto"
    }
    
    if (fullWidth) {
      classes += " w-full"
    }
    
    if (centered && orientation === "horizontal") {
      classes += " justify-center"
    }
    
    switch (variant) {
      case "pills":
        classes += " bg-muted p-1 rounded-lg"
        break
      case "underline":
        classes += " bg-transparent border-b"
        break
      case "default":
      default:
        break
    }
    
    return classes
  }

  const getTabsTriggerClasses = () => {
    let classes = ""
    
    switch (size) {
      case "small":
        classes += " text-sm px-3 py-1.5"
        break
      case "large":
        classes += " text-base px-6 py-3"
        break
      case "medium":
      default:
        classes += " text-sm px-4 py-2"
        break
    }
    
    if (fullWidth) {
      classes += " flex-1"
    }
    
    switch (variant) {
      case "pills":
        classes += " rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
        break
      case "underline":
        classes += " border-b-2 border-transparent data-[state=active]:border-primary rounded-none bg-transparent"
        break
      case "default":
      default:
        break
    }
    
    return classes
  }

  return (
    <Tabs
      defaultValue={defaultValue || tabs[0]?.value}
      value={value}
      onValueChange={onValueChange}
      orientation={orientation}
      className={cn("w-full", className)}
      {...rest}
    >
      <TabsList className={cn(getTabsListClasses(), tabsListClassName)}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
            className={cn(
              getTabsTriggerClasses(),
              "flex items-center gap-2",
              tabsTriggerClassName
            )}
          >
            {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className={cn("mt-4", tabsContentClassName)}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default CustomTabs
