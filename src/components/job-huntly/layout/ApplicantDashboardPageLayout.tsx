'use client'

import {
  Header,
  JOB_HUNTLY_HEADER_HEIGHT,
} from '@job-huntly/layout/DashboardLayout/components/Sidebar/components/Header'
import type {MantineSpacing} from '@mantine/core'
import {Box, Container, rem} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface ApplicantDashboardPageLayoutProps {
  children: ReactNode
  title: string
  callbackURL?: string
  p?: MantineSpacing
}

export default function ApplicantDashboardPageLayout({
  callbackURL,
  children,
  p = 'xxxl',
  title,
}: ApplicantDashboardPageLayoutProps) {
  return (
    <Box w='100%'>
      <Header callbackURL={callbackURL} title={title} />

      <Box
        className='overflow-y-hidden'
        h={`calc(100vh - ${rem(JOB_HUNTLY_HEADER_HEIGHT)})`}
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
