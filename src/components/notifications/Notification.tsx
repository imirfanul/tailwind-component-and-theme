
import React from "react"
import { cn } from "@/lib/utils"
import { useNotification } from "./NotificationProvider"
import NotificationStack from "./NotificationStack"

const Notification: React.FC = () => {
  const { notificationPack } = useNotification()

  const firstToast = notificationPack[0]

  if (!firstToast || notificationPack.length === 0) {
    return null
  }

  const getPositionClasses = () => {
    const vertical = firstToast?.position?.vertical || "bottom"
    const horizontal = firstToast?.position?.horizontal || "right"
    
    let classes = "fixed z-50 flex flex-col gap-4 max-w-sm w-full pointer-events-none"
    
    // Vertical positioning
    if (vertical === "top") {
      classes += " top-4"
    } else {
      classes += " bottom-4"
    }
    
    // Horizontal positioning
    if (horizontal === "left") {
      classes += " left-4"
    } else if (horizontal === "center") {
      classes += " left-1/2 -translate-x-1/2"
    } else {
      classes += " right-4"
    }
    
    return classes
  }

  return (
    <div className={getPositionClasses()}>
      {notificationPack.map((notification) => (
        <div key={notification.key} className="pointer-events-auto">
          <NotificationStack notification={notification} />
        </div>
      ))}
    </div>
  )
}

export default Notification
