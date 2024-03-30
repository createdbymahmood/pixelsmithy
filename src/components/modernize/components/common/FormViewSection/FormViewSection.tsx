import {rem, Stack, Text} from '@mantine/core'
import type {ReactNode} from 'react'

interface FormViewSectionProps {
  title: string
  description: string
  children: ReactNode
}

export function FormViewSection({
  children,
  description,
  title,
}: FormViewSectionProps) {
  return (
    <Stack gap={rem(24)}>
      <Stack gap={rem(4)}>
        <Text fw='bold'>{title}</Text>
        <Text c='general.5' size='sm'>
          {description}
        </Text>
      </Stack>

      {children}
    </Stack>
  )
}
