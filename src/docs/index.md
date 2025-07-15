
# Custom Components Documentation

This documentation covers all the custom components available in the project. Each component has been built using shadcn/ui and Tailwind CSS for consistency and flexibility.

## Component Categories

### Form Components
- [CustomTextField](./form/CustomTextField.md) - Enhanced input field with validation
- [CustomTextFieldPassword](./form/CustomTextFieldPassword.md) - Password input with show/hide toggle
- [CustomSelect](./form/CustomSelect.md) - Dropdown select component
- [CustomAutoComplete](./form/CustomAutoComplete.md) - Searchable dropdown with filtering
- [CustomDatePicker](./form/CustomDatePicker.md) - Date selection component
- [CustomTimePicker](./form/CustomTimePicker.md) - Time selection component
- [MultiTextField](./form/MultiTextField.md) - Dynamic multiple text inputs

### UI Components
- [CustomButton](./ui/CustomButton.md) - Enhanced button with loading states
- [CustomLoadingButton](./ui/CustomLoadingButton.md) - Button with built-in loading functionality
- [CustomIconButton](./ui/CustomIconButton.md) - Icon-only button component
- [CustomDialog](./ui/CustomDialog.md) - Modal dialog component
- [CustomConfirmationDialog](./ui/CustomConfirmationDialog.md) - Confirmation dialog with actions
- [CustomTabs](./ui/CustomTabs.md) - Tabbed interface component
- [CustomTooltip](./ui/CustomTooltip.md) - Tooltip component
- [CustomSkeleton](./ui/CustomSkeleton.md) - Loading skeleton component

### Switch Components
- [CustomSwitch](./form/CustomSwitch.md) - Basic switch toggle
- [SwitchWithLabel](./form/SwitchWithLabel.md) - Switch with label support
- [GlobalSwitch](./form/GlobalSwitch.md) - Advanced switch with multiple options

### Notification System
- [NotificationProvider](./notifications/NotificationProvider.md) - Notification context provider
- [NotificationStack](./notifications/NotificationStack.md) - Notification display container
- [Notification](./notifications/Notification.md) - Individual notification component

## Quick Start

```typescript
import { CustomButton } from '@/components/CustomButton'
import { CustomTextField } from '@/components/CustomTextField'

function MyForm() {
  return (
    <div className="space-y-4">
      <CustomTextField
        label="Name"
        placeholder="Enter your name"
        required
      />
      <CustomButton variant="primary">
        Submit
      </CustomButton>
    </div>
  )
}
```

## Common Props

Most components share common props for consistency:

- `className` - Additional CSS classes
- `customClass` - Legacy prop for custom styling
- `fullWidth` - Make component take full width
- `disabled` - Disable the component
- `error` - Show error state
- `helperText` - Help text below component
- `size` - Size variant (small, medium, large)
- `sx` - Legacy Material-UI style prop (ignored for compatibility)

## Theming

All components use the design system tokens defined in `tailwind.config.ts` and `globals.css`. Colors are semantic (primary, secondary, error, etc.) and support both light and dark themes.
