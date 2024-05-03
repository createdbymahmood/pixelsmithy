import {Slot} from '@radix-ui/react-slot'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/components/job-location/utils/cn'

const stackVariants = cva('flex flex-col', {
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
  },
  defaultVariants: {
    gap: 'xs',
    align: 'stretch',
    justify: 'start',
  },
})

interface StackVariantsProps extends VariantProps<typeof stackVariants> {}
interface StackElementProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

interface StackCommonProps {
  asChild?: boolean
}
interface StackProps
  extends StackVariantsProps,
    StackElementProps,
    StackCommonProps {}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({align, asChild = false, className, gap, justify, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn(stackVariants({gap, className, align, justify}))}
        {...props}
      />
    )
  },
)
Stack.displayName = 'Stack'

export {Stack, stackVariants}
