'use client'

import {Grid} from '@mantine/core'
import React from 'react'

import {About, Header} from './components'

export function Profile() {
  return (
    <Grid>
      <Grid.Col span={{lg: 9, md: 12, base: 12}}>
        <Header />
        <About />
      </Grid.Col>
    </Grid>
  )
}
