import {cn} from '@job-location/utils/cn'
import {Slot} from '@radix-ui/react-slot'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import * as React from 'react'

const containerVariants = cva('container')

export interface ContainerProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({asChild = false, className, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn(containerVariants(), className)}
        {...props}
      />
    )
  },
)
Container.displayName = 'Container'

export {Container, containerVariants}
