'use client'

import {Container, Grid, GridItem} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import type {ReactNode} from 'react'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface PrelineLayoutProps {
  children: ReactNode
}
const Sidebar = dynamic(
  () => import('./components/Sidebar').then((m) => m.Sidebar),
  {
    ssr: false,
  },
)

export function PrelineLayout({children}: PrelineLayoutProps) {
  return (
    <Grid gap={0} gridTemplateColumns={['0 auto', '260px auto']} h='100vh'>
      <GridItem overflowY={['visible', 'hidden']}>
        <Sidebar />
      </GridItem>

      <GridItem mt={14} overflowY='hidden'>
        <PerfectScrollbar>
          <Container maxW='container.lg' px={2} width='100%'>
            {children}
          </Container>
        </PerfectScrollbar>
      </GridItem>
    </Grid>
  )
}
