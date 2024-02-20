'use client'

import {Box, Container, Grid} from '@mantine/core'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {Sidebar} from '@/components/SnowUI'
import {Header} from '@/components/SnowUI/layout/SnowUIDashboardLayout/components/Header/Header'
import {RightSidePanel} from '@/components/SnowUI/layout/SnowUIDashboardLayout/components/RightSidePanel/RightSidePanel'

import styles from './SnowUILayout.module.scss'

interface SnowUILayoutProps {
  children: ReactNode
}

export function SnowUIDashboardLayout({children}: SnowUILayoutProps) {
  return (
    <Grid gutter={0}>
      <Grid.Col span='content'>
        <Sidebar />
      </Grid.Col>

      <Grid.Col span='auto'>
        <Header />

        <Box className={styles.contentArea} mah='100%' py='lg'>
          <PerfectScrollbar>
            <Container h='100%'>{children}</Container>
          </PerfectScrollbar>
        </Box>
      </Grid.Col>

      <Grid.Col span='content'>
        <RightSidePanel />
      </Grid.Col>
    </Grid>
  )
}
