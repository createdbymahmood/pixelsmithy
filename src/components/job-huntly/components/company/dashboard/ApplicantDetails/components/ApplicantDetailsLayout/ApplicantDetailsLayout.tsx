'use client'

import {Grid, Stack} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import {Header, Sidebar} from './components'

interface ApplicantDetailsLayoutProps {
  children: ReactNode
}

export function ApplicantDetailsLayout({
  children,
}: ApplicantDetailsLayoutProps) {
  return (
    <Stack>
      <Header />

      <Grid>
        <Grid.Col span={{xl: 3, lg: 4, md: 12}}>
          <Sidebar />
        </Grid.Col>

        <Grid.Col span={{xl: 9, lg: 8, md: 12}}>{children}</Grid.Col>
      </Grid>
    </Stack>
  )
}
