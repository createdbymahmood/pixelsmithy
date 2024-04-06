'use client'

import {Stack} from '@mantine/core'
import React from 'react'

import {Header, List} from './components'

export function ApplicationsList() {
  return (
    <Stack gap={0}>
      <Header />
      <List />
    </Stack>
  )
}
