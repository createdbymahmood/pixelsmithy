'use client'

import {
  Header,
  JOB_HUNTLY_HEADER_HEIGHT,
} from '@job-huntly/layout/ApplicantLayout/components/Sidebar/components/Header'
import {Box, Container, rem} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface DashboardPageLayoutProps {
  children: ReactNode
  title: string
  callbackURL?: string
}

export default function DashboardPageLayout({
  callbackURL,
  children,
  title,
}: DashboardPageLayoutProps) {
  return (
    <Box w='100%'>
      <Header callbackURL={callbackURL} title={title} />

      <Box
        className='overflow-y-hidden'
        h={`calc(100vh - ${rem(JOB_HUNTLY_HEADER_HEIGHT)})`}
        py='xxxl'
      >
        <PerfectScrollbar>
          <Container h='100%' px='xxxl' size='xxl'>
            {children}
          </Container>
        </PerfectScrollbar>
      </Box>
    </Box>
  )
}
