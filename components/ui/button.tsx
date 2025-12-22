import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg',
        outline:
          'border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/30',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        // New premium variants
        gradient:
          'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] btn-shine',
        glow:
          'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-[1.02] active:scale-[0.98] pulse-glow',
        glass:
          'bg-white/20 backdrop-blur-md border border-white/30 text-foreground hover:bg-white/30 hover:border-white/40 shadow-lg',
        'glass-primary':
          'bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-700 hover:bg-orange-500/30 hover:border-orange-500/40 shadow-lg',
        premium:
          'bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-xl hover:shadow-2xl hover:from-orange-500 hover:to-amber-600 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 rounded-lg px-4 text-xs',
        lg: 'h-12 rounded-xl px-8 text-base',
        xl: 'h-14 rounded-2xl px-10 text-lg',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8 rounded-lg',
        'icon-lg': 'h-12 w-12 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
