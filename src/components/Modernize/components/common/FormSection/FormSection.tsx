import {Card, Stack} from '@mantine/core'
import type {ReactNode} from 'react'

interface SectionWrapperProps {
  children: ReactNode
}

export function FormSection({children}: SectionWrapperProps) {
  return (
    <Card bg='white' component={Stack} gap='md' p='sm' radius='md'>
      {children}
    </Card>
  )
}
