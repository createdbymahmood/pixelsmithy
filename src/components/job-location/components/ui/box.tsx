import {cn} from '@job-location/utils/cn'
import {Slot} from '@radix-ui/react-slot'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

const boxVariants = cva('')

export interface BoxProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  asChild?: boolean
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({asChild = false, className, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp ref={ref} className={cn(boxVariants(), className)} {...props} />
    )
  },
)

Box.displayName = 'Box'

export {Box}
