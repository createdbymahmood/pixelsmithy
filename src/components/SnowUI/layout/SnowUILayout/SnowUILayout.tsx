'use client'

import {Box, Grid} from '@mantine/core'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {Sidebar} from '@/components/SnowUI'
import {Header} from '@/components/SnowUI/components/Header/Header'
import {RightSidePanel} from '@/components/SnowUI/components/RightSidePanel/RightSidePanel'
import {SnowUIProviders} from '@/components/SnowUI/layout/SnowUIProviders'

import styles from './SnowUILayout.module.scss'

interface SnowUILayoutProps {
  children: ReactNode
}

export function SnowUILayout({children}: SnowUILayoutProps) {
  return (
    <SnowUIProviders>
      <Grid gutter={0}>
        <Grid.Col span='content'>
          <Sidebar />
        </Grid.Col>

        <Grid.Col span='auto'>
          <Header />

          <Box className={styles.contentArea}>
            <PerfectScrollbar>
              <Box className={styles.content}>{children}</Box>
            </PerfectScrollbar>
          </Box>
        </Grid.Col>

        <Grid.Col span='content'>
          <RightSidePanel />
        </Grid.Col>
      </Grid>
    </SnowUIProviders>
  )
}
