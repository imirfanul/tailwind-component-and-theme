
import React, { useState, useContext, createContext } from "react"

export type NotificationProps = {
  key?: number
  title?: string
  message?: string
  children?: React.ReactElement
  duration?: number
  type?: "success" | "warning" | "info" | "error" | "default"
  variant?: "default" | "destructive"
  position?: {
    vertical?: "top" | "bottom"
    horizontal?: "left" | "right" | "center"
  }
  onClose?: () => void
}

export type NotificationContextProps = {
  notificationPack: NotificationProps[]
  setNotificationPack: (toasts: NotificationProps[]) => void
  addNotification: (toast: NotificationProps) => void
  removeNotification: (key: NotificationProps["key"]) => void
}

const NotificationContext = createContext<NotificationContextProps>({
  notificationPack: [],
  setNotificationPack: (toasts) => {
    console.log(toasts)
  },
  addNotification: (toast) => {
    console.log(toast)
  },
  removeNotification: (key) => {
    console.log(key)
  }
})

const NotificationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [notificationPack, setNotificationPack] = useState<NotificationProps[]>([])

  const addNotification = (toast: NotificationProps) => {
    const key = toast.key || Date.now()

    if (notificationPack.find((toast) => toast.key === key)) {
      return
    }
    const rest = notificationPack.length < 3 ? notificationPack : notificationPack.slice(0, -1)
    setNotificationPack([{ ...toast, key }, ...rest])
  }

  const removeNotification = (key: NotificationProps["key"]) => {
    setNotificationPack((prev) => prev.filter((toast) => toast.key !== key))
  }

  return (
    <NotificationContext.Provider
      value={{
        notificationPack,
        setNotificationPack,
        addNotification,
        removeNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)

export default NotificationProvider
