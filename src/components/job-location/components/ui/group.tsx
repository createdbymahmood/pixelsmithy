import {Slot} from '@radix-ui/react-slot'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/components/job-location/utils/cn'

const groupVariants = cva('flex flex-row flex-wrap', {
  variants: {
    gap: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2.5',
      md: 'gap-4',
      lg: 'gap-8',
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
    noWrap: {
      true: 'flex-nowrap',
    },
  },
  defaultVariants: {
    gap: 'xs',
    align: 'center',
    justify: 'start',
  },
})

export interface GroupProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof groupVariants> {
  asChild?: boolean
}

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  (
    {align, asChild = false, className, gap, justify, noWrap, ...props},
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn(groupVariants({gap, className, align, justify, noWrap}))}
        {...props}
      />
    )
  },
)
Group.displayName = 'Group'

export {Group, groupVariants}
