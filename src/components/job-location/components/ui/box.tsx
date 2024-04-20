import {cn} from '@job-location/utils/cn'
import {Slot} from '@radix-ui/react-slot'
import * as React from 'react'

export interface BoxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({asChild = false, className, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div'
    return <Comp ref={ref} className={cn(className)} {...props} />
  },
)

Box.displayName = 'Box'

export {Box}
