import React from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { 
  ArrowRight, 
  Download, 
  Upload, 
  Plus, 
  Minus, 
  Heart, 
  Star, 
  Settings 
} from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Typography variant="h6" className="font-gotham">
            Agency Framework
          </Typography>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12">
          <Typography variant="h1" className="mb-4">
            Agency Framework Design System
          </Typography>
          <Typography variant="body1" color="muted" className="mb-8 max-w-2xl mx-auto">
            A comprehensive Tailwind CSS component library based on your design specifications.
            Features dark mode support, multiple button variants, and complete typography system.
          </Typography>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" size="large" endIcon={<ArrowRight />}>
              Get Started
            </Button>
            <Button variant="primary-outline" size="large">
              Documentation
            </Button>
          </div>
        </section>

        {/* Button Showcase */}
        <section>
          <Typography variant="h2" className="mb-8">Button Components</Typography>
          
          {/* Contained Buttons */}
          <div className="mb-8">
            <Typography variant="h4" className="mb-4">Contained Buttons</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-4">
                <Typography variant="subtitle2" color="muted">Large</Typography>
                <div className="space-y-2">
                  <Button variant="primary" size="large" fullWidth>PRIMARY</Button>
                  <Button variant="secondary" size="large" fullWidth>SECONDARY</Button>
                  <Button variant="warning" size="large" fullWidth>WARNING</Button>
                  <Button variant="success" size="large" fullWidth>SUCCESS</Button>
                  <Button variant="error" size="large" fullWidth>ERROR</Button>
                  <Button variant="info" size="large" fullWidth>INFO</Button>
                  <Button variant="accent" size="large" fullWidth>ACCENT</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <Typography variant="subtitle2" color="muted">Medium</Typography>
                <div className="space-y-2">
                  <Button variant="primary" size="medium" fullWidth>PRIMARY</Button>
                  <Button variant="secondary" size="medium" fullWidth>SECONDARY</Button>
                  <Button variant="warning" size="medium" fullWidth>WARNING</Button>
                  <Button variant="success" size="medium" fullWidth>SUCCESS</Button>
                  <Button variant="error" size="medium" fullWidth>ERROR</Button>
                  <Button variant="info" size="medium" fullWidth>INFO</Button>
                  <Button variant="accent" size="medium" fullWidth>ACCENT</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <Typography variant="subtitle2" color="muted">Small</Typography>
                <div className="space-y-2">
                  <Button variant="primary" size="small" fullWidth>PRIMARY</Button>
                  <Button variant="secondary" size="small" fullWidth>SECONDARY</Button>
                  <Button variant="warning" size="small" fullWidth>WARNING</Button>
                  <Button variant="success" size="small" fullWidth>SUCCESS</Button>
                  <Button variant="error" size="small" fullWidth>ERROR</Button>
                  <Button variant="info" size="small" fullWidth>INFO</Button>
                  <Button variant="accent" size="small" fullWidth>ACCENT</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <Typography variant="subtitle2" color="muted">Disabled</Typography>
                <div className="space-y-2">
                  <Button variant="primary" size="medium" fullWidth disabled>PRIMARY</Button>
                  <Button variant="secondary" size="medium" fullWidth disabled>SECONDARY</Button>
                  <Button variant="warning" size="medium" fullWidth disabled>WARNING</Button>
                  <Button variant="success" size="medium" fullWidth disabled>SUCCESS</Button>
                  <Button variant="error" size="medium" fullWidth disabled>ERROR</Button>
                  <Button variant="info" size="medium" fullWidth disabled>INFO</Button>
                  <Button variant="accent" size="medium" fullWidth disabled>ACCENT</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Outlined Buttons */}
          <div className="mb-8">
            <Typography variant="h4" className="mb-4">Outlined Buttons</Typography>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary-outline" size="large">PRIMARY</Button>
              <Button variant="secondary-outline" size="large">SECONDARY</Button>
              <Button variant="warning-outline" size="large">WARNING</Button>
              <Button variant="success-outline" size="large">SUCCESS</Button>
              <Button variant="error-outline" size="large">ERROR</Button>
              <Button variant="info-outline" size="large">INFO</Button>
              <Button variant="accent-outline" size="large">ACCENT</Button>
            </div>
          </div>

          {/* Text Buttons */}
          <div className="mb-8">
            <Typography variant="h4" className="mb-4">Text Buttons</Typography>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary-text" size="large">PRIMARY</Button>
              <Button variant="secondary-text" size="large">SECONDARY</Button>
              <Button variant="warning-text" size="large">WARNING</Button>
              <Button variant="success-text" size="large">SUCCESS</Button>
              <Button variant="error-text" size="large">ERROR</Button>
              <Button variant="info-text" size="large">INFO</Button>
              <Button variant="accent-text" size="large">ACCENT</Button>
            </div>
          </div>

          {/* Icon Buttons */}
          <div className="mb-8">
            <Typography variant="h4" className="mb-4">Icon Buttons</Typography>
            <div className="space-y-4">
              <div>
                <Typography variant="subtitle2" color="muted" className="mb-2">With Start Icons</Typography>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" startIcon={<Download />}>Download</Button>
                  <Button variant="secondary" startIcon={<Upload />}>Upload</Button>
                  <Button variant="success" startIcon={<Plus />}>Add Item</Button>
                  <Button variant="error" startIcon={<Minus />}>Remove</Button>
                </div>
              </div>
              
              <div>
                <Typography variant="subtitle2" color="muted" className="mb-2">With End Icons</Typography>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" endIcon={<ArrowRight />}>Continue</Button>
                  <Button variant="warning" endIcon={<Settings />}>Settings</Button>
                  <Button variant="info" endIcon={<Star />}>Favorite</Button>
                  <Button variant="accent" endIcon={<Heart />}>Like</Button>
                </div>
              </div>
              
              <div>
                <Typography variant="subtitle2" color="muted" className="mb-2">Icon Only</Typography>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="icon"><Download /></Button>
                  <Button variant="secondary" size="icon"><Upload /></Button>
                  <Button variant="success" size="icon"><Plus /></Button>
                  <Button variant="error" size="icon"><Minus /></Button>
                  <Button variant="info" size="icon"><Star /></Button>
                  <Button variant="accent" size="icon"><Heart /></Button>
                </div>
              </div>
            </div>
          </div>

          {/* Loading States */}
          <div className="mb-8">
            <Typography variant="h4" className="mb-4">Loading States</Typography>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" loading>Loading...</Button>
              <Button variant="secondary" loading>Processing</Button>
              <Button variant="success" loading>Saving</Button>
            </div>
          </div>
        </section>

        {/* Typography Showcase */}
        <section>
          <Typography variant="h2" className="mb-8">Typography System</Typography>
          <div className="space-y-6">
            <div>
              <Typography variant="h1">H1 - Almost Before We Knew It, We Had...</Typography>
              <Typography variant="caption" color="muted">96px • Bold • Capitalize • 60px</Typography>
            </div>
            <div>
              <Typography variant="h2">H2 - Almost Before We Knew It, We Had Left The Ground.</Typography>
              <Typography variant="caption" color="muted">64px • Bold • Capitalize • 64px</Typography>
            </div>
            <div>
              <Typography variant="h3">H3 - Almost Before We Knew It, We Had Left The Ground.</Typography>
              <Typography variant="caption" color="muted">32px • Bold • Capitalize • 40px</Typography>
            </div>
            <div>
              <Typography variant="h4">H4 - Almost Before We Knew It, We Had Left The Ground.</Typography>
              <Typography variant="caption" color="muted">24px • Bold • Capitalize • 30px</Typography>
            </div>
            <div>
              <Typography variant="h5">H5 - Almost Before We Knew It, We Had Left The Ground.</Typography>
              <Typography variant="caption" color="muted">20px • Bold • Capitalize • 25px</Typography>
            </div>
            <div>
              <Typography variant="h6">H6 - Almost Before We Knew It, We Had Left The Ground.</Typography>
              <Typography variant="caption" color="muted">16px • Bold • Capitalize • 20px</Typography>
            </div>
            <div>
              <Typography variant="subtitle1">Subtitle1 - Almost before we knew it, we had left the ground.</Typography>
              <Typography variant="caption" color="muted">16px • Medium • Sentence • 24px</Typography>
            </div>
            <div>
              <Typography variant="body1">Body1 - Almost before we knew it, we had left the ground.</Typography>
              <Typography variant="caption" color="muted">16px • Regular • Sentence • 24px</Typography>
            </div>
            <div>
              <Typography variant="body2">Body2 - Almost before we knew it, we had left the ground.</Typography>
              <Typography variant="caption" color="muted">14px • Regular • Sentence • 20px</Typography>
            </div>
            <div>
              <Typography variant="caption">Caption - Almost before we knew it, we had left the ground.</Typography>
              <Typography variant="caption" color="muted">12px • Regular • Sentence • 16px</Typography>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <Typography variant="h2" className="mb-8">Color Palette</Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="h-20 bg-primary rounded-md"></div>
              <Typography variant="subtitle2">Primary</Typography>
              <Typography variant="caption" color="muted">#1B1464</Typography>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-secondary rounded-md"></div>
              <Typography variant="subtitle2">Secondary</Typography>
              <Typography variant="caption" color="muted">#2578FF</Typography>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-warning rounded-md"></div>
              <Typography variant="subtitle2">Warning</Typography>
              <Typography variant="caption" color="muted">#FF5714</Typography>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-success rounded-md"></div>
              <Typography variant="subtitle2">Success</Typography>
              <Typography variant="caption" color="muted">#3ED044</Typography>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-error rounded-md"></div>
              <Typography variant="subtitle2">Error</Typography>
              <Typography variant="caption" color="muted">#DD3C71</Typography>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-info rounded-md"></div>
              <Typography variant="subtitle2">Info</Typography>
              <Typography variant="caption" color="muted">#756AEA</Typography>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-accent rounded-md"></div>
              <Typography variant="subtitle2">Accent</Typography>
              <Typography variant="caption" color="muted">#DD13FF</Typography>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-muted rounded-md border"></div>
              <Typography variant="subtitle2">Muted</Typography>
              <Typography variant="caption" color="muted">Neutral</Typography>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
