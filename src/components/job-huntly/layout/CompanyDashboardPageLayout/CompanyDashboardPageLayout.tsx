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
  callbackURL?: string
  p?: MantineSpacing
}

export function CompanyDashboardPageLayout({
  callbackURL,
  children,
  p = 'xxxl',
}: CompanyDashboardPageLayoutProps) {
  return (
    <Box w='100%'>
      <Header />

      <Box
        className='overflow-y-hidden'
        h={`calc(100vh - ${rem(COMPANY_DASHBOARD_PAGE_LAYAOUT_HEADER_HEIGHT)})`}
        py={p}
      >
        <PerfectScrollbar>
          <Container h='100%' px={p} size='xxl'>
            {children}
          </Container>
        </PerfectScrollbar>
      </Box>
    </Box>
  )
}
