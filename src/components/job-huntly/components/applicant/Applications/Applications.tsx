import {Stack} from '@mantine/core'
import React from 'react'

interface ApplicationsProps {
  value: string
}

export function Applications({value}: ApplicationsProps) {
  return <Stack gap='xxxl'>{value}</Stack>
}
