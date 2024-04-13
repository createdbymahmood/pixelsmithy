import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  Title,
} from '@mantine/core'
import {ArrowRight} from '@phosphor-icons/react'
import React from 'react'

import {GridJobCard} from '@/components/job-huntly/components/applicant/dashboard/Jobs/GridJobCard'
import {jobs} from '@/components/job-huntly/mock/jobs'

function Header() {
  const CTARightSection = (
    <Box className='icon-size-lg' component={ArrowRight} weight='bold' />
  )

  return (
    <Group justify='space-between' p='xl'>
      <Title order={5}>Job Updates</Title>

      <Button
        fw='600'
        mt='auto'
        pr={0}
        rightSection={CTARightSection}
        size='md'
        variant='transparent'
      >
        View all
      </Button>
    </Group>
  )
}

export function JobUpdates() {
  const updates = jobs.map((job) => {
    return (
      <Grid.Col key={job.id} span={{xl: 3, lg: 4, md: 6, xs: 12}}>
        <GridJobCard {...job} />
      </Grid.Col>
    )
  })
  return (
    <Paper withBorder>
      <Stack gap={0}>
        <Header />
        <Divider />
        <Grid p='xl'>{updates}</Grid>
      </Stack>
    </Paper>
  )
}
