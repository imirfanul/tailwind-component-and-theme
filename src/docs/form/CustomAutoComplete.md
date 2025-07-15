
# CustomAutoComplete

Searchable dropdown component with filtering and custom option rendering.

## Import

```typescript
import CustomAutoComplete from '@/components/CustomAutoComplete'
```

## Basic Usage

```typescript
const options = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" }
]

<CustomAutoComplete
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Search fruits..."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `AutoCompleteOption[]` | `[]` | Array of options |
| `value` | `AutoCompleteOption \| null` | - | Selected value |
| `onChange` | `(value: AutoCompleteOption \| null) => void` | - | Change handler |
| `placeholder` | `string` | `"Search..."` | Placeholder text |
| `label` | `string` | - | Label text above input |
| `disabled` | `boolean` | `false` | Disable the component |
| `error` | `boolean` | `false` | Show error state |
| `helperText` | `React.ReactNode` | - | Help text below input |
| `required` | `boolean` | `false` | Mark field as required |
| `fullWidth` | `boolean` | `true` | Take full width |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Input size |
| `className` | `string` | - | Additional CSS classes |
| `noOptionsText` | `string` | `"No options"` | Text when no options found |
| `loadingText` | `string` | `"Loading..."` | Text while loading |
| `freeSolo` | `boolean` | `false` | Allow custom values |
| `multiple` | `boolean` | `false` | Allow multiple selections |

## AutoCompleteOption Interface

```typescript
interface AutoCompleteOption {
  id: string | number
  name: string
  description?: string
  avatar?: string
  disabled?: boolean
  group?: string
}
```

## Examples

### Basic AutoComplete
```typescript
const [selectedCountry, setSelectedCountry] = useState(null)

const countries = [
  { id: 'us', name: 'United States' },
  { id: 'ca', name: 'Canada' },
  { id: 'uk', name: 'United Kingdom' },
  { id: 'fr', name: 'France' },
  { id: 'de', name: 'Germany' }
]

<CustomAutoComplete
  label="Country"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  placeholder="Select a country"
  required
/>
```

### With Descriptions
```typescript
const users = [
  { 
    id: 1, 
    name: 'John Doe', 
    description: 'Software Engineer',
    avatar: '/avatars/john.jpg'
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    description: 'Product Manager',
    avatar: '/avatars/jane.jpg'
  },
  { 
    id: 3, 
    name: 'Bob Johnson', 
    description: 'Designer',
    avatar: '/avatars/bob.jpg'
  }
]

<CustomAutoComplete
  label="Assign to"
  options={users}
  value={selectedUser}
  onChange={setSelectedUser}
  placeholder="Search users..."
/>
```

### Multiple Selection
```typescript
const [selectedTags, setSelectedTags] = useState([])

const tags = [
  { id: 'react', name: 'React' },
  { id: 'vue', name: 'Vue.js' },
  { id: 'angular', name: 'Angular' },
  { id: 'svelte', name: 'Svelte' },
  { id: 'nextjs', name: 'Next.js' }
]

<CustomAutoComplete
  label="Technologies"
  options={tags}
  value={selectedTags}
  onChange={setSelectedTags}
  placeholder="Select technologies..."
  multiple
  helperText="Choose the technologies you work with"
/>
```

### Free Solo Mode
```typescript
const [customValue, setCustomValue] = useState(null)

const suggestions = [
  { id: 1, name: 'Suggestion 1' },
  { id: 2, name: 'Suggestion 2' },
  { id: 3, name: 'Suggestion 3' }
]

<CustomAutoComplete
  label="Custom Input"
  options={suggestions}
  value={customValue}
  onChange={setCustomValue}
  placeholder="Type anything or select from suggestions"
  freeSolo
  helperText="You can type custom values or select from suggestions"
/>
```

### Grouped Options
```typescript
const skillsOptions = [
  { id: 'js', name: 'JavaScript', group: 'Frontend' },
  { id: 'ts', name: 'TypeScript', group: 'Frontend' },
  { id: 'react', name: 'React', group: 'Frontend' },
  { id: 'vue', name: 'Vue.js', group: 'Frontend' },
  { id: 'node', name: 'Node.js', group: 'Backend' },
  { id: 'python', name: 'Python', group: 'Backend' },
  { id: 'django', name: 'Django', group: 'Backend' },
  { id: 'mysql', name: 'MySQL', group: 'Database' },
  { id: 'postgres', name: 'PostgreSQL', group: 'Database' }
]

<CustomAutoComplete
  label="Skills"
  options={skillsOptions}
  value={selectedSkills}
  onChange={setSelectedSkills}
  placeholder="Select your skills"
  multiple
/>
```

### Async Loading
```typescript
function AsyncAutoComplete() {
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    const searchUsers = async () => {
      if (searchTerm.length < 2) return
      
      setLoading(true)
      try {
        const response = await fetch(`/api/users?search=${searchTerm}`)
        const users = await response.json()
        setOptions(users)
      } catch (error) {
        console.error('Failed to fetch users:', error)
      } finally {
        setLoading(false)
      }
    }
    
    const debounceTimer = setTimeout(searchUsers, 300)
    return () => clearTimeout(debounceTimer)
  }, [searchTerm])
  
  return (
    <CustomAutoComplete
      label="Search Users"
      options={options}
      value={selectedUser}
      onChange={setSelectedUser}
      onInputChange={setSearchTerm}
      placeholder="Type to search users..."
      loading={loading}
      loadingText="Searching..."
      noOptionsText={searchTerm.length < 2 ? "Type at least 2 characters" : "No users found"}
    />
  )
}
```

### With Validation
```typescript
function FormWithValidation() {
  const [formData, setFormData] = useState({
    category: null,
    assignee: null,
    tags: []
  })
  const [errors, setErrors] = useState({})
  
  const validate = () => {
    const newErrors = {}
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.assignee) newErrors.assignee = 'Assignee is required'
    if (formData.tags.length === 0) newErrors.tags = 'At least one tag is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  return (
    <form className="space-y-4">
      <CustomAutoComplete
        label="Category"
        options={categories}
        value={formData.category}
        onChange={(value) => setFormData({...formData, category: value})}
        error={!!errors.category}
        helperText={errors.category}
        required
      />
      
      <CustomAutoComplete
        label="Assignee"
        options={users}
        value={formData.assignee}
        onChange={(value) => setFormData({...formData, assignee: value})}
        error={!!errors.assignee}
        helperText={errors.assignee}
        required
      />
      
      <CustomAutoComplete
        label="Tags"
        options={tags}
        value={formData.tags}
        onChange={(value) => setFormData({...formData, tags: value})}
        error={!!errors.tags}
        helperText={errors.tags}
        multiple
        required
      />
      
      <CustomButton onClick={validate} fullWidth>
        Submit
      </CustomButton>
    </form>
  )
}
```

### Custom Rendering
```typescript
const projectOptions = [
  {
    id: 1,
    name: 'Project Alpha',
    description: 'E-commerce platform',
    status: 'active',
    members: 12
  },
  {
    id: 2,
    name: 'Project Beta',
    description: 'Mobile application',
    status: 'pending',
    members: 8
  }
]

<CustomAutoComplete
  label="Project"
  options={projectOptions}
  value={selectedProject}
  onChange={setSelectedProject}
  placeholder="Select a project"
  renderOption={(option) => (
    <div className="flex items-center justify-between w-full">
      <div>
        <div className="font-medium">{option.name}</div>
        <div className="text-sm text-muted-foreground">{option.description}</div>
      </div>
      <div className="text-right">
        <div className={`text-xs px-2 py-1 rounded ${
          option.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {option.status}
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          {option.members} members
        </div>
      </div>
    </div>
  )}
/>
```

### Different Sizes
```typescript
<div className="space-y-4">
  <CustomAutoComplete
    size="small"
    options={options}
    placeholder="Small autocomplete"
  />
  
  <CustomAutoComplete
    size="medium"
    options={options}
    placeholder="Medium autocomplete"
  />
  
  <CustomAutoComplete
    size="large"
    options={options}
    placeholder="Large autocomplete"
  />
</div>
```

### Disabled States
```typescript
<div className="space-y-4">
  <CustomAutoComplete
    label="Available"
    options={options}
    placeholder="This is enabled"
  />
  
  <CustomAutoComplete
    label="Disabled"
    options={options}
    placeholder="This is disabled"
    disabled
  />
  
  <CustomAutoComplete
    label="With Disabled Options"
    options={[
      { id: 1, name: 'Available Option' },
      { id: 2, name: 'Disabled Option', disabled: true },
      { id: 3, name: 'Another Available' }
    ]}
    placeholder="Some options are disabled"
  />
</div>
```
