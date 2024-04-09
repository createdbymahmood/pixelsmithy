'use client'

import {Grid, Stack} from '@mantine/core'
import React from 'react'

import {About, Experiences, Header} from './components'

export function Profile() {
  return (
    <Grid>
      <Grid.Col span={{lg: 9, md: 12, base: 12}}>
        <Stack gap='xl'>
          <Header />
          <About />
          <Experiences />
        </Stack>
      </Grid.Col>
    </Grid>
  )
}
