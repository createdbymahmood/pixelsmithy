import {Box} from '@mantine/core'
import type {ComponentProps, ReactNode} from 'react'
import {forwardRef} from 'react'

interface ScrollableContentProps extends ComponentProps<typeof Box<'div'>> {
  h: string
  children: ReactNode
}

export const ScrollableContent = forwardRef<
  HTMLDivElement,
  ScrollableContentProps
>(function ScrollableContent({children, h, ...props}, ref) {
  return (
    <Box ref={ref} h={h} style={{overflow: 'auto'}} {...props}>
      {children}
    </Box>
  )
})
