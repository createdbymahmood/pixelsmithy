'use client'

import {cn} from '@job-location/utils/cn'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {Check} from 'lucide-react'
import * as React from 'react'

import {FormControl} from './form-control'
import {Label} from './label'

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({className, id, label, ...props}, ref) => {
  const defaultControlId = React.useId()
  const controlId = id ?? defaultControlId

  return (
    <FormControl>
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          className,
        )}
        id={controlId}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
          <Check className='size-4' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label ? <Label htmlFor={controlId}>{label}</Label> : null}
    </FormControl>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export {Checkbox}
