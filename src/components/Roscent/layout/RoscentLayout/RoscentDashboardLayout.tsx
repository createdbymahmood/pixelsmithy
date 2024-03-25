'use client'

import {Box, Container, Grid} from '@mantine/core'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {useShallow} from 'zustand/react/shallow'

import {useRoscentLayoutStore} from '@/components/roscent/layout/RoscentLayout/store/layout'

import {Header, RightSidePanel, Sidebar} from './components'
import styles from './RoscentLayout.module.scss'

interface RoscentDashboardLayoutProps {
  children: ReactNode
}

export function RoscentDashboardLayout({
  children,
}: RoscentDashboardLayoutProps) {
  const {notificationsOpen, sidebarOpen} = useRoscentLayoutStore(
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
