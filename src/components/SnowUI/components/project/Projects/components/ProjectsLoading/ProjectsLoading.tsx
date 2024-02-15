import {rem, SimpleGrid, Skeleton, Stack} from '@mantine/core'
import {range} from 'lodash-es'
import React from 'react'

export function ProjectsLoading() {
  return (
    <Stack gap='lg' w='100%'>
      <Skeleton h={rem(21)} radius='lg' w={rem(80)} />

      <SimpleGrid cols={{xl: 3, lg: 2, md: 2, sm: 1, xs: 1}}>
        {range(0, 3).map((index) => {
          return <Skeleton key={index} h={rem(113.59)} radius='lg' />
        })}
      </SimpleGrid>

      <SimpleGrid cols={{xl: 3, lg: 2, md: 2, sm: 1, xs: 1}}>
        {range(0, 10).map((index) => {
          return <Skeleton key={index} h={rem(176.8)} radius='lg' />
        })}
      </SimpleGrid>
    </Stack>
  )
}
