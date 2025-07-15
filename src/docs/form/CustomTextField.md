
# CustomTextField

Enhanced input field component with validation, labels, and helper text support.

## Import

```typescript
import CustomTextField from '@/components/CustomTextField'
```

## Basic Usage

```typescript
<CustomTextField
  label="Email"
  placeholder="Enter your email"
  type="email"
  required
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Input name attribute |
| `id` | `string` | - | Input ID attribute |
| `label` | `string` | - | Label text above input |
| `placeholder` | `string` | - | Placeholder text |
| `type` | `string` | `"text"` | HTML input type |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Default/initial value |
| `required` | `boolean` | `false` | Mark field as required |
| `disabled` | `boolean` | `false` | Disable the input |
| `error` | `boolean` | `false` | Show error state |
| `helperText` | `React.ReactNode` | - | Help text below input |
| `fullWidth` | `boolean` | `true` | Take full width of container |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Input size |
| `color` | `"primary" \| "secondary" \| "error" \| "info" \| "success" \| "warning"` | `"primary"` | Color theme |
| `className` | `string` | - | Additional CSS classes |
| `customClass` | `string` | - | Legacy custom classes |
| `handleChange` | `(e: React.ChangeEvent<HTMLInputElement>) => void` | - | Change handler |
| `handleOnBlur` | `(e: React.FocusEvent<HTMLInputElement>) => void` | - | Blur handler |
| `register` | `object` | - | React Hook Form register object |
| `inputProps` | `object` | - | Additional input properties |
| `inputProps.startAdornment` | `React.ReactNode` | - | Element at start of input |
| `inputProps.endAdornment` | `React.ReactNode` | - | Element at end of input |

## Examples

### With Validation
```typescript
<CustomTextField
  label="Username"
  required
  error={!!errors.username}
  helperText={errors.username?.message || "Username must be unique"}
  {...register("username")}
/>
```

### With Adornments
```typescript
<CustomTextField
  label="Amount"
  type="number"
  inputProps={{
    startAdornment: <span className="text-muted-foreground">$</span>,
    endAdornment: <span className="text-muted-foreground">USD</span>
  }}
/>
```

### Different Sizes
```typescript
<div className="space-y-4">
  <CustomTextField size="small" placeholder="Small input" />
  <CustomTextField size="medium" placeholder="Medium input" />
  <CustomTextField size="large" placeholder="Large input" />
</div>
```

### With React Hook Form
```typescript
const { register, formState: { errors } } = useForm()

<CustomTextField
  label="Email"
  type="email"
  error={!!errors.email}
  helperText={errors.email?.message}
  register={register("email", {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email format"
    }
  })}
/>
```
