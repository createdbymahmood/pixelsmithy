import {Slot} from '@radix-ui/react-slot'
import type {ComponentPropsWithoutRef} from 'react'
import * as React from 'react'

import {cn} from '@/components/job-location/utils/cn'

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  asChild?: boolean
}

export const Anchor = React.forwardRef<React.ElementRef<'a'>, AnchorProps>(
  ({asChild = false, className, ...props}, ref) => {
    const Comp = asChild ? Slot : 'a'
    return <Comp ref={ref} className={cn(className)} {...props} />
  },
)

Anchor.displayName = 'Anchor'
