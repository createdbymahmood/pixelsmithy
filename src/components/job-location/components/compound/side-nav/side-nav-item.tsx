import {cn} from '@job-location/utils/cn'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

import {Box} from '@/components/job-location/components/ui'

const sideNavItemVariants = cva(
  'cursor-pointer rounded-lg p-4 text-gray-400 transition-all hover:bg-primary/20 hover:text-primary',
  {
    variants: {
      active: {
        true: 'bg-primary/20 text-primary',
      },
    },
  },
)

export interface SideNavItemProps
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof sideNavItemVariants> {}

const SideNavItem = React.forwardRef<HTMLDivElement, SideNavItemProps>(
  ({active, className, ...props}, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(sideNavItemVariants({active}), className)}
        {...props}
      />
    )
  },
)

SideNavItem.displayName = 'SideNavItem'

export {SideNavItem}
