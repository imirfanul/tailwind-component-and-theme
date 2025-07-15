
# CustomDialog

Modal dialog component with customizable content and actions.

## Import

```typescript
import CustomDialog from '@/components/CustomDialog'
```

## Basic Usage

```typescript
const [open, setOpen] = useState(false)

<CustomDialog
  open={open}
  onOpenChange={setOpen}
  title="Dialog Title"
>
  <p>Dialog content goes here...</p>
</CustomDialog>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Control dialog visibility |
| `onOpenChange` | `(open: boolean) => void` | - | Called when dialog open state changes |
| `title` | `React.ReactNode` | - | Dialog title |
| `children` | `React.ReactNode` | - | Dialog content |
| `trigger` | `React.ReactNode` | - | Element that triggers dialog |
| `maxWidth` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` | Maximum width |
| `fullWidth` | `boolean` | `false` | Take full width up to maxWidth |
| `fullScreen` | `boolean` | `false` | Make dialog fullscreen |
| `disableEscapeKeyDown` | `boolean` | `false` | Disable ESC key to close |
| `disableBackdropClick` | `boolean` | `false` | Disable backdrop click to close |
| `className` | `string` | - | Additional CSS classes |
| `headerClassName` | `string` | - | Header CSS classes |
| `contentClassName` | `string` | - | Content CSS classes |
| `showCloseButton` | `boolean` | `true` | Show X close button |
| `onClose` | `() => void` | - | Called when dialog closes |

## Examples

### With Trigger Button
```typescript
<CustomDialog
  trigger={
    <CustomButton>Open Dialog</CustomButton>
  }
  title="Welcome"
>
  <p>This dialog was opened by clicking the trigger button.</p>
</CustomDialog>
```

### Controlled Dialog
```typescript
const [dialogOpen, setDialogOpen] = useState(false)

<>
  <CustomButton onClick={() => setDialogOpen(true)}>
    Open Dialog
  </CustomButton>
  
  <CustomDialog
    open={dialogOpen}
    onOpenChange={setDialogOpen}
    title="Settings"
  >
    <div className="space-y-4">
      <CustomTextField label="Name" />
      <CustomTextField label="Email" />
      <div className="flex justify-end space-x-2">
        <CustomButton variant="outline" onClick={() => setDialogOpen(false)}>
          Cancel
        </CustomButton>
        <CustomButton onClick={() => setDialogOpen(false)}>
          Save
        </CustomButton>
      </div>
    </div>
  </CustomDialog>
</>
```

### Different Sizes
```typescript
<div className="space-x-2">
  <CustomDialog maxWidth="xs" trigger={<CustomButton>XS Dialog</CustomButton>}>
    <p>Extra small dialog</p>
  </CustomDialog>
  
  <CustomDialog maxWidth="lg" trigger={<CustomButton>Large Dialog</CustomButton>}>
    <p>Large dialog with more content space</p>
  </CustomDialog>
  
  <CustomDialog fullScreen trigger={<CustomButton>Fullscreen</CustomButton>}>
    <p>Fullscreen dialog</p>
  </CustomDialog>
</div>
```

### Complex Dialog Content
```typescript
<CustomDialog
  title="User Profile"
  maxWidth="lg"
  trigger={<CustomButton>Edit Profile</CustomButton>}
>
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <CustomTextField label="First Name" />
      <CustomTextField label="Last Name" />
    </div>
    
    <CustomTextField label="Email" type="email" />
    
    <CustomSelect
      label="Country"
      options={[
        { id: 'us', name: 'United States' },
        { id: 'ca', name: 'Canada' },
        { id: 'uk', name: 'United Kingdom' }
      ]}
    />
    
    <div className="flex justify-end space-x-2 pt-4 border-t">
      <CustomButton variant="outline">Cancel</CustomButton>
      <CustomButton>Save Changes</CustomButton>
    </div>
  </div>
</CustomDialog>
```
