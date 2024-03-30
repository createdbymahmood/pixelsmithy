import {rem, Stack, Title} from '@mantine/core'
import React from 'react'

import {CustomerGrowthReports} from './CustomerGrowthReports'

export function Reports() {
  return (
    <Stack gap={rem(30)}>
      <Title order={5}>Reports</Title>
      <CustomerGrowthReports />
    </Stack>
  )
}
