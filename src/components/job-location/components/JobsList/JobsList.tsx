import {Grid, Group, Stack, Text} from '@mantine/core'
import {range} from 'lodash-es'

import {JobCard} from '@/components/job-location/components/JobsCard'
import {JobSortMenu} from '@/components/job-location/components/JobSortMenu'

import styles from './JobList.module.scss'

function JobsListHeader() {
  return (
    <Group justify='space-between'>
      <Group gap={5}>
        <Text className={styles.count} size='xl'>
          8,520
        </Text>
        <Text className={styles.description} size='xl'>
          Jobs Found
        </Text>
      </Group>
      <JobSortMenu />
    </Group>
  )
}

export function JobsList() {
  return (
    <Stack>
      <JobsListHeader />

      <Grid gutter='xl'>
        {range(0, 3).map((idx) => (
          <Grid.Col key={idx} span={{md: 6, xl: 4}}>
            <JobCard />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  )
}