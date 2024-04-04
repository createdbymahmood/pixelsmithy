'use client'

import {Box, Container, rem} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {Header} from '@/components/job-huntly/layout/ApplicantLayout/components/Sidebar/components/Header'

interface DashboardPageLayoutProps {
  children: ReactNode
  title: string
}

export function DashboardPageLayout({
  children,
  title,
}: DashboardPageLayoutProps) {
  return (
    <Box w='100%'>
      <Header title={title} />

      <Box
        className='overflow-y-hidden'
        h={`calc(100vh - ${rem(107)})`}
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
