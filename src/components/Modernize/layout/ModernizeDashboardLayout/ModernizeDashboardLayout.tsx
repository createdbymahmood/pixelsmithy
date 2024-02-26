'use client'

import {Box, Container, Grid, Stack} from '@mantine/core'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {Header, Sidebar} from './components'
import styles from './ModernizeDashboardLayout.module.scss'

interface ModernizeDashboardLayoutProps {
  children: ReactNode
}

export function ModernizeDashboardLayout({
  children,
}: ModernizeDashboardLayoutProps) {
  return (
    <Stack bg='general.0' gap={0}>
      <Header />

      <Grid gutter={0}>
        <Grid.Col span='content'>
          <Sidebar />
        </Grid.Col>

        <Grid.Col p={0} span='auto'>
          <Box className={styles.contentArea} mah='100%'>
            <PerfectScrollbar>
              <Container h='100%'>{children}</Container>
            </PerfectScrollbar>
          </Box>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
