
import React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export interface CustomTooltipProps {
  title: NonNullable<React.ReactNode> | string
  placement?: "bottom" | "left" | "right" | "top"
  children: React.ReactElement
  className?: string
  delayDuration?: number
  skipDelayDuration?: number
  disableHoverableContent?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  children,
  title,
  placement = "top",
  className,
  delayDuration = 700,
  skipDelayDuration = 300,
  disableHoverableContent = false,
  open,
  onOpenChange,
  ...rest
}) => {
  return (
    <TooltipProvider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <Tooltip open={open} onOpenChange={onOpenChange} {...rest}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={placement} className={className}>
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CustomTooltip
