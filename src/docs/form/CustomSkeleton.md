
# CustomSkeleton

Loading skeleton component for creating placeholder content while data loads.

## Import

```typescript
import CustomSkeleton from '@/components/CustomSkeleton'
```

## Basic Usage

```typescript
<CustomSkeleton className="h-4 w-full" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes for styling |
| `width` | `string \| number` | - | Skeleton width |
| `height` | `string \| number` | - | Skeleton height |
| `variant` | `"text" \| "rectangular" \| "circular"` | `"rectangular"` | Skeleton shape |
| `animation` | `"pulse" \| "wave" \| "none"` | `"pulse"` | Animation type |
| `count` | `number` | `1` | Number of skeleton lines |

## Examples

### Basic Skeletons
```typescript
<div className="space-y-4">
  <CustomSkeleton className="h-4 w-full" />
  <CustomSkeleton className="h-4 w-3/4" />
  <CustomSkeleton className="h-4 w-1/2" />
</div>
```

### Different Variants
```typescript
<div className="space-y-4">
  <CustomSkeleton variant="text" className="h-4 w-full" />
  <CustomSkeleton variant="rectangular" className="h-32 w-full" />
  <CustomSkeleton variant="circular" className="h-12 w-12" />
</div>
```

### Card Loading State
```typescript
function CardSkeleton() {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div className="flex items-center space-x-4">
        <CustomSkeleton variant="circular" className="h-12 w-12" />
        <div className="space-y-2 flex-1">
          <CustomSkeleton className="h-4 w-1/3" />
          <CustomSkeleton className="h-3 w-1/2" />
        </div>
      </div>
      <CustomSkeleton className="h-32 w-full" />
      <div className="space-y-2">
        <CustomSkeleton className="h-4 w-full" />
        <CustomSkeleton className="h-4 w-3/4" />
        <CustomSkeleton className="h-4 w-1/2" />
      </div>
    </div>
  )
}
```

### List Loading State
```typescript
function ListSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4 p-4 border rounded">
          <CustomSkeleton variant="circular" className="h-10 w-10" />
          <div className="flex-1 space-y-2">
            <CustomSkeleton className="h-4 w-1/4" />
            <CustomSkeleton className="h-3 w-1/2" />
          </div>
          <CustomSkeleton className="h-8 w-20" />
        </div>
      ))}
    </div>
  )
}
```

### Table Loading State
```typescript
function TableSkeleton() {
  return (
    <div className="w-full">
      <div className="border rounded-lg">
        <div className="p-4 border-b bg-muted/50">
          <div className="grid grid-cols-4 gap-4">
            <CustomSkeleton className="h-4 w-20" />
            <CustomSkeleton className="h-4 w-24" />
            <CustomSkeleton className="h-4 w-16" />
            <CustomSkeleton className="h-4 w-20" />
          </div>
        </div>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="p-4 border-b last:border-b-0">
            <div className="grid grid-cols-4 gap-4">
              <CustomSkeleton className="h-4 w-full" />
              <CustomSkeleton className="h-4 w-full" />
              <CustomSkeleton className="h-4 w-full" />
              <CustomSkeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### Form Loading State
```typescript
function FormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <CustomSkeleton className="h-4 w-20" />
        <CustomSkeleton className="h-10 w-full" />
      </div>
      
      <div className="space-y-2">
        <CustomSkeleton className="h-4 w-16" />
        <CustomSkeleton className="h-10 w-full" />
      </div>
      
      <div className="space-y-2">
        <CustomSkeleton className="h-4 w-24" />
        <CustomSkeleton className="h-24 w-full" />
      </div>
      
      <CustomSkeleton className="h-10 w-full" />
    </div>
  )
}
```

### Profile Loading State
```typescript
function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-6">
        <CustomSkeleton variant="circular" className="h-24 w-24" />
        <div className="space-y-2">
          <CustomSkeleton className="h-6 w-48" />
          <CustomSkeleton className="h-4 w-32" />
          <CustomSkeleton className="h-4 w-40" />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="text-center space-y-2">
            <CustomSkeleton className="h-8 w-12 mx-auto" />
            <CustomSkeleton className="h-4 w-16 mx-auto" />
          </div>
        ))}
      </div>
      
      <div className="space-y-2">
        <CustomSkeleton className="h-4 w-full" />
        <CustomSkeleton className="h-4 w-5/6" />
        <CustomSkeleton className="h-4 w-4/6" />
        <CustomSkeleton className="h-4 w-3/6" />
      </div>
    </div>
  )
}
```

### Chat Loading State
```typescript
function ChatSkeleton() {
  return (
    <div className="space-y-4">
      {/* Incoming message */}
      <div className="flex items-start space-x-3">
        <CustomSkeleton variant="circular" className="h-8 w-8" />
        <div className="space-y-2">
          <CustomSkeleton className="h-10 w-48 rounded-2xl" />
          <CustomSkeleton className="h-3 w-16" />
        </div>
      </div>
      
      {/* Outgoing message */}
      <div className="flex items-start space-x-3 justify-end">
        <div className="space-y-2">
          <CustomSkeleton className="h-10 w-32 rounded-2xl ml-auto" />
          <CustomSkeleton className="h-3 w-12 ml-auto" />
        </div>
        <CustomSkeleton variant="circular" className="h-8 w-8" />
      </div>
      
      {/* Incoming message */}
      <div className="flex items-start space-x-3">
        <CustomSkeleton variant="circular" className="h-8 w-8" />
        <div className="space-y-2">
          <CustomSkeleton className="h-10 w-64 rounded-2xl" />
          <CustomSkeleton className="h-10 w-40 rounded-2xl" />
          <CustomSkeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  )
}
```

### Loading with Count
```typescript
function TextSkeleton({ lines = 3 }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <CustomSkeleton
          key={index}
          className={`h-4 ${
            index === lines - 1 
              ? 'w-3/4' 
              : index === lines - 2 
                ? 'w-5/6' 
                : 'w-full'
          }`}
        />
      ))}
    </div>
  )
}

// Usage
<TextSkeleton lines={5} />
```

### Conditional Loading
```typescript
function ContentWithLoading({ isLoading, data }) {
  if (isLoading) {
    return <CardSkeleton />
  }
  
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold">{data.title}</h3>
      <p className="text-muted-foreground">{data.description}</p>
    </div>
  )
}
```
