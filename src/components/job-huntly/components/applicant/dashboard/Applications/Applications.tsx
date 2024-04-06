import {Stack} from '@mantine/core'
import React from 'react'

import {ApplicationsList} from './components'

interface ApplicationsProps {
  value: string
}

export function Applications({value}: ApplicationsProps) {
  return (
    <Stack gap='xxxl'>
      <ApplicationsList />
    </Stack>
  )
}
