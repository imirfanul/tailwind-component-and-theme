
# CustomDatePicker

Date selection component with calendar popup and validation support.

## Import

```typescript
import CustomDatePicker from '@/components/CustomDatePicker'
```

## Basic Usage

```typescript
const [date, setDate] = useState<Date | null>(null)

<CustomDatePicker
  label="Select Date"
  value={date}
  onChange={setDate}
  placeholder="Pick a date"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date \| null` | - | Selected date |
| `onChange` | `(date: Date \| null) => void` | - | Date change handler |
| `placeholder` | `string` | `"Pick a date"` | Placeholder text |
| `label` | `string` | - | Label text above picker |
| `disabled` | `boolean` | `false` | Disable the picker |
| `error` | `boolean` | `false` | Show error state |
| `helperText` | `React.ReactNode` | - | Help text below picker |
| `required` | `boolean` | `false` | Mark field as required |
| `fullWidth` | `boolean` | `true` | Take full width of container |
| `className` | `string` | - | Additional CSS classes |
| `customClass` | `string` | - | Legacy custom classes |
| `id` | `string` | - | Picker ID attribute |
| `name` | `string` | - | Form field name |
| `format` | `string` | `"PPP"` | Date display format |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |
| `disableFuture` | `boolean` | `false` | Disable future dates |
| `disablePast` | `boolean` | `false` | Disable past dates |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Picker size |

## Examples

### Basic Date Picker
```typescript
const [birthDate, setBirthDate] = useState<Date | null>(null)

<CustomDatePicker
  label="Birth Date"
  value={birthDate}
  onChange={setBirthDate}
  disableFuture
  placeholder="Select your birth date"
/>
```

### With Validation
```typescript
<CustomDatePicker
  label="Event Date"
  value={eventDate}
  onChange={setEventDate}
  required
  error={!!errors.eventDate}
  helperText={errors.eventDate?.message || "Select the event date"}
  disablePast
/>
```

### Date Range Restrictions
```typescript
const today = new Date()
const maxDate = new Date()
maxDate.setFullYear(today.getFullYear() + 1)

<CustomDatePicker
  label="Appointment Date"
  value={appointmentDate}
  onChange={setAppointmentDate}
  minDate={today}
  maxDate={maxDate}
  placeholder="Choose appointment date"
/>
```

### Custom Format
```typescript
<CustomDatePicker
  label="Due Date"
  value={dueDate}
  onChange={setDueDate}
  format="dd/MM/yyyy" // Custom date format
  placeholder="DD/MM/YYYY"
/>
```

### Different Sizes
```typescript
<div className="space-y-4">
  <CustomDatePicker size="small" placeholder="Small picker" />
  <CustomDatePicker size="medium" placeholder="Medium picker" />
  <CustomDatePicker size="large" placeholder="Large picker" />
</div>
```

### In a Form
```typescript
function EventForm() {
  const [formData, setFormData] = useState({
    name: '',
    startDate: null,
    endDate: null
  })
  
  return (
    <form className="space-y-4">
      <CustomTextField
        label="Event Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      
      <CustomDatePicker
        label="Start Date"
        value={formData.startDate}
        onChange={(date) => setFormData({...formData, startDate: date})}
        required
      />
      
      <CustomDatePicker
        label="End Date"
        value={formData.endDate}
        onChange={(date) => setFormData({...formData, endDate: date})}
        minDate={formData.startDate || undefined}
        required
      />
      
      <CustomButton type="submit">Create Event</CustomButton>
    </form>
  )
}
```
