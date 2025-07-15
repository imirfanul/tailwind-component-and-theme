
# CustomTimePicker

Time selection component with validation and helper text support.

## Import

```typescript
import CustomTimePicker from '@/components/CustomTimePicker'
```

## Basic Usage

```typescript
const [time, setTime] = useState('')

<CustomTimePicker
  label="Select Time"
  value={time}
  onChange={setTime}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Selected time (HH:mm format) |
| `onChange` | `(time: string) => void` | - | Time change handler |
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
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Picker size |
| `format` | `"12" \| "24"` | `"24"` | Time format (12 or 24 hour) |
| `step` | `number` | `15` | Minute step intervals |

## Examples

### Basic Time Picker
```typescript
const [meetingTime, setMeetingTime] = useState('')

<CustomTimePicker
  label="Meeting Time"
  value={meetingTime}
  onChange={setMeetingTime}
  required
/>
```

### 12-Hour Format
```typescript
<CustomTimePicker
  label="Appointment Time"
  value={appointmentTime}
  onChange={setAppointmentTime}
  format="12"
  helperText="Select your preferred appointment time"
/>
```

### With Validation
```typescript
<CustomTimePicker
  label="Start Time"
  value={startTime}
  onChange={setStartTime}
  required
  error={!!errors.startTime}
  helperText={errors.startTime?.message || "Select the start time"}
/>
```

### Custom Step Intervals
```typescript
<div className="space-y-4">
  <CustomTimePicker
    label="Quick Select (30 min intervals)"
    step={30}
    value={quickTime}
    onChange={setQuickTime}
  />
  
  <CustomTimePicker
    label="Precise Select (5 min intervals)"
    step={5}
    value={preciseTime}
    onChange={setPreciseTime}
  />
</div>
```

### Different Sizes
```typescript
<div className="space-y-4">
  <CustomTimePicker size="small" label="Small picker" />
  <CustomTimePicker size="medium" label="Medium picker" />
  <CustomTimePicker size="large" label="Large picker" />
</div>
```

### Time Range Selection
```typescript
function TimeRangeForm() {
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  
  const isValidRange = startTime && endTime && startTime < endTime
  
  return (
    <div className="space-y-4">
      <CustomTimePicker
        label="Start Time"
        value={startTime}
        onChange={setStartTime}
        required
      />
      
      <CustomTimePicker
        label="End Time"
        value={endTime}
        onChange={setEndTime}
        error={!isValidRange && endTime.length > 0}
        helperText={!isValidRange && endTime.length > 0 ? "End time must be after start time" : ""}
        required
      />
      
      {isValidRange && (
        <div className="text-sm text-muted-foreground">
          Duration: {calculateDuration(startTime, endTime)}
        </div>
      )}
    </div>
  )
}
```

### In Event Form
```typescript
function EventForm() {
  const { register, watch, setValue, formState: { errors } } = useForm()
  const eventDate = watch("date")
  
  return (
    <form className="space-y-4">
      <CustomDatePicker
        label="Event Date"
        value={eventDate}
        onChange={(date) => setValue("date", date)}
        required
      />
      
      <div className="grid grid-cols-2 gap-4">
        <CustomTimePicker
          label="Start Time"
          onChange={(time) => setValue("startTime", time)}
          required
          error={!!errors.startTime}
          helperText={errors.startTime?.message}
        />
        
        <CustomTimePicker
          label="End Time"
          onChange={(time) => setValue("endTime", time)}
          required
          error={!!errors.endTime}
          helperText={errors.endTime?.message}
        />
      </div>
      
      <CustomButton type="submit">Create Event</CustomButton>
    </form>
  )
}
```
