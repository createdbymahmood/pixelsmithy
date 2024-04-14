'use client'

import {Grid, Stack} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import {Content, Header, Sidebar} from './components'

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
        <Grid.Col span={{lg: 4, md: 12}}>
          <Sidebar />
        </Grid.Col>

        <Grid.Col span={{lg: 8, md: 12}}>
          <Content>{children}</Content>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
