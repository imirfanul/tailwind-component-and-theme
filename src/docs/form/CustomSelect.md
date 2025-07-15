
# CustomSelect

Dropdown select component with options, validation, and helper text support.

## Import

```typescript
import CustomSelect from '@/components/CustomSelect'
```

## Basic Usage

```typescript
const options = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" }
]

<CustomSelect
  label="Choose Option"
  options={options}
  placeholder="Select an option..."
  onChange={(value) => console.log(value)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | `[]` | Array of options |
| `value` | `string \| number` | - | Selected value |
| `onChange` | `(value: string \| number) => void` | - | Change handler |
| `placeholder` | `string` | `"Select option..."` | Placeholder text |
| `label` | `string` | - | Label text above select |
| `fullWidth` | `boolean` | `true` | Take full width of container |
| `disabled` | `boolean` | `false` | Disable the select |
| `error` | `boolean` | `false` | Show error state |
| `helperText` | `React.ReactNode` | - | Help text below select |
| `required` | `boolean` | `false` | Mark field as required |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Select size |
| `className` | `string` | - | Additional CSS classes |
| `customClass` | `string` | - | Legacy custom classes |
| `id` | `string` | - | Select ID attribute |
| `name` | `string` | - | Select name attribute |

## SelectOption Interface

```typescript
interface SelectOption {
  id: string | number
  name: string
  value?: any
  disabled?: boolean
}
```

## Examples

### With Validation
```typescript
<CustomSelect
  label="Country"
  options={countries}
  required
  error={!!errors.country}
  helperText={errors.country?.message || "Please select your country"}
  onChange={(value) => setValue("country", value)}
/>
```

### Disabled Options
```typescript
const options = [
  { id: 1, name: "Available Option" },
  { id: 2, name: "Disabled Option", disabled: true },
  { id: 3, name: "Another Available Option" }
]

<CustomSelect
  label="Status"
  options={options}
  placeholder="Select status..."
/>
```

### Different Sizes
```typescript
<div className="space-y-4">
  <CustomSelect size="small" options={options} placeholder="Small select" />
  <CustomSelect size="medium" options={options} placeholder="Medium select" />
  <CustomSelect size="large" options={options} placeholder="Large select" />
</div>
```

### Controlled Component
```typescript
const [selectedValue, setSelectedValue] = useState("")

<CustomSelect
  label="Category"
  options={categories}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Choose category..."
/>
```
