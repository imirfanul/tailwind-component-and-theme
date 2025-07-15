
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva(
  "text-foreground",
  {
    variants: {
      variant: {
        h1: "font-gotham-black text-h1 capitalize",
        h2: "font-gotham-black text-h2 capitalize", 
        h3: "font-gotham-black text-h3 capitalize",
        h4: "font-gotham-black text-h4 capitalize",
        h5: "font-gotham-medium text-h5 capitalize",
        h6: "font-gotham-black text-h6 capitalize",
        subtitle1: "font-gotham-medium text-subtitle1",
        subtitle2: "font-gotham-medium text-subtitle2",
        body1: "font-gotham-regular text-body1",
        body2: "font-gotham-regular text-body2",
        bodyBold1: "font-gotham-medium text-body-bold1",
        bodyBold2: "font-gotham-black text-body-bold2",
        caption: "font-gotham-regular text-caption",
        overline: "font-gotham-regular text-overline uppercase",
        buttonLarge: "font-gotham-medium text-button-large uppercase",
        buttonMedium: "font-gotham-medium text-button-medium uppercase",
        buttonSmall: "font-gotham-medium text-button-small uppercase",
        inputLabel: "font-gotham-regular text-input-label",
        helperText: "font-gotham-regular text-helper-text",
        inputText: "font-gotham-regular text-input-text",
        avatarInitial: "font-poppins text-avatar-initial capitalize",
        chip: "font-gotham-regular text-chip",
        tooltip: "font-gotham-medium text-tooltip",
        alertTitle: "font-gotham-medium text-alert-title",
        tableHeader: "font-gotham-medium text-table-header",
        badgeLabel: "font-gotham-medium text-badge-label",
      },
      color: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary", 
        warning: "text-warning",
        success: "text-success",
        error: "text-error",
        info: "text-info",
        accent: "text-accent",
        disabled: "text-action-disabled",
      }
    },
    defaultVariants: {
      variant: "body1",
      color: "default",
    },
  }
)

export interface TypographyProps 
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, color, as, ...props }, ref) => {
    const Comp = as || getDefaultElement(variant)
    
    return (
      <Comp
        className={cn(typographyVariants({ variant, color, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

function getDefaultElement(variant: TypographyProps["variant"]) {
  switch (variant) {
    case "h1": return "h1"
    case "h2": return "h2" 
    case "h3": return "h3"
    case "h4": return "h4"
    case "h5": return "h5"
    case "h6": return "h6"
    case "subtitle1":
    case "subtitle2":
    case "body1":
    case "body2":
    case "bodyBold1":
    case "bodyBold2":
    case "caption":
    case "overline":
    case "buttonLarge":
    case "buttonMedium":
    case "buttonSmall":
    case "inputLabel":
    case "helperText":
    case "inputText":
    case "avatarInitial":
    case "chip":
    case "tooltip":
    case "alertTitle":
    case "tableHeader":
    case "badgeLabel":
    default:
      return "p"
  }
}

Typography.displayName = "Typography"

export { Typography, typographyVariants }
