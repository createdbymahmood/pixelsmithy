import {cn} from '@job-location/utils/cn'
// import {Stack} from '@phosphor-icons/react'
import * as React from 'react'

import {Label} from '@/components/job-location/components/ui/label'
import {Stack} from '@/components/job-location/components/ui/stack'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, id, label, type, ...props}, ref) => {
    const defaultControlId = React.useId()
    const controlId = id ?? defaultControlId

    return (
      <Stack align='start' gap='none'>
        {label ? (
          <Label
            className='font-serif font-semibold'
            htmlFor={controlId}
            size='xs'
          >
            {label}
          </Label>
        ) : null}

        <input
          ref={ref}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          type={type}
          {...props}
        />
      </Stack>
    )
  },
)
Input.displayName = 'Input'

export {Input}
