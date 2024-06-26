import {Card, rem, Skeleton, Stack, Title} from '@mantine/core'
import React from 'react'

export function SalesChart() {
  return (
    <Card component={Stack}>
      <Title order={5}>Sales Details</Title>
      <Skeleton h={rem(320)} radius='md' />
    </Card>
  )
}
