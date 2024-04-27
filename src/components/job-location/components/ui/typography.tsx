import {cn} from '@job-location/utils/cn'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

const typographyVariants = cva('', {
  variants: {
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    letterSpacing: {
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest',
    },
    family: {
      serif: 'font-serif',
      sans: 'font-sans',
    },
  },
  defaultVariants: {
    size: 'base',
    letterSpacing: 'normal',
    weight: 'normal',
    family: 'sans',
  },
})

export interface TypographyProps
  extends React.ComponentPropsWithoutRef<'p'>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({className, family, letterSpacing, size, weight, ...props}, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          typographyVariants({weight, letterSpacing, size, family, className}),
        )}
        {...props}
      />
    )
  },
)
Typography.displayName = 'Typography'

export {Typography, typographyVariants}
