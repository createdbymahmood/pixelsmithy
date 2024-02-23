'use client'

import {Box, Container, Grid} from '@mantine/core'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {useShallow} from 'zustand/react/shallow'

import {useSnowUILayoutStore} from '@/components/SnowUI/layout/store/layout'

import {Header, RightSidePanel, Sidebar} from './components'
import styles from './SnowUILayout.module.scss'

interface SnowUILayoutProps {
  children: ReactNode
}

export function SnowUIDashboardLayout({children}: SnowUILayoutProps) {
  const {notificationsOpen, sidebarOpen} = useSnowUILayoutStore(
    useShallow((state) => ({
      sidebarOpen: state.sidebarOpen,
      notificationsOpen: state.notificationsOpen,
    })),
  )

  return (
    <Grid gutter={0}>
      {sidebarOpen ? (
        <Grid.Col span='content'>
          <Sidebar />
        </Grid.Col>
      ) : null}

      <Grid.Col span='auto'>
        <Header />

        <Box className={styles.contentArea} mah='100%' py='lg'>
          <PerfectScrollbar>
            <Container h='100%'>{children}</Container>
          </PerfectScrollbar>
        </Box>
      </Grid.Col>

      {notificationsOpen ? (
        <Grid.Col span='content'>
          <RightSidePanel />
        </Grid.Col>
      ) : null}
    </Grid>
  )
}
