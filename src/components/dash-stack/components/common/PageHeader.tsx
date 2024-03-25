import {Title} from '@mantine/core'
import type {ReactNode} from 'react'

interface PageHeaderProps {
  children: ReactNode
}

export function PageHeader({children}: PageHeaderProps) {
  return <Title order={4}>{children}</Title>
}
