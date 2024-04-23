'use client'

import {cn} from '@job-location/utils/cn'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import {Check} from 'lucide-react'
import * as React from 'react'

import {Stack} from '@/components/job-location/components/ui'

import {Label} from './label'

const checkboxVariants = cva(
  'shrink-0 rounded-sm border border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
  {
    variants: {
      size: {
        default: 'size-5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  label?: string
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({className, id, label, size, ...props}, ref) => {
  const defaultControlId = React.useId()
  const controlId = id ?? defaultControlId

  return (
    <Stack gap='sm'>
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(checkboxVariants({size}), className)}
        id={controlId}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
          <Check className='size-4' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label ? (
        <Label htmlFor={controlId} size={size}>
          {label}
        </Label>
      ) : null}
    </Stack>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export {Checkbox, checkboxVariants}
