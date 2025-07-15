
# CustomTooltip

Tooltip component for providing additional context and information on hover.

## Import

```typescript
import CustomTooltip from '@/components/CustomTooltip'
```

## Basic Usage

```typescript
<CustomTooltip content="This is a helpful tooltip">
  <button>Hover me</button>
</CustomTooltip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `React.ReactNode` | - | Tooltip content |
| `children` | `React.ReactNode` | - | Element that triggers tooltip |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` | Tooltip position |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Tooltip alignment |
| `delay` | `number` | `200` | Show delay in milliseconds |
| `disabled` | `boolean` | `false` | Disable the tooltip |
| `className` | `string` | - | Additional CSS classes |
| `sideOffset` | `number` | `4` | Distance from trigger |
| `maxWidth` | `string` | `"300px"` | Maximum tooltip width |

## Examples

### Basic Tooltips
```typescript
<div className="flex space-x-4">
  <CustomTooltip content="Save your work">
    <CustomButton>Save</CustomButton>
  </CustomTooltip>
  
  <CustomTooltip content="Delete this item permanently">
    <CustomButton variant="destructive">Delete</CustomButton>
  </CustomTooltip>
  
  <CustomTooltip content="Share with others">
    <CustomIconButton ariaLabel="Share">
      <Share />
    </CustomIconButton>
  </CustomTooltip>
</div>
```

### Different Positions
```typescript
<div className="grid grid-cols-2 gap-8 p-8">
  <CustomTooltip content="Tooltip on top" side="top">
    <CustomButton>Top</CustomButton>
  </CustomTooltip>
  
  <CustomTooltip content="Tooltip on right" side="right">
    <CustomButton>Right</CustomButton>
  </CustomTooltip>
  
  <CustomTooltip content="Tooltip on bottom" side="bottom">
    <CustomButton>Bottom</CustomButton>
  </CustomTooltip>
  
  <CustomTooltip content="Tooltip on left" side="left">
    <CustomButton>Left</CustomButton>
  </CustomTooltip>
</div>
```

### Rich Content Tooltips
```typescript
<div className="space-x-4">
  <CustomTooltip
    content={
      <div className="space-y-2">
        <div className="font-semibold">Pro Tip</div>
        <div className="text-sm">Use Ctrl+S to save quickly</div>
      </div>
    }
  >
    <CustomButton>Rich Tooltip</CustomButton>
  </CustomTooltip>
  
  <CustomTooltip
    content={
      <div className="space-y-1">
        <div className="font-medium">Status: Online</div>
        <div className="text-xs text-muted-foreground">Last seen: 2 minutes ago</div>
      </div>
    }
  >
    <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer" />
  </CustomTooltip>
</div>
```

### Form Field Helpers
```typescript
function FormWithTooltips() {
  return (
    <form className="space-y-4">
      <div className="flex items-center space-x-2">
        <CustomTextField
          label="Password"
          type="password"
          required
        />
        <CustomTooltip
          content="Password must be at least 8 characters with uppercase, lowercase, and numbers"
          maxWidth="250px"
        >
          <Info className="h-4 w-4 text-muted-foreground cursor-help" />
        </CustomTooltip>
      </div>
      
      <div className="flex items-center space-x-2">
        <CustomTextField
          label="API Key"
          type="password"
          required
        />
        <CustomTooltip content="You can find your API key in the dashboard settings">
          <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
        </CustomTooltip>
      </div>
    </form>
  )
}
```

### Icon Tooltips
```typescript
import { 
  Heart, Bookmark, Share, MessageCircle, 
  Repeat, MoreHorizontal, Settings, Bell 
} from 'lucide-react'

function SocialActions() {
  return (
    <div className="flex items-center space-x-2">
      <CustomTooltip content="Like this post">
        <CustomIconButton ariaLabel="Like">
          <Heart />
        </CustomIconButton>
      </CustomTooltip>
      
      <CustomTooltip content="Save to bookmarks">
        <CustomIconButton ariaLabel="Bookmark">
          <Bookmark />
        </CustomIconButton>
      </CustomTooltip>
      
      <CustomTooltip content="Share this post">
        <CustomIconButton ariaLabel="Share">
          <Share />
        </CustomIconButton>
      </CustomTooltip>
      
      <CustomTooltip content="Reply to this post">
        <CustomIconButton ariaLabel="Reply">
          <MessageCircle />
        </CustomIconButton>
      </CustomTooltip>
      
      <CustomTooltip content="Repost">
        <CustomIconButton ariaLabel="Repost">
          <Repeat />
        </CustomIconButton>
      </CustomTooltip>
      
      <CustomTooltip content="More options">
        <CustomIconButton ariaLabel="More">
          <MoreHorizontal />
        </CustomIconButton>
      </CustomTooltip>
    </div>
  )
}
```

### Conditional Tooltips
```typescript
function ConditionalTooltipExample() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [hasError, setHasError] = useState(false)
  
  return (
    <div className="space-y-4">
      <CustomTooltip
        content={isDisabled ? "Complete the form to enable this button" : "Submit your form"}
        disabled={!isDisabled}
      >
        <CustomButton disabled={isDisabled}>
          Submit
        </CustomButton>
      </CustomTooltip>
      
      <CustomTooltip
        content={hasError ? "There are validation errors" : "Form is valid"}
        side="right"
      >
        <div className={`w-4 h-4 rounded-full ${hasError ? 'bg-red-500' : 'bg-green-500'}`} />
      </CustomTooltip>
    </div>
  )
}
```

### Tooltip Delays
```typescript
<div className="space-x-4">
  <CustomTooltip content="Instant tooltip" delay={0}>
    <CustomButton>No Delay</CustomButton>
  </CustomTooltip>
  
  <CustomTooltip content="Quick tooltip" delay={100}>
    <CustomButton>Quick</CustomButton>
  </CustomTooltip>
  
  <CustomTooltip content="Normal tooltip" delay={200}>
    <CustomButton>Normal</CustomButton>
  </CustomTooltip>
  
  <CustomTooltip content="Slow tooltip" delay={500}>
    <CustomButton>Slow</CustomButton>
  </CustomTooltip>
</div>
```

### Data Display Tooltips
```typescript
function DataTable() {
  const data = [
    { name: "John Doe", status: "active", lastSeen: "2 hours ago" },
    { name: "Jane Smith", status: "inactive", lastSeen: "1 day ago" }
  ]
  
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>
              <CustomTooltip content={`Last seen: ${user.lastSeen}`}>
                <span className={`inline-block w-2 h-2 rounded-full ${
                  user.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                }`} />
              </CustomTooltip>
            </td>
            <td>
              <div className="flex space-x-1">
                <CustomTooltip content="Edit user">
                  <CustomIconButton size="sm" ariaLabel="Edit">
                    <Edit />
                  </CustomIconButton>
                </CustomTooltip>
                
                <CustomTooltip content="Delete user">
                  <CustomIconButton size="sm" ariaLabel="Delete" color="error">
                    <Trash />
                  </CustomIconButton>
                </CustomTooltip>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
```
