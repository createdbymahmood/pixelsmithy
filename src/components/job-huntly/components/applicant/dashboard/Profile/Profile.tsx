'use client'

import {Grid} from '@mantine/core'
import React from 'react'

import {Header} from './components'

export function Profile() {
  return (
    <Grid>
      <Grid.Col span={{xl: 9, lg: 8, md: 12, base: 12}}>
        <Header />
      </Grid.Col>
    </Grid>
  )
}
