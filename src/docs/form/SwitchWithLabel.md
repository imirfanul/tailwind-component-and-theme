
# SwitchWithLabel

Switch component with integrated label support and flexible layout options.

## Import

```typescript
import SwitchWithLabel from '@/components/SwitchWithLabel'
```

## Basic Usage

```typescript
<SwitchWithLabel
  label="Enable notifications"
  checked={enabled}
  onCheckedChange={setEnabled}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Switch label text |
| `description` | `string` | - | Additional description text |
| `checked` | `boolean` | - | Switch state |
| `onCheckedChange` | `(checked: boolean) => void` | - | State change handler |
| `disabled` | `boolean` | `false` | Disable the switch |
| `required` | `boolean` | `false` | Mark as required |
| `error` | `boolean` | `false` | Show error state |
| `helperText` | `React.ReactNode` | - | Help text below switch |
| `labelPosition` | `"left" \| "right"` | `"left"` | Label position relative to switch |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Switch size |
| `color` | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"primary"` | Color theme |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | Switch ID attribute |
| `name` | `string` | - | Form field name |

## Examples

### Basic Switch with Label
```typescript
const [notifications, setNotifications] = useState(true)

<SwitchWithLabel
  label="Push Notifications"
  description="Receive push notifications on your device"
  checked={notifications}
  onCheckedChange={setNotifications}
/>
```

### Different Label Positions
```typescript
<div className="space-y-4">
  <SwitchWithLabel
    label="Label on left"
    labelPosition="left"
    checked={true}
  />
  
  <SwitchWithLabel
    label="Label on right"
    labelPosition="right"
    checked={true}
  />
</div>
```

### With Descriptions
```typescript
<div className="space-y-6">
  <SwitchWithLabel
    label="Email Notifications"
    description="Get notified about important updates via email"
    checked={emailNotifications}
    onCheckedChange={setEmailNotifications}
  />
  
  <SwitchWithLabel
    label="Marketing Emails"
    description="Receive promotional emails and newsletters"
    checked={marketingEmails}
    onCheckedChange={setMarketingEmails}
    color="secondary"
  />
</div>
```

### With Validation
```typescript
const [agreed, setAgreed] = useState(false)
const [hasError, setHasError] = useState(false)

const handleSubmit = () => {
  if (!agreed) {
    setHasError(true)
    return
  }
  setHasError(false)
  // Submit form
}

<SwitchWithLabel
  label="I agree to the terms and conditions"
  checked={agreed}
  onCheckedChange={(checked) => {
    setAgreed(checked)
    if (checked) setHasError(false)
  }}
  required
  error={hasError}
  helperText={hasError ? "You must agree to continue" : ""}
/>
```

### Settings Form
```typescript
function SettingsForm() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyDigest: true,
    marketingEmails: false,
    dataSharing: false
  })
  
  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Notification Settings</h2>
      
      <SwitchWithLabel
        label="Email Notifications"
        description="Receive notifications via email"
        checked={settings.emailNotifications}
        onCheckedChange={(checked) => updateSetting('emailNotifications', checked)}
      />
      
      <SwitchWithLabel
        label="Push Notifications"
        description="Get real-time notifications on your device"
        checked={settings.pushNotifications}
        onCheckedChange={(checked) => updateSetting('pushNotifications', checked)}
        color="info"
      />
      
      <SwitchWithLabel
        label="Weekly Digest"
        description="Receive a summary of weekly activity"
        checked={settings.weeklyDigest}
        onCheckedChange={(checked) => updateSetting('weeklyDigest', checked)}
        color="success"
      />
      
      <SwitchWithLabel
        label="Marketing Emails"
        description="Receive promotional content and offers"
        checked={settings.marketingEmails}
        onCheckedChange={(checked) => updateSetting('marketingEmails', checked)}
        color="warning"
      />
      
      <SwitchWithLabel
        label="Data Sharing"
        description="Allow anonymous usage analytics"
        checked={settings.dataSharing}
        onCheckedChange={(checked) => updateSetting('dataSharing', checked)}
        helperText="This helps us improve our services"
      />
    </div>
  )
}
```

### Different Sizes
```typescript
<div className="space-y-4">
  <SwitchWithLabel
    label="Small switch"
    size="small"
    checked={true}
  />
  
  <SwitchWithLabel
    label="Medium switch"
    size="medium"
    checked={true}
  />
  
  <SwitchWithLabel
    label="Large switch"
    size="large"
    checked={true}
  />
</div>
```

### Color Variants
```typescript
<div className="space-y-4">
  <SwitchWithLabel
    label="Primary color"
    color="primary"
    checked={true}
  />
  
  <SwitchWithLabel
    label="Success color"
    color="success"
    checked={true}
  />
  
  <SwitchWithLabel
    label="Warning color"
    color="warning"
    checked={true}
  />
  
  <SwitchWithLabel
    label="Error color"
    color="error"
    checked={true}
  />
</div>
```

### Privacy Settings
```typescript
function PrivacySettings() {
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showPhone: false,
    allowMessages: true,
    shareActivity: false
  })
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Privacy Settings</h2>
      
      <SwitchWithLabel
        label="Public Profile"
        description="Make your profile visible to other users"
        checked={privacy.profileVisible}
        onCheckedChange={(checked) => 
          setPrivacy(prev => ({ ...prev, profileVisible: checked }))
        }
      />
      
      <SwitchWithLabel
        label="Show Email Address"
        description="Display your email on your public profile"
        checked={privacy.showEmail}
        onCheckedChange={(checked) => 
          setPrivacy(prev => ({ ...prev, showEmail: checked }))
        }
        disabled={!privacy.profileVisible}
        helperText={!privacy.profileVisible ? "Enable public profile first" : ""}
      />
      
      <SwitchWithLabel
        label="Show Phone Number"
        description="Display your phone number on your profile"
        checked={privacy.showPhone}
        onCheckedChange={(checked) => 
          setPrivacy(prev => ({ ...prev, showPhone: checked }))
        }
        disabled={!privacy.profileVisible}
      />
      
      <SwitchWithLabel
        label="Allow Direct Messages"
        description="Let other users send you direct messages"
        checked={privacy.allowMessages}
        onCheckedChange={(checked) => 
          setPrivacy(prev => ({ ...prev, allowMessages: checked }))
        }
        color="info"
      />
      
      <SwitchWithLabel
        label="Share Activity Status"
        description="Show when you're online or active"
        checked={privacy.shareActivity}
        onCheckedChange={(checked) => 
          setPrivacy(prev => ({ ...prev, shareActivity: checked }))
        }
        color="warning"
      />
    </div>
  )
}
```

### Conditional Logic
```typescript
function ConditionalSettings() {
  const [masterSwitch, setMasterSwitch] = useState(false)
  const [subSettings, setSubSettings] = useState({
    option1: false,
    option2: false,
    option3: false
  })
  
  return (
    <div className="space-y-6">
      <SwitchWithLabel
        label="Enable Advanced Features"
        description="Unlock additional functionality"
        checked={masterSwitch}
        onCheckedChange={setMasterSwitch}
        color="primary"
      />
      
      {masterSwitch && (
        <div className="ml-6 space-y-4 border-l-2 border-muted pl-4">
          <SwitchWithLabel
            label="Feature Option 1"
            description="Enable first advanced feature"
            checked={subSettings.option1}
            onCheckedChange={(checked) => 
              setSubSettings(prev => ({ ...prev, option1: checked }))
            }
            size="small"
          />
          
          <SwitchWithLabel
            label="Feature Option 2"
            description="Enable second advanced feature"
            checked={subSettings.option2}
            onCheckedChange={(checked) => 
              setSubSettings(prev => ({ ...prev, option2: checked }))
            }
            size="small"
          />
          
          <SwitchWithLabel
            label="Feature Option 3"
            description="Enable third advanced feature"
            checked={subSettings.option3}
            onCheckedChange={(checked) => 
              setSubSettings(prev => ({ ...prev, option3: checked }))
            }
            size="small"
          />
        </div>
      )}
    </div>
  )
}
```
