import {Slot} from '@radix-ui/react-slot'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/components/job-location/utils/cn'

const spaceVariants = cva('flex', {
  variants: {
    direction: {
      col: 'flex-col',
      row: 'flex-row',
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
    },
    align: {
      center: 'items-center',
    },
  },
  defaultVariants: {
    size: 'xs',
    direction: 'row',
  },
  compoundVariants: [
    /* col Spacing */
    {direction: 'col', size: 'xs', class: 'space-y-2'},
    {direction: 'col', size: 'sm', class: 'space-y-4'},
    {direction: 'col', size: 'md', class: 'space-y-8'},
    {direction: 'col', size: 'lg', class: 'space-y-12'},

    /* row Spacing */
    {direction: 'row', size: 'xs', class: 'space-x-2'},
    {direction: 'row', size: 'sm', class: 'space-x-4'},
    {direction: 'row', size: 'md', class: 'space-x-8'},
    {direction: 'row', size: 'lg', class: 'space-x-12'},
  ],
})

export interface SpaceProps
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof spaceVariants> {
  asChild?: boolean
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>(
  ({asChild = false, className, direction, size, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn(spaceVariants({size, className, direction}))}
        {...props}
      />
    )
  },
)
Space.displayName = 'Space'

export {Space, spaceVariants}
