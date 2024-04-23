import {Slot} from '@radix-ui/react-slot'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/components/job-location/utils/cn'

const stackVariants = cva('flex', {
  variants: {
    direction: {
      col: 'flex-col',
      row: 'flex-row',
    },
    gap: {
      none: '',
      xs: '',
      sm: '',
      md: '',
      lg: '',
    },
    align: {
      end: 'items-end',
      center: 'items-center',
      start: 'items-start',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      normal: 'justify-normal',
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      stretch: 'justify-stretch',
    },
  },
  defaultVariants: {
    gap: 'xs',
    direction: 'row',
    align: 'center',
    justify: 'start',
  },
  compoundVariants: [
    /* col Spacing */
    {direction: 'col', gap: 'none', class: 'space-y-0'},
    {direction: 'col', gap: 'xs', class: 'space-y-1'},
    {direction: 'col', gap: 'sm', class: 'space-y-2.5'},
    {direction: 'col', gap: 'md', class: 'space-y-4'},
    {direction: 'col', gap: 'lg', class: 'space-y-8'},

    /* row Spacing */
    {direction: 'row', gap: 'none', class: 'space-x-0'},
    {direction: 'row', gap: 'xs', class: 'space-x-1'},
    {direction: 'row', gap: 'sm', class: 'space-x-2.5'},
    {direction: 'row', gap: 'md', class: 'space-x-4'},
    {direction: 'row', gap: 'lg', class: 'space-x-8'},
  ],
})

export interface StackProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  asChild?: boolean
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {align, asChild = false, className, direction, gap, justify, ...props},
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn(
          stackVariants({gap, className, direction, align, justify}),
        )}
        {...props}
      />
    )
  },
)
Stack.displayName = 'Stack'

export {Stack, stackVariants}
