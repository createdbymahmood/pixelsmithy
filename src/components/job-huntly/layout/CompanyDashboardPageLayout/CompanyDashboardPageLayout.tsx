'use client'

import type {MantineSpacing} from '@mantine/core'
import {Box, Container, rem} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {
  COMPANY_DASHBOARD_PAGE_LAYAOUT_HEADER_HEIGHT,
  Header,
} from './components'

interface CompanyDashboardPageLayoutProps {
  children: ReactNode
  p?: MantineSpacing
}

export function CompanyDashboardPageLayout({
  children,
  p = 'xxxl',
}: CompanyDashboardPageLayoutProps) {
  return (
    <Box className='overflow-hidden' w='100%'>
      <Header />

      <Box
        className='overflow-y-hidden'
        h={`calc(100vh - ${rem(COMPANY_DASHBOARD_PAGE_LAYAOUT_HEADER_HEIGHT)})`}
        pb='xs'
      >
        <PerfectScrollbar>
          <Container h='100%' pos='relative' px={p} py={p} size='xxl'>
            {children}
          </Container>
        </PerfectScrollbar>
      </Box>
    </Box>
  )
}
