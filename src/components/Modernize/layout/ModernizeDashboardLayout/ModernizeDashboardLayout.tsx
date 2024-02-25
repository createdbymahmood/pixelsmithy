'use client'

import {Container} from '@mantine/core'
import type {ReactNode} from 'react'

interface ModernizeDashboardLayoutProps {
  children: ReactNode
}

export function ModernizeDashboardLayout({
  children,
}: ModernizeDashboardLayoutProps) {
  return <Container>{children}</Container>
}
