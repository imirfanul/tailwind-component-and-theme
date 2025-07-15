
# GlobalSwitch

Advanced switch component with multiple options and global state management.

## Import

```typescript
import GlobalSwitch from '@/components/GlobalSwitch'
```

## Basic Usage

```typescript
const options = [
  { value: "off", label: "Off" },
  { value: "on", label: "On" },
  { value: "auto", label: "Auto" }
]

<GlobalSwitch
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SwitchOption[]` | - | Array of switch options |
| `value` | `string` | - | Selected option value |
| `onChange` | `(value: string) => void` | - | Value change handler |
| `label` | `string` | - | Switch group label |
| `disabled` | `boolean` | `false` | Disable all options |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Switch size |
| `variant` | `"default" \| "outline" \| "pills"` | `"default"` | Visual variant |
| `color` | `"primary" \| "secondary" \| "success" \| "warning" \| "info"` | `"primary"` | Color theme |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Layout orientation |
| `fullWidth` | `boolean` | `false` | Take full width |
| `className` | `string` | - | Additional CSS classes |

## SwitchOption Interface

```typescript
interface SwitchOption {
  value: string
  label: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  description?: string
}
```

## Examples

### Basic Multi-Option Switch
```typescript
const [mode, setMode] = useState("auto")

const modeOptions = [
  { value: "off", label: "Off" },
  { value: "on", label: "On" },
  { value: "auto", label: "Auto" }
]

<div className="space-y-2">
  <label className="font-medium">System Mode</label>
  <GlobalSwitch
    options={modeOptions}
    value={mode}
    onChange={setMode}
  />
</div>
```

### With Icons
```typescript
import { Sun, Moon, Monitor } from 'lucide-react'

const [theme, setTheme] = useState("system")

const themeOptions = [
  { 
    value: "light", 
    label: "Light", 
    icon: <Sun className="h-4 w-4" />
  },
  { 
    value: "dark", 
    label: "Dark", 
    icon: <Moon className="h-4 w-4" />
  },
  { 
    value: "system", 
    label: "System", 
    icon: <Monitor className="h-4 w-4" />
  }
]

<GlobalSwitch
  label="Theme Preference"
  options={themeOptions}
  value={theme}
  onChange={setTheme}
  variant="pills"
/>
```

### Different Variants
```typescript
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" }
]

<div className="space-y-6">
  <div>
    <h4 className="mb-2">Default Variant</h4>
    <GlobalSwitch
      options={options}
      value="option1"
      variant="default"
    />
  </div>
  
  <div>
    <h4 className="mb-2">Outline Variant</h4>
    <GlobalSwitch
      options={options}
      value="option2"
      variant="outline"
    />
  </div>
  
  <div>
    <h4 className="mb-2">Pills Variant</h4>
    <GlobalSwitch
      options={options}
      value="option3"
      variant="pills"
    />
  </div>
</div>
```

### Vertical Layout
```typescript
const [priority, setPriority] = useState("medium")

const priorityOptions = [
  { value: "low", label: "Low Priority", description: "Standard processing" },
  { value: "medium", label: "Medium Priority", description: "Elevated processing" },
  { value: "high", label: "High Priority", description: "Priority processing" },
  { value: "urgent", label: "Urgent", description: "Immediate processing" }
]

<GlobalSwitch
  label="Task Priority"
  options={priorityOptions}
  value={priority}
  onChange={setPriority}
  orientation="vertical"
  fullWidth
/>
```

### Settings Panel
```typescript
function AdvancedSettings() {
  const [notification, setNotification] = useState("all")
  const [privacy, setPrivacy] = useState("friends")
  const [frequency, setFrequency] = useState("daily")
  
  const notificationOptions = [
    { value: "none", label: "None", description: "No notifications" },
    { value: "mentions", label: "Mentions", description: "Only when mentioned" },
    { value: "all", label: "All", description: "All notifications" }
  ]
  
  const privacyOptions = [
    { value: "public", label: "Public" },
    { value: "friends", label: "Friends" },
    { value: "private", label: "Private" }
  ]
  
  const frequencyOptions = [
    { value: "realtime", label: "Real-time" },
    { value: "hourly", label: "Hourly" },
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" }
  ]
  
  return (
    <div className="space-y-8">
      <div>
        <GlobalSwitch
          label="Notification Level"
          options={notificationOptions}
          value={notification}
          onChange={setNotification}
          orientation="vertical"
          variant="outline"
          fullWidth
        />
      </div>
      
      <div>
        <GlobalSwitch
          label="Privacy Setting"
          options={privacyOptions}
          value={privacy}
          onChange={setPrivacy}
          color="secondary"
        />
      </div>
      
      <div>
        <GlobalSwitch
          label="Update Frequency"
          options={frequencyOptions}
          value={frequency}
          onChange={setFrequency}
          variant="pills"
          size="small"
        />
      </div>
    </div>
  )
}
```

### Display Settings
```typescript
function DisplaySettings() {
  const [view, setView] = useState("grid")
  const [density, setDensity] = useState("comfortable")
  const [sorting, setSorting] = useState("newest")
  
  const viewOptions = [
    { 
      value: "list", 
      label: "List", 
      icon: <List className="h-4 w-4" />
    },
    { 
      value: "grid", 
      label: "Grid", 
      icon: <Grid className="h-4 w-4" />
    },
    { 
      value: "card", 
      label: "Card", 
      icon: <Square className="h-4 w-4" />
    }
  ]
  
  const densityOptions = [
    { value: "compact", label: "Compact" },
    { value: "comfortable", label: "Comfortable" },
    { value: "spacious", label: "Spacious" }
  ]
  
  const sortingOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "alphabetical", label: "A-Z" },
    { value: "popularity", label: "Most Popular" }
  ]
  
  return (
    <div className="space-y-6">
      <div>
        <GlobalSwitch
          label="View Mode"
          options={viewOptions}
          value={view}
          onChange={setView}
          variant="pills"
        />
      </div>
      
      <div>
        <GlobalSwitch
          label="Display Density"
          options={densityOptions}
          value={density}
          onChange={setDensity}
          color="info"
        />
      </div>
      
      <div>
        <GlobalSwitch
          label="Sort Order"
          options={sortingOptions}
          value={sorting}
          onChange={setSorting}
          variant="outline"
          size="small"
        />
      </div>
    </div>
  )
}
```

### Permission Levels
```typescript
function PermissionSettings() {
  const [access, setAccess] = useState("editor")
  
  const accessOptions = [
    { 
      value: "viewer", 
      label: "Viewer", 
      description: "Can only view content",
      icon: <Eye className="h-4 w-4" />
    },
    { 
      value: "editor", 
      label: "Editor", 
      description: "Can view and edit content",
      icon: <Edit className="h-4 w-4" />
    },
    { 
      value: "admin", 
      label: "Admin", 
      description: "Full access to all features",
      icon: <Shield className="h-4 w-4" />
    }
  ]
  
  return (
    <div className="max-w-md">
      <GlobalSwitch
        label="Access Level"
        options={accessOptions}
        value={access}
        onChange={setAccess}
        orientation="vertical"
        variant="outline"
        color="warning"
        fullWidth
      />
    </div>
  )
}
```

### With Disabled Options
```typescript
const [plan, setPlan] = useState("basic")

const planOptions = [
  { value: "free", label: "Free", description: "Basic features" },
  { value: "basic", label: "Basic", description: "Standard features" },
  { 
    value: "premium", 
    label: "Premium", 
    description: "Advanced features",
    disabled: true
  },
  { 
    value: "enterprise", 
    label: "Enterprise", 
    description: "All features",
    disabled: true
  }
]

<GlobalSwitch
  label="Subscription Plan"
  options={planOptions}
  value={plan}
  onChange={setPlan}
  orientation="vertical"
  fullWidth
/>
```

### Color Variants
```typescript
<div className="space-y-6">
  <GlobalSwitch
    options={[
      { value: "1", label: "Primary" },
      { value: "2", label: "Option" }
    ]}
    value="1"
    color="primary"
  />
  
  <GlobalSwitch
    options={[
      { value: "1", label: "Success" },
      { value: "2", label: "Option" }
    ]}
    value="1"
    color="success"
  />
  
  <GlobalSwitch
    options={[
      { value: "1", label: "Warning" },
      { value: "2", label: "Option" }
    ]}
    value="1"
    color="warning"
  />
</div>
```
