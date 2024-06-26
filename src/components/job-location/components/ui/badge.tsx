import {cn} from '@job-location/utils/cn'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

import {Box} from '@/components/job-location/components/ui/box'

const badgeVariants = cva(
  'peer inline-flex items-center rounded-full px-2.5 py-0.5 font-serif text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        disabled: 'border-transparent bg-gray-100 text-gray-400',
        'job-description-tag':
          'rounded-none bg-gray-100 px-3 py-2 text-sm font-normal text-gray-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({className, variant, ...props}: BadgeProps) {
  return <Box className={cn(badgeVariants({variant}), className)} {...props} />
}

export {Badge, badgeVariants}
