
# CustomIconButton

Icon-only button component for actions and controls.

## Import

```typescript
import CustomIconButton from '@/components/CustomIconButton'
```

## Basic Usage

```typescript
import { Heart } from 'lucide-react'

<CustomIconButton onClick={() => console.log('clicked')}>
  <Heart />
</CustomIconButton>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"ghost"` | Button style variant |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"icon"` | Button size |
| `color` | `"primary" \| "secondary" \| "error" \| "info" \| "success" \| "warning"` | `"primary"` | Color theme |
| `disabled` | `boolean` | `false` | Disable the button |
| `loading` | `boolean` | `false` | Show loading state |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Icon content |
| `onClick` | `(e: React.MouseEvent) => void` | - | Click handler |
| `ariaLabel` | `string` | - | Accessibility label |

## Examples

### Basic Icon Buttons
```typescript
import { Heart, Bookmark, Share, MoreVertical } from 'lucide-react'

<div className="flex space-x-2">
  <CustomIconButton ariaLabel="Like">
    <Heart />
  </CustomIconButton>
  
  <CustomIconButton ariaLabel="Bookmark">
    <Bookmark />
  </CustomIconButton>
  
  <CustomIconButton ariaLabel="Share">
    <Share />
  </CustomIconButton>
  
  <CustomIconButton ariaLabel="More options">
    <MoreVertical />
  </CustomIconButton>
</div>
```

### Different Variants
```typescript
import { Edit } from 'lucide-react'

<div className="flex space-x-2">
  <CustomIconButton variant="default" ariaLabel="Edit">
    <Edit />
  </CustomIconButton>
  
  <CustomIconButton variant="outline" ariaLabel="Edit">
    <Edit />
  </CustomIconButton>
  
  <CustomIconButton variant="ghost" ariaLabel="Edit">
    <Edit />
  </CustomIconButton>
  
  <CustomIconButton variant="secondary" ariaLabel="Edit">
    <Edit />
  </CustomIconButton>
</div>
```

### Different Sizes
```typescript
import { Settings } from 'lucide-react'

<div className="flex items-center space-x-2">
  <CustomIconButton size="sm" ariaLabel="Settings">
    <Settings />
  </CustomIconButton>
  
  <CustomIconButton size="default" ariaLabel="Settings">
    <Settings />
  </CustomIconButton>
  
  <CustomIconButton size="lg" ariaLabel="Settings">
    <Settings />
  </CustomIconButton>
</div>
```

### Color Variants
```typescript
import { Bell, AlertTriangle, CheckCircle, Info } from 'lucide-react'

<div className="flex space-x-2">
  <CustomIconButton color="primary" ariaLabel="Notifications">
    <Bell />
  </CustomIconButton>
  
  <CustomIconButton color="warning" ariaLabel="Warning">
    <AlertTriangle />
  </CustomIconButton>
  
  <CustomIconButton color="success" ariaLabel="Success">
    <CheckCircle />
  </CustomIconButton>
  
  <CustomIconButton color="info" ariaLabel="Information">
    <Info />
  </CustomIconButton>
</div>
```

### Interactive States
```typescript
import { Heart } from 'lucide-react'

const [liked, setLiked] = useState(false)
const [loading, setLoading] = useState(false)

const handleLike = async () => {
  setLoading(true)
  try {
    await toggleLike()
    setLiked(!liked)
  } finally {
    setLoading(false)
  }
}

<CustomIconButton
  onClick={handleLike}
  loading={loading}
  color={liked ? "error" : "secondary"}
  variant={liked ? "default" : "ghost"}
  ariaLabel={liked ? "Unlike" : "Like"}
>
  <Heart className={liked ? "fill-current" : ""} />
</CustomIconButton>
```

### In Card Actions
```typescript
import { MoreVertical, Edit, Trash, Share } from 'lucide-react'

function PostCard({ post }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">{post.title}</h3>
        <CustomIconButton ariaLabel="More options">
          <MoreVertical />
        </CustomIconButton>
      </div>
      
      <p className="text-muted-foreground mb-4">{post.content}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <CustomIconButton ariaLabel="Edit post" color="info">
            <Edit />
          </CustomIconButton>
          
          <CustomIconButton ariaLabel="Delete post" color="error">
            <Trash />
          </CustomIconButton>
        </div>
        
        <CustomIconButton ariaLabel="Share post" variant="outline">
          <Share />
        </CustomIconButton>
      </div>
    </div>
  )
}
```

### Toolbar Example
```typescript
import { 
  Bold, Italic, Underline, AlignLeft, 
  AlignCenter, AlignRight, List, ListOrdered 
} from 'lucide-react'

function TextEditor() {
  const [format, setFormat] = useState({
    bold: false,
    italic: false,
    underline: false,
    align: 'left'
  })
  
  return (
    <div className="border rounded-lg">
      <div className="flex items-center space-x-1 p-2 border-b">
        <CustomIconButton
          variant={format.bold ? "default" : "ghost"}
          ariaLabel="Bold"
          onClick={() => setFormat({...format, bold: !format.bold})}
        >
          <Bold />
        </CustomIconButton>
        
        <CustomIconButton
          variant={format.italic ? "default" : "ghost"}
          ariaLabel="Italic"
          onClick={() => setFormat({...format, italic: !format.italic})}
        >
          <Italic />
        </CustomIconButton>
        
        <CustomIconButton
          variant={format.underline ? "default" : "ghost"}
          ariaLabel="Underline"
          onClick={() => setFormat({...format, underline: !format.underline})}
        >
          <Underline />
        </CustomIconButton>
        
        <div className="w-px h-6 bg-border mx-2" />
        
        <CustomIconButton
          variant={format.align === 'left' ? "default" : "ghost"}
          ariaLabel="Align left"
          onClick={() => setFormat({...format, align: 'left'})}
        >
          <AlignLeft />
        </CustomIconButton>
        
        <CustomIconButton
          variant={format.align === 'center' ? "default" : "ghost"}
          ariaLabel="Align center"
          onClick={() => setFormat({...format, align: 'center'})}
        >
          <AlignCenter />
        </CustomIconButton>
        
        <CustomIconButton
          variant={format.align === 'right' ? "default" : "ghost"}
          ariaLabel="Align right"
          onClick={() => setFormat({...format, align: 'right'})}
        >
          <AlignRight />
        </CustomIconButton>
      </div>
      
      <textarea className="w-full h-40 p-4 resize-none outline-none" />
    </div>
  )
}
```

### With Tooltips
```typescript
import { Copy, Download, ExternalLink } from 'lucide-react'
import { CustomTooltip } from '@/components/CustomTooltip'

<div className="flex space-x-2">
  <CustomTooltip content="Copy to clipboard">
    <CustomIconButton ariaLabel="Copy">
      <Copy />
    </CustomIconButton>
  </CustomTooltip>
  
  <CustomTooltip content="Download file">
    <CustomIconButton ariaLabel="Download">
      <Download />
    </CustomIconButton>
  </CustomTooltip>
  
  <CustomTooltip content="Open in new tab">
    <CustomIconButton ariaLabel="Open external">
      <ExternalLink />
    </CustomIconButton>
  </CustomTooltip>
</div>
```
