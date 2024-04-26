import {cn} from '@job-location/utils/cn'
import {Slot} from '@radix-ui/react-slot'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-serif text-base font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-white hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 rounded-xl px-5',
        icon: 'size-9 rounded-lg',
      },
      disabled: {
        true: 'disabled:pointer-events-none disabled:border-2 disabled:border-gray-400 disabled:bg-muted disabled:text-muted-foreground disabled:opacity-50',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({asChild = false, className, disabled, size, variant, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({variant, size, className, disabled}))}
        disabled={disabled}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export {Button, buttonVariants}
