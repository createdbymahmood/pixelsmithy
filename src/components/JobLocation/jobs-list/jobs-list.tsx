import {Grid, Group, Stack, Text} from '@mantine/core'
import {range} from 'lodash-es'
import React from 'react'

import {JobCard} from '@/components/JobLocation/job-card/job-card'
import {sprinkles} from '@/lib/styles/sprinkles.css'

export function JobsList() {
  return (
    <Stack>
      <Group gap={5}>
        <Text className={sprinkles({fontWeight: 'bold'})}>8,520</Text>
        <Text className={sprinkles({color: 'gray.6'})}>Jobs Found</Text>
      </Group>

      <Grid gutter='xl'>
        {range(0, 3).map((idx) => (
          <Grid.Col key={idx} span={{md: 6, lg: 4}}>
            <JobCard />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  )
}
