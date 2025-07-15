
# Component Documentation

This directory contains comprehensive documentation for all custom components in the project.

## How to Use This Documentation

Each component has its own markdown file with:
- Import statement
- Basic usage example
- Complete props table
- Multiple usage examples
- Best practices

## File Structure

```
docs/
├── index.md                    # Main documentation index
├── README.md                   # This file
├── form/                       # Form-related components
│   ├── CustomTextField.md
│   ├── CustomSelect.md
│   ├── CustomDatePicker.md
│   └── ...
├── ui/                         # UI components
│   ├── CustomButton.md
│   ├── CustomDialog.md
│   └── ...
└── notifications/              # Notification system
    └── NotificationProvider.md
```

## Quick Reference

### Most Common Components

1. **CustomTextField** - For text inputs with validation
2. **CustomButton** - For all button needs with loading states
3. **CustomSelect** - For dropdown selections
4. **CustomDialog** - For modal dialogs
5. **NotificationProvider** - For toast notifications

### Design System

All components follow these principles:
- Use semantic color tokens (primary, secondary, error, etc.)
- Support both light and dark themes
- Consistent sizing (small, medium, large)
- Full accessibility support
- TypeScript-first with complete type definitions

### Getting Started

1. Check the main [index.md](./index.md) for component categories
2. Find the component you need
3. Copy the import statement
4. Use the basic usage example
5. Customize with the props table
6. See advanced examples for complex use cases

## Contributing

When adding new components:
1. Create documentation in the appropriate category folder
2. Follow the existing format and structure
3. Include import, props table, and examples
4. Update the main index.md file
5. Test all examples work correctly
