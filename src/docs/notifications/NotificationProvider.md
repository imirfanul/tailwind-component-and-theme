
# Notification System

A complete notification system with provider, stack, and individual notification components.

## Components Overview

- **NotificationProvider** - Context provider for notification system
- **NotificationStack** - Container that displays notifications
- **Notification** - Individual notification component

## Quick Setup

### 1. Wrap your app with NotificationProvider

```typescript
import { NotificationProvider } from '@/components/notifications/NotificationProvider'
import { NotificationStack } from '@/components/notifications/NotificationStack'

function App() {
  return (
    <NotificationProvider>
      <YourAppContent />
      <NotificationStack />
    </NotificationProvider>
  )
}
```

### 2. Use notifications in components

```typescript
import { useNotification } from '@/components/notifications/NotificationProvider'

function MyComponent() {
  const { addNotification } = useNotification()
  
  const showSuccess = () => {
    addNotification({
      type: 'success',
      title: 'Success!',
      message: 'Operation completed successfully'
    })
  }
  
  return (
    <CustomButton onClick={showSuccess}>
      Show Success
    </CustomButton>
  )
}
```

## NotificationProvider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | App content |
| `maxNotifications` | `number` | `5` | Maximum notifications shown |
| `defaultDuration` | `number` | `5000` | Default auto-dismiss time (ms) |
| `position` | `"top-right" \| "top-left" \| "bottom-right" \| "bottom-left"` | `"top-right"` | Stack position |

## Notification Interface

```typescript
interface NotificationData {
  id?: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
  persistent?: boolean
  action?: {
    label: string
    onClick: () => void
  }
}
```

## Hook Methods

### `addNotification(notification: NotificationData)`
Add a new notification to the stack.

### `removeNotification(id: string)`
Remove a specific notification by ID.

### `clearNotifications()`
Remove all notifications.

## Examples

### Basic Notifications
```typescript
const { addNotification } = useNotification()

// Success notification
addNotification({
  type: 'success',
  title: 'Saved!',
  message: 'Your changes have been saved successfully.'
})

// Error notification
addNotification({
  type: 'error',
  title: 'Error',
  message: 'Failed to save changes. Please try again.'
})

// Warning notification
addNotification({
  type: 'warning',
  title: 'Warning',
  message: 'This action cannot be undone.'
})

// Info notification
addNotification({
  type: 'info',
  title: 'Info',
  message: 'New update available.'
})
```

### Persistent Notification
```typescript
addNotification({
  type: 'error',
  title: 'Connection Lost',
  message: 'Please check your internet connection.',
  persistent: true // Won't auto-dismiss
})
```

### Notification with Action
```typescript
addNotification({
  type: 'info',
  title: 'New Message',
  message: 'You have a new message from John.',
  action: {
    label: 'View',
    onClick: () => {
      // Navigate to messages
      router.push('/messages')
    }
  }
})
```

### Custom Duration
```typescript
addNotification({
  type: 'success',
  title: 'Quick Message',
  message: 'This will disappear in 2 seconds.',
  duration: 2000
})
```

## Styling

The notification system uses Tailwind CSS and adapts to your theme:

- Success: Green color scheme
- Error: Red color scheme  
- Warning: Yellow/orange color scheme
- Info: Blue color scheme

Notifications support both light and dark themes automatically.
