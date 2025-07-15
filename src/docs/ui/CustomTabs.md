
# CustomTabs

Tabbed interface component for organizing content into sections.

## Import

```typescript
import CustomTabs from '@/components/CustomTabs'
```

## Basic Usage

```typescript
const tabs = [
  { label: "Tab 1", content: <div>Content 1</div> },
  { label: "Tab 2", content: <div>Content 2</div> },
  { label: "Tab 3", content: <div>Content 3</div> }
]

<CustomTabs tabs={tabs} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabItem[]` | - | Array of tab objects |
| `defaultValue` | `string` | - | Default active tab |
| `value` | `string` | - | Controlled active tab |
| `onValueChange` | `(value: string) => void` | - | Tab change handler |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Tab orientation |
| `variant` | `"default" \| "pills" \| "underline"` | `"default"` | Tab style variant |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Tab size |
| `fullWidth` | `boolean` | `false` | Make tabs full width |
| `className` | `string` | - | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disable all tabs |

## TabItem Interface

```typescript
interface TabItem {
  id: string
  label: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
}
```

## Examples

### Basic Tabs
```typescript
const basicTabs = [
  {
    id: "profile",
    label: "Profile",
    content: (
      <div className="p-4">
        <h3 className="font-semibold mb-2">User Profile</h3>
        <p>Manage your profile information here.</p>
      </div>
    )
  },
  {
    id: "settings",
    label: "Settings",
    content: (
      <div className="p-4">
        <h3 className="font-semibold mb-2">Settings</h3>
        <p>Configure your account settings.</p>
      </div>
    )
  },
  {
    id: "security",
    label: "Security",
    content: (
      <div className="p-4">
        <h3 className="font-semibold mb-2">Security</h3>
        <p>Manage security and privacy settings.</p>
      </div>
    )
  }
]

<CustomTabs tabs={basicTabs} defaultValue="profile" />
```

### With Icons
```typescript
import { User, Settings, Shield, Bell } from 'lucide-react'

const tabsWithIcons = [
  {
    id: "profile",
    label: "Profile",
    icon: <User className="h-4 w-4" />,
    content: <ProfileContent />
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
    content: <SettingsContent />
  },
  {
    id: "security",
    label: "Security",
    icon: <Shield className="h-4 w-4" />,
    content: <SecurityContent />
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell className="h-4 w-4" />,
    content: <NotificationsContent />
  }
]

<CustomTabs tabs={tabsWithIcons} variant="pills" />
```

### Different Variants
```typescript
<div className="space-y-8">
  <div>
    <h3 className="mb-4">Default Variant</h3>
    <CustomTabs tabs={tabs} variant="default" />
  </div>
  
  <div>
    <h3 className="mb-4">Pills Variant</h3>
    <CustomTabs tabs={tabs} variant="pills" />
  </div>
  
  <div>
    <h3 className="mb-4">Underline Variant</h3>
    <CustomTabs tabs={tabs} variant="underline" />
  </div>
</div>
```

### Vertical Tabs
```typescript
const verticalTabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    content: <DashboardContent />
  },
  {
    id: "analytics",
    label: "Analytics",
    content: <AnalyticsContent />
  },
  {
    id: "reports",
    label: "Reports",
    content: <ReportsContent />
  },
  {
    id: "team",
    label: "Team",
    content: <TeamContent />
  }
]

<CustomTabs 
  tabs={verticalTabs} 
  orientation="vertical"
  className="h-96"
/>
```

### Controlled Tabs
```typescript
function ControlledTabsExample() {
  const [activeTab, setActiveTab] = useState("overview")
  
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: <OverviewContent />
    },
    {
      id: "details",
      label: "Details",
      content: <DetailsContent />
    },
    {
      id: "history",
      label: "History",
      content: <HistoryContent />
    }
  ]
  
  return (
    <div>
      <CustomTabs
        tabs={tabs}
        value={activeTab}
        onValueChange={setActiveTab}
      />
      
      <div className="mt-4 text-sm text-muted-foreground">
        Current tab: {activeTab}
      </div>
    </div>
  )
}
```

### Complex Tab Content
```typescript
function ProductTabs() {
  const tabs = [
    {
      id: "description",
      label: "Description",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Product Description</h3>
          <p className="text-muted-foreground">
            Detailed information about the product features and specifications.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
      )
    },
    {
      id: "specifications",
      label: "Specifications",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Technical Specifications</h3>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-medium">Dimensions</td>
                <td className="py-2">10 x 5 x 2 inches</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Weight</td>
                <td className="py-2">1.5 lbs</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Material</td>
                <td className="py-2">Premium aluminum</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: "reviews",
      label: "Reviews (23)",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Customer Reviews</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((review) => (
              <div key={review} className="border rounded p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="font-medium">Customer {review}</div>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
                <p className="text-muted-foreground">
                  Great product! Highly recommended.
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]
  
  return <CustomTabs tabs={tabs} defaultValue="description" />
}
```

### Dashboard Tabs
```typescript
function DashboardTabs() {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <BarChart className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold">Total Users</h4>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold">Revenue</h4>
            <p className="text-2xl font-bold">$12,345</p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold">Growth</h4>
            <p className="text-2xl font-bold text-green-600">+15%</p>
          </div>
        </div>
      )
    },
    {
      id: "users",
      label: "Users",
      icon: <Users className="h-4 w-4" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">User Management</h3>
          <div className="border rounded-lg">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Email</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">John Doe</td>
                  <td className="p-4">john@example.com</td>
                  <td className="p-4">Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: <TrendingUp className="h-4 w-4" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
          <div className="h-64 border rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Chart placeholder</p>
          </div>
        </div>
      )
    }
  ]
  
  return (
    <CustomTabs 
      tabs={tabs} 
      defaultValue="overview"
      variant="underline"
      fullWidth
    />
  )
}
```

### Tabs with Disabled Items
```typescript
const tabsWithDisabled = [
  {
    id: "available",
    label: "Available",
    content: <div>This tab is available</div>
  },
  {
    id: "disabled",
    label: "Disabled",
    content: <div>This content won't show</div>,
    disabled: true
  },
  {
    id: "another",
    label: "Another",
    content: <div>Another available tab</div>
  }
]

<CustomTabs tabs={tabsWithDisabled} defaultValue="available" />
```
