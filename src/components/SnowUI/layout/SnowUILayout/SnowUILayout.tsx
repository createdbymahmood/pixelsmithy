'use client'

import {Box, Container, Grid} from '@mantine/core'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {Sidebar} from '@/components/SnowUI'
import {Header} from '@/components/SnowUI/layout/SnowUILayout/components/Header/Header'
import {MobileVersionNotice} from '@/components/SnowUI/layout/SnowUILayout/components/MobileVersionNotice/MobileVersionNotice'
import {RightSidePanel} from '@/components/SnowUI/layout/SnowUILayout/components/RightSidePanel/RightSidePanel'
import {SnowUIProviders} from '@/components/SnowUI/layout/SnowUIProviders'

import styles from './SnowUILayout.module.scss'

interface SnowUILayoutProps {
  children: ReactNode
}

export function SnowUILayout({children}: SnowUILayoutProps) {
  return (
    <SnowUIProviders>
      <MobileVersionNotice>
        <Grid gutter={0}>
          <Grid.Col span='content'>
            <Sidebar />
          </Grid.Col>

          <Grid.Col span='auto'>
            <Header />

            <Box className={styles.contentArea}>
              <PerfectScrollbar>
                <Box mih='100%' p='lg'>
                  <Container className={styles.content}>{children}</Container>
                </Box>
              </PerfectScrollbar>
            </Box>
          </Grid.Col>

          <Grid.Col span='content'>
            <RightSidePanel />
          </Grid.Col>
        </Grid>
      </MobileVersionNotice>
    </SnowUIProviders>
  )
}
