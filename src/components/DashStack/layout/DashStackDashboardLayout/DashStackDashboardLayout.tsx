'use client'

import {Box, Container, Group, rem, Stack} from '@mantine/core'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {Header, Sidebar} from './components'
import styles from './DashStackDashboardLayout.module.scss'

interface ModernizeDashboardLayoutProps {
  children: ReactNode
}

export function DashStackDashboardLayout({
  children,
}: ModernizeDashboardLayoutProps) {
  return (
    <Stack bg='red' gap={0}>
      <Header />

      <Group gap={0} w='100%' wrap='nowrap'>
        <Box style={{flexShrink: 0}}>
          <Sidebar />
        </Box>

        <Box bg='gray.0' className={styles.contentArea} flex={1} mah='100%'>
          <PerfectScrollbar>
            <Container h='100%' px='sm' py={0} size='lg'>
              <Box h='100%' py={rem(30)}>
                {children}
              </Box>
            </Container>
          </PerfectScrollbar>
        </Box>
      </Group>
    </Stack>
  )
}
