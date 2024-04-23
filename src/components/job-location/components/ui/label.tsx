'use client'

import {cn} from '@job-location/utils/cn'
import * as LabelPrimitive from '@radix-ui/react-label'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

const labelVariants = cva(
  'line-clamp-1 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      size: {
        default: 'text-base',
        sm: 'text-sm',
        xs: 'text-xs',
      },
    },
  },
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({className, size, ...props}, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({size}), className)}
    {...props}
  />
))

Label.displayName = LabelPrimitive.Root.displayName

export {Label}
