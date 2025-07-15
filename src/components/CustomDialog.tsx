
import React from "react"
import { X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface CustomDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: React.ReactNode
  children?: React.ReactNode
  trigger?: React.ReactNode
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  fullWidth?: boolean
  fullScreen?: boolean
  disableEscapeKeyDown?: boolean
  disableBackdropClick?: boolean
  className?: string
  headerClassName?: string
  contentClassName?: string
  showCloseButton?: boolean
  onClose?: () => void
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onOpenChange,
  title,
  children,
  trigger,
  maxWidth = "md",
  fullWidth = false,
  fullScreen = false,
  disableEscapeKeyDown = false,
  disableBackdropClick = false,
  className,
  headerClassName,
  contentClassName,
  showCloseButton = true,
  onClose,
}) => {
  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case "xs":
        return "max-w-xs"
      case "sm":
        return "max-w-sm"
      case "md":
        return "max-w-md"
      case "lg":
        return "max-w-lg"
      case "xl":
        return "max-w-xl"
      case "2xl":
        return "max-w-2xl"
      default:
        return "max-w-md"
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && onClose) {
      onClose()
    }
    if (onOpenChange) {
      onOpenChange(newOpen)
    }
  }

  return (
    <Dialog 
      open={open} 
      onOpenChange={handleOpenChange}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className={cn(
          fullScreen 
            ? "h-screen w-screen max-w-none" 
            : cn(
                getMaxWidthClass(),
                fullWidth && "w-full"
              ),
          contentClassName,
          className
        )}
        onEscapeKeyDown={disableEscapeKeyDown ? (e) => e.preventDefault() : undefined}
        onInteractOutside={disableBackdropClick ? (e) => e.preventDefault() : undefined}
      >
        {(title || showCloseButton) && (
          <DialogHeader className={cn("flex flex-row items-center justify-between", headerClassName)}>
            {title && (
              <DialogTitle className="text-lg font-semibold">
                {title}
              </DialogTitle>
            )}
            {showCloseButton && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => handleOpenChange(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            )}
          </DialogHeader>
        )}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CustomDialog
