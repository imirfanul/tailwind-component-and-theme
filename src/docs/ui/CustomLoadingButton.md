
# CustomLoadingButton

Button component with built-in loading state management and async operation support.

## Import

```typescript
import CustomLoadingButton from '@/components/CustomLoadingButton'
```

## Basic Usage

```typescript
<CustomLoadingButton
  onClick={async () => {
    await saveData()
  }}
>
  Save Changes
</CustomLoadingButton>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Button style variant |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Button size |
| `color` | `"primary" \| "secondary" \| "error" \| "info" \| "success" \| "warning"` | `"primary"` | Color theme |
| `loading` | `boolean` | `false` | External loading state |
| `loadingText` | `string` | - | Text to show when loading |
| `fullWidth` | `boolean` | `false` | Take full width of container |
| `startIcon` | `React.ReactNode` | - | Icon at start of button |
| `endIcon` | `React.ReactNode` | - | Icon at end of button |
| `disabled` | `boolean` | `false` | Disable the button |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Button content |
| `onClick` | `(e: React.MouseEvent) => void \| Promise<void>` | - | Click handler (can be async) |

## Examples

### Basic Loading Button
```typescript
const handleSave = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log('Saved!')
}

<CustomLoadingButton onClick={handleSave}>
  Save Data
</CustomLoadingButton>
```

### With Custom Loading Text
```typescript
<CustomLoadingButton
  onClick={async () => {
    await uploadFile()
  }}
  loadingText="Uploading..."
>
  Upload File
</CustomLoadingButton>
```

### API Call Example
```typescript
const handleSubmit = async () => {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      toast.success('Form submitted successfully!')
    }
  } catch (error) {
    toast.error('Failed to submit form')
  }
}

<CustomLoadingButton
  onClick={handleSubmit}
  loadingText="Submitting..."
  color="success"
>
  Submit Form
</CustomLoadingButton>
```

### Different Variants
```typescript
<div className="space-x-2">
  <CustomLoadingButton variant="default" onClick={handleDefault}>
    Default
  </CustomLoadingButton>
  
  <CustomLoadingButton variant="destructive" onClick={handleDelete}>
    Delete
  </CustomLoadingButton>
  
  <CustomLoadingButton variant="outline" onClick={handleOutline}>
    Outline
  </CustomLoadingButton>
  
  <CustomLoadingButton variant="secondary" onClick={handleSecondary}>
    Secondary
  </CustomLoadingButton>
</div>
```

### With Icons
```typescript
import { Save, Download, Send } from 'lucide-react'

<div className="space-x-2">
  <CustomLoadingButton
    startIcon={<Save />}
    onClick={handleSave}
    loadingText="Saving..."
  >
    Save
  </CustomLoadingButton>
  
  <CustomLoadingButton
    endIcon={<Download />}
    onClick={handleDownload}
    loadingText="Downloading..."
  >
    Download
  </CustomLoadingButton>
  
  <CustomLoadingButton
    startIcon={<Send />}
    onClick={handleSend}
    color="info"
  >
    Send Email
  </CustomLoadingButton>
</div>
```

### Form Submission
```typescript
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setFormData({ name: '', email: '', message: '' })
      toast.success('Message sent successfully!')
    } else {
      toast.error('Failed to send message')
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CustomTextField
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      
      <CustomTextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      
      <CustomTextField
        label="Message"
        multiline
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        required
      />
      
      <CustomLoadingButton
        type="submit"
        fullWidth
        loadingText="Sending..."
        startIcon={<Send />}
      >
        Send Message
      </CustomLoadingButton>
    </form>
  )
}
```

### Error Handling
```typescript
const handleRiskyOperation = async () => {
  try {
    await performRiskyOperation()
    toast.success('Operation completed successfully!')
  } catch (error) {
    console.error('Operation failed:', error)
    toast.error('Operation failed. Please try again.')
  }
}

<CustomLoadingButton
  onClick={handleRiskyOperation}
  loadingText="Processing..."
  color="warning"
>
  Risky Operation
</CustomLoadingButton>
```

### Conditional Loading
```typescript
const [externalLoading, setExternalLoading] = useState(false)

const handleComplexOperation = async () => {
  setExternalLoading(true)
  try {
    await step1()
    await step2()
    await step3()
  } finally {
    setExternalLoading(false)
  }
}

<CustomLoadingButton
  onClick={handleComplexOperation}
  loading={externalLoading}
  loadingText="Processing steps..."
  disabled={someCondition}
>
  Start Complex Operation
</CustomLoadingButton>
```
