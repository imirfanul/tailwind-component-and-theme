
import React from "react"
import { AlertTriangle } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface CustomConfirmationDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  message?: string | React.ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  variant?: "default" | "destructive"
  showIcon?: boolean
  loading?: boolean
  disabled?: boolean
  className?: string
}

const CustomConfirmationDialog: React.FC<CustomConfirmationDialogProps> = ({
  open,
  onOpenChange,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  variant = "default",
  showIcon = true,
  loading = false,
  disabled = false,
  className,
}) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm()
    }
    if (onOpenChange) {
      onOpenChange(false)
    }
  }

  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    }
    if (onOpenChange) {
      onOpenChange(false)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className={cn("max-w-md", className)}>
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            {showIcon && (
              <div className={cn(
                "rounded-full p-2",
                variant === "destructive" 
                  ? "bg-error/10 text-error" 
                  : "bg-warning/10 text-warning"
              )}>
                <AlertTriangle className="h-5 w-5" />
              </div>
            )}
            <AlertDialogTitle className="text-lg font-semibold">
              {title}
            </AlertDialogTitle>
          </div>
        </AlertDialogHeader>
        
        <AlertDialogDescription className="text-sm text-muted-foreground">
          {message}
        </AlertDialogDescription>

        <AlertDialogFooter className="flex gap-2">
          <AlertDialogCancel asChild>
            <Button 
              variant="outline" 
              onClick={handleCancel}
              disabled={loading}
            >
              {cancelText}
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant={variant === "destructive" ? "destructive" : "default"}
              onClick={handleConfirm}
              disabled={disabled || loading}
              className={loading ? "opacity-50 cursor-not-allowed" : ""}
            >
              {loading ? "Loading..." : confirmText}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CustomConfirmationDialog
