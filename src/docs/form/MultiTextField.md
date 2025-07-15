
# MultiTextField

Dynamic multiple text input component that allows adding and removing text fields.

## Import

```typescript
import MultiTextField from '@/components/MultiTextField'
```

## Basic Usage

```typescript
const [values, setValues] = useState([''])

<MultiTextField
  label="Skills"
  values={values}
  onChange={setValues}
  placeholder="Enter skill"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `values` | `string[]` | - | Array of input values |
| `onChange` | `(values: string[]) => void` | - | Values change handler |
| `label` | `string` | - | Label text above inputs |
| `placeholder` | `string` | - | Placeholder text for inputs |
| `disabled` | `boolean` | `false` | Disable all inputs |
| `error` | `boolean` | `false` | Show error state |
| `helperText` | `React.ReactNode` | - | Help text below inputs |
| `required` | `boolean` | `false` | Mark field as required |
| `fullWidth` | `boolean` | `true` | Take full width of container |
| `className` | `string` | - | Additional CSS classes |
| `customClass` | `string` | - | Legacy custom classes |
| `maxFields` | `number` | `10` | Maximum number of fields |
| `minFields` | `number` | `1` | Minimum number of fields |
| `addButtonText` | `string` | `"Add"` | Text for add button |
| `removeButtonText` | `string` | `"Remove"` | Text for remove button |

## Examples

### Basic Skills List
```typescript
const [skills, setSkills] = useState([''])

<MultiTextField
  label="Skills"
  values={skills}
  onChange={setSkills}
  placeholder="Enter a skill"
  helperText="Add your professional skills"
/>
```

### Contact Information
```typescript
const [phoneNumbers, setPhoneNumbers] = useState([''])
const [emails, setEmails] = useState([''])

<div className="space-y-6">
  <MultiTextField
    label="Phone Numbers"
    values={phoneNumbers}
    onChange={setPhoneNumbers}
    placeholder="Enter phone number"
    maxFields={3}
  />
  
  <MultiTextField
    label="Email Addresses"
    values={emails}
    onChange={setEmails}
    placeholder="Enter email address"
    maxFields={5}
  />
</div>
```

### With Validation
```typescript
const [hobbies, setHobbies] = useState([''])
const [hasError, setHasError] = useState(false)

const validateHobbies = (values: string[]) => {
  const hasEmptyFields = values.some(value => value.trim() === '')
  setHasError(hasEmptyFields)
  return !hasEmptyFields
}

<MultiTextField
  label="Hobbies"
  values={hobbies}
  onChange={(newValues) => {
    setHobbies(newValues)
    validateHobbies(newValues)
  }}
  placeholder="Enter hobby"
  error={hasError}
  helperText={hasError ? "Please fill in all hobby fields" : "List your hobbies"}
  required
/>
```

### Custom Limits
```typescript
<div className="space-y-4">
  <MultiTextField
    label="Top 3 Achievements"
    values={achievements}
    onChange={setAchievements}
    placeholder="Enter achievement"
    maxFields={3}
    minFields={1}
    helperText="List up to 3 of your top achievements"
  />
  
  <MultiTextField
    label="Languages Spoken"
    values={languages}
    onChange={setLanguages}
    placeholder="Enter language"
    maxFields={8}
    minFields={1}
    addButtonText="Add Language"
    removeButtonText="Remove Language"
  />
</div>
```

### In Profile Form
```typescript
function ProfileForm() {
  const [profile, setProfile] = useState({
    name: '',
    skills: [''],
    certifications: [''],
    languages: ['']
  })
  
  const updateField = (field: string, values: string[]) => {
    setProfile(prev => ({ ...prev, [field]: values }))
  }
  
  return (
    <form className="space-y-6">
      <CustomTextField
        label="Full Name"
        value={profile.name}
        onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
        required
      />
      
      <MultiTextField
        label="Technical Skills"
        values={profile.skills}
        onChange={(values) => updateField('skills', values)}
        placeholder="e.g. JavaScript, React, Node.js"
        maxFields={10}
        required
      />
      
      <MultiTextField
        label="Certifications"
        values={profile.certifications}
        onChange={(values) => updateField('certifications', values)}
        placeholder="e.g. AWS Certified Developer"
        maxFields={5}
      />
      
      <MultiTextField
        label="Languages"
        values={profile.languages}
        onChange={(values) => updateField('languages', values)}
        placeholder="e.g. English, Spanish"
        maxFields={6}
        minFields={1}
      />
      
      <CustomButton type="submit" fullWidth>
        Save Profile
      </CustomButton>
    </form>
  )
}
```

### Dynamic Validation
```typescript
function DynamicForm() {
  const [items, setItems] = useState([''])
  const [errors, setErrors] = useState<string[]>([])
  
  const validateItems = (values: string[]) => {
    const newErrors = values.map((value, index) => {
      if (!value.trim()) return 'This field is required'
      if (value.length < 3) return 'Must be at least 3 characters'
      return ''
    })
    setErrors(newErrors)
    return newErrors.every(error => error === '')
  }
  
  return (
    <div>
      <MultiTextField
        label="Project Requirements"
        values={items}
        onChange={(newValues) => {
          setItems(newValues)
          validateItems(newValues)
        }}
        placeholder="Enter requirement"
        error={errors.some(error => error !== '')}
        helperText="Each requirement must be at least 3 characters"
        maxFields={8}
        required
      />
      
      {errors.some(error => error !== '') && (
        <div className="mt-2 space-y-1">
          {errors.map((error, index) => 
            error && (
              <div key={index} className="text-sm text-error">
                Field {index + 1}: {error}
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}
```
