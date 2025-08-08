import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const japaneseButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        hero: "bg-gradient-hero text-white shadow-elegant hover:shadow-glow transform hover:scale-105 font-bold border border-white/20",
        primary: "bg-primary text-primary-foreground shadow hover:bg-primary-hover",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        accent: "bg-gradient-accent text-accent-foreground shadow-sm hover:bg-accent/80",
        gold: "bg-japanese-gold text-japanese-gold-foreground shadow-sm hover:bg-japanese-gold/80",
        navy: "bg-navy text-navy-foreground shadow-sm hover:bg-navy/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-lg",
        xl: "h-14 rounded-lg px-10 text-xl",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface JapaneseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof japaneseButtonVariants> {
  asChild?: boolean
}

const JapaneseButton = React.forwardRef<HTMLButtonElement, JapaneseButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(japaneseButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
JapaneseButton.displayName = "JapaneseButton"

export { JapaneseButton, japaneseButtonVariants }