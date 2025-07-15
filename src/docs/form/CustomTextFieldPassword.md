
# CustomTextFieldPassword

Password input field with show/hide toggle functionality and validation support.

## Import

```typescript
import CustomTextFieldPassword from '@/components/CustomTextFieldPassword'
```

## Basic Usage

```typescript
<CustomTextFieldPassword
  label="Password"
  placeholder="Enter your password"
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
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Default/initial value |
| `required` | `boolean` | `false` | Mark field as required |
| `disabled` | `boolean` | `false` | Disable the input |
| `error` | `boolean` | `false` | Show error state |
| `helperText` | `React.ReactNode` | - | Help text below input |
| `fullWidth` | `boolean` | `true` | Take full width of container |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Input size |
| `className` | `string` | - | Additional CSS classes |
| `handleChange` | `(e: React.ChangeEvent<HTMLInputElement>) => void` | - | Change handler |
| `handleOnBlur` | `(e: React.FocusEvent<HTMLInputElement>) => void` | - | Blur handler |
| `register` | `object` | - | React Hook Form register object |

## Examples

### Basic Password Field
```typescript
const [password, setPassword] = useState('')

<CustomTextFieldPassword
  label="Password"
  value={password}
  handleChange={(e) => setPassword(e.target.value)}
  placeholder="Enter your password"
  required
/>
```

### With Validation
```typescript
<CustomTextFieldPassword
  label="New Password"
  required
  error={!!errors.password}
  helperText={errors.password?.message || "Password must be at least 8 characters"}
  {...register("password", {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters"
    }
  })}
/>
```

### Confirm Password Field
```typescript
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const passwordsMatch = password === confirmPassword

<div className="space-y-4">
  <CustomTextFieldPassword
    label="Password"
    value={password}
    handleChange={(e) => setPassword(e.target.value)}
    required
  />
  
  <CustomTextFieldPassword
    label="Confirm Password"
    value={confirmPassword}
    handleChange={(e) => setConfirmPassword(e.target.value)}
    error={!passwordsMatch && confirmPassword.length > 0}
    helperText={!passwordsMatch && confirmPassword.length > 0 ? "Passwords don't match" : ""}
    required
  />
</div>
```

### Different Sizes
```typescript
<div className="space-y-4">
  <CustomTextFieldPassword size="small" placeholder="Small password input" />
  <CustomTextFieldPassword size="medium" placeholder="Medium password input" />
  <CustomTextFieldPassword size="large" placeholder="Large password input" />
</div>
```

### In Registration Form
```typescript
function RegistrationForm() {
  const { register, watch, formState: { errors } } = useForm()
  const password = watch("password")

  return (
    <form className="space-y-4">
      <CustomTextField
        label="Email"
        type="email"
        {...register("email", { required: "Email is required" })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      
      <CustomTextFieldPassword
        label="Password"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 8, message: "Password must be at least 8 characters" },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            message: "Password must contain uppercase, lowercase, and number"
          }
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      
      <CustomTextFieldPassword
        label="Confirm Password"
        {...register("confirmPassword", {
          required: "Please confirm your password",
          validate: value => value === password || "Passwords don't match"
        })}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      
      <CustomButton type="submit" fullWidth>
        Register
      </CustomButton>
    </form>
  )
}
```
