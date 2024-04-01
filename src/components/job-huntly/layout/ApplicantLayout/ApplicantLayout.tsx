'use client'

import {Box, Container, Grid, rem} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {Sidebar} from '@/components/job-huntly/layout/ApplicantLayout/components'
import {Header} from '@/components/job-huntly/layout/ApplicantLayout/components/Sidebar/components/Header'

interface ApplicantLayoutProps {
  children: ReactNode
}

export function ApplicantLayout({children}: ApplicantLayoutProps) {
  return (
    <Grid display='flex' gutter={0} h='100vh'>
      <Grid.Col h='100%' span='content'>
        <Sidebar />
      </Grid.Col>

      <Grid.Col h='100%' span='auto'>
        <Header />

        <Box h={`calc(100% - ${rem(107)})`}>
          <PerfectScrollbar>
            <Container h='100%' px='xxxl' py='xl' size='xl'>
              {children}
            </Container>
          </PerfectScrollbar>
        </Box>
      </Grid.Col>
    </Grid>
  )
}
