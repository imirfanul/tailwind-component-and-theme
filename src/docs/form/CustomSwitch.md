
# CustomSwitch

Toggle switch component for boolean settings and preferences.

## Import

```typescript
import CustomSwitch from '@/components/CustomSwitch'
```

## Basic Usage

```typescript
const [enabled, setEnabled] = useState(false)

<CustomSwitch
  checked={enabled}
  onCheckedChange={setEnabled}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | - | Switch state |
| `onCheckedChange` | `(checked: boolean) => void` | - | State change handler |
| `disabled` | `boolean` | `false` | Disable the switch |
| `name` | `string` | - | Form field name |
| `id` | `string` | - | Switch ID attribute |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Switch size |
| `color` | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"primary"` | Color theme |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Switch
```typescript
const [notifications, setNotifications] = useState(true)

<div className="flex items-center space-x-2">
  <CustomSwitch
    checked={notifications}
    onCheckedChange={setNotifications}
    id="notifications"
  />
  <label htmlFor="notifications">Enable notifications</label>
</div>
```

### Different Sizes
```typescript
<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <CustomSwitch size="small" checked={true} />
    <span>Small switch</span>
  </div>
  
  <div className="flex items-center space-x-2">
    <CustomSwitch size="medium" checked={true} />
    <span>Medium switch</span>
  </div>
  
  <div className="flex items-center space-x-2">
    <CustomSwitch size="large" checked={true} />
    <span>Large switch</span>
  </div>
</div>
```

### Color Variants
```typescript
<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <CustomSwitch color="primary" checked={true} />
    <span>Primary</span>
  </div>
  
  <div className="flex items-center space-x-2">
    <CustomSwitch color="secondary" checked={true} />
    <span>Secondary</span>
  </div>
  
  <div className="flex items-center space-x-2">
    <CustomSwitch color="success" checked={true} />
    <span>Success</span>
  </div>
  
  <div className="flex items-center space-x-2">
    <CustomSwitch color="warning" checked={true} />
    <span>Warning</span>
  </div>
  
  <div className="flex items-center space-x-2">
    <CustomSwitch color="error" checked={true} />
    <span>Error</span>
  </div>
</div>
```

### Settings Panel
```typescript
function SettingsPanel() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
    autoSave: true,
    analytics: false
  })
  
  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }
  
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <label className="font-medium">Push Notifications</label>
            <p className="text-sm text-muted-foreground">Receive push notifications</p>
          </div>
          <CustomSwitch
            checked={settings.notifications}
            onCheckedChange={(checked) => updateSetting('notifications', checked)}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <label className="font-medium">Email Updates</label>
            <p className="text-sm text-muted-foreground">Get updates via email</p>
          </div>
          <CustomSwitch
            checked={settings.emailUpdates}
            onCheckedChange={(checked) => updateSetting('emailUpdates', checked)}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <label className="font-medium">Dark Mode</label>
            <p className="text-sm text-muted-foreground">Use dark theme</p>
          </div>
          <CustomSwitch
            checked={settings.darkMode}
            onCheckedChange={(checked) => updateSetting('darkMode', checked)}
            color="secondary"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <label className="font-medium">Auto Save</label>
            <p className="text-sm text-muted-foreground">Automatically save changes</p>
          </div>
          <CustomSwitch
            checked={settings.autoSave}
            onCheckedChange={(checked) => updateSetting('autoSave', checked)}
            color="success"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <label className="font-medium">Analytics</label>
            <p className="text-sm text-muted-foreground">Help improve our service</p>
          </div>
          <CustomSwitch
            checked={settings.analytics}
            onCheckedChange={(checked) => updateSetting('analytics', checked)}
            color="warning"
          />
        </div>
      </div>
    </div>
  )
}
```

### Form Integration
```typescript
function ProfileForm() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    isPublic: false,
    allowMessages: true,
    showEmail: false
  })
  
  return (
    <form className="space-y-6">
      <CustomTextField
        label="Name"
        value={profile.name}
        onChange={(e) => setProfile({...profile, name: e.target.value})}
        required
      />
      
      <CustomTextField
        label="Email"
        type="email"
        value={profile.email}
        onChange={(e) => setProfile({...profile, email: e.target.value})}
        required
      />
      
      <div className="space-y-4">
        <h3 className="font-medium">Privacy Settings</h3>
        
        <div className="flex items-center justify-between">
          <label>Make profile public</label>
          <CustomSwitch
            checked={profile.isPublic}
            onCheckedChange={(checked) => setProfile({...profile, isPublic: checked})}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label>Allow direct messages</label>
          <CustomSwitch
            checked={profile.allowMessages}
            onCheckedChange={(checked) => setProfile({...profile, allowMessages: checked})}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label>Show email address</label>
          <CustomSwitch
            checked={profile.showEmail}
            onCheckedChange={(checked) => setProfile({...profile, showEmail: checked})}
            disabled={!profile.isPublic}
          />
        </div>
      </div>
      
      <CustomButton type="submit" fullWidth>
        Save Profile
      </CustomButton>
    </form>
  )
}
```

### Disabled States
```typescript
<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <CustomSwitch checked={true} disabled />
    <span className="text-muted-foreground">Enabled but disabled</span>
  </div>
  
  <div className="flex items-center space-x-2">
    <CustomSwitch checked={false} disabled />
    <span className="text-muted-foreground">Disabled switch</span>
  </div>
</div>
```

### With Loading State
```typescript
function SettingWithLoading() {
  const [loading, setLoading] = useState(false)
  const [enabled, setEnabled] = useState(false)
  
  const handleToggle = async (checked: boolean) => {
    setLoading(true)
    try {
      await updateSetting(checked)
      setEnabled(checked)
    } catch (error) {
      toast.error('Failed to update setting')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="flex items-center justify-between">
      <label>Feature enabled</label>
      <CustomSwitch
        checked={enabled}
        onCheckedChange={handleToggle}
        disabled={loading}
      />
    </div>
  )
}
```
