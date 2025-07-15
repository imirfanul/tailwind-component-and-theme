
# CustomButton

Enhanced button component with loading states, icons, and multiple variants.

## Import

```typescript
import CustomButton from '@/components/CustomButton'
```

## Basic Usage

```typescript
<CustomButton variant="primary" onClick={() => console.log('clicked')}>
  Click Me
</CustomButton>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Button style variant |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Button size |
| `color` | `"primary" \| "secondary" \| "error" \| "info" \| "success" \| "warning"` | `"primary"` | Color theme |
| `loading` | `boolean` | `false` | Show loading state |
| `loadingText` | `string` | - | Text to show when loading |
| `fullWidth` | `boolean` | `false` | Take full width of container |
| `startIcon` | `React.ReactNode` | - | Icon at start of button |
| `endIcon` | `React.ReactNode` | - | Icon at end of button |
| `disabled` | `boolean` | `false` | Disable the button |
| `className` | `string` | - | Additional CSS classes |
| `customClass` | `string` | - | Legacy custom classes |
| `children` | `React.ReactNode` | - | Button content |
| `onClick` | `(e: React.MouseEvent) => void` | - | Click handler |

## Examples

### Basic Variants
```typescript
<div className="space-x-2">
  <CustomButton variant="default">Default</CustomButton>
  <CustomButton variant="destructive">Destructive</CustomButton>
  <CustomButton variant="outline">Outline</CustomButton>
  <CustomButton variant="secondary">Secondary</CustomButton>
  <CustomButton variant="ghost">Ghost</CustomButton>
  <CustomButton variant="link">Link</CustomButton>
</div>
```

### Color Variants
```typescript
<div className="space-x-2">
  <CustomButton color="primary">Primary</CustomButton>
  <CustomButton color="secondary">Secondary</CustomButton>
  <CustomButton color="success">Success</CustomButton>
  <CustomButton color="warning">Warning</CustomButton>
  <CustomButton color="error">Error</CustomButton>
  <CustomButton color="info">Info</CustomButton>
</div>
```

### With Icons
```typescript
import { Plus, Download, Send } from 'lucide-react'

<div className="space-x-2">
  <CustomButton startIcon={<Plus />}>
    Add Item
  </CustomButton>
  <CustomButton endIcon={<Download />}>
    Download
  </CustomButton>
  <CustomButton startIcon={<Send />} endIcon={<Plus />}>
    Send & Add
  </CustomButton>
</div>
```

### Loading States
```typescript
const [loading, setLoading] = useState(false)

<div className="space-x-2">
  <CustomButton 
    loading={loading}
    onClick={() => setLoading(!loading)}
  >
    Toggle Loading
  </CustomButton>
  
  <CustomButton 
    loading={true}
    loadingText="Saving..."
  >
    Save Changes
  </CustomButton>
</div>
```

### Sizes
```typescript
<div className="space-x-2">
  <CustomButton size="sm">Small</CustomButton>
  <CustomButton size="default">Default</CustomButton>
  <CustomButton size="lg">Large</CustomButton>
  <CustomButton size="icon">
    <Plus />
  </CustomButton>
</div>
```

### Full Width
```typescript
<CustomButton fullWidth variant="primary">
  Full Width Button
</CustomButton>
```
