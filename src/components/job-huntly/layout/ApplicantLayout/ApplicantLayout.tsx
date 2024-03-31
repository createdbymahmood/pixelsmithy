'use client'

import {Container, Grid} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {Sidebar} from '@/components/job-huntly/layout/ApplicantLayout/components'

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
        <PerfectScrollbar>
          <Container h='100%'>{children}</Container>
        </PerfectScrollbar>
      </Grid.Col>
    </Grid>
  )
}
