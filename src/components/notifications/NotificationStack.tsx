
import React, { useCallback, useEffect, useState } from "react"
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NotificationProps, useNotification } from "./NotificationProvider"

type NotificationStackProps = {
  notification: NotificationProps
}

const TIMEOUT = 300

const NotificationStack: React.FC<NotificationStackProps> = ({ notification }) => {
  const [open, setOpen] = useState(true)
  const { removeNotification } = useNotification()

  const close = useCallback(() => {
    setOpen(false)
    setTimeout(() => {
      removeNotification(notification.key)
    }, TIMEOUT)
  }, [notification.key, removeNotification])

  const handleClose = (event: React.MouseEvent) => {
    event.preventDefault()
    if (notification?.onClose) {
      notification.onClose()
    }
    close()
  }

  useEffect(() => {
    if (notification.duration !== 0) {
      const timer = setTimeout(() => {
        close()
      }, notification.duration || 6000)
      
      return () => clearTimeout(timer)
    }
  }, [close, notification.duration])

  const getIcon = () => {
    switch (notification.type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-success" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-error" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />
      case "info":
        return <Info className="h-5 w-5 text-info" />
      default:
        return <Info className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getVariantClasses = () => {
    switch (notification.type) {
      case "success":
        return "border-success bg-success/10 text-success-foreground"
      case "error":
        return "border-error bg-error/10 text-error-foreground"
      case "warning":
        return "border-warning bg-warning/10 text-warning-foreground"
      case "info":
        return "border-info bg-info/10 text-info-foreground"
      default:
        return "border-border bg-background text-foreground"
    }
  }

  return (
    <div
      className={cn(
        "relative flex w-full max-w-sm items-start gap-3 rounded-lg border p-4 shadow-lg transition-all duration-300",
        getVariantClasses(),
        open ? "animate-fade-in opacity-100 scale-100" : "animate-fade-out opacity-0 scale-95"
      )}
    >
      <div className="flex-shrink-0 mt-0.5">
        {getIcon()}
      </div>
      <div className="flex-1 space-y-1">
        {notification.title && (
          <div className="font-medium text-sm">
            {notification.title}
          </div>
        )}
        {notification.message && (
          <div className="text-sm opacity-90">
            {notification.message}
          </div>
        )}
        {notification.children}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="h-6 w-6 p-0 hover:bg-black/10"
        onClick={handleClose}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Button>
    </div>
  )
}

export default NotificationStack
