'use client'

import {
  Box,
  Button,
  Card,
  Group,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {ArrowRight} from '@phosphor-icons/react/dist/ssr'
import type {ReactNode} from 'react'
import React from 'react'

import styles from './Stats.module.scss'

interface StatCardProps {
  title: string
  children: ReactNode
}

function StatCard({children, title}: StatCardProps) {
  return (
    <Card className={styles.card} h='100%' p='xl'>
      <Stack align='flex-start' gap='xxxl' h='100%' justify='stretch'>
        <Text fw='600' lineClamp={1} size='xl'>
          {title}
        </Text>

        {children}
      </Stack>
    </Card>
  )
}

function TotalJobsAppliedStats() {
  return (
    <StatCard title='Total Jobs Applied'>
      <Title fw='600' order={1}>
        45
      </Title>
    </StatCard>
  )
}

function JobsInterviewedStats() {
  return (
    <StatCard title='Interviewed'>
      <Title fw='600' order={1}>
        18
      </Title>
    </StatCard>
  )
}

function JobsAppliedStats() {
  const CTARightSection = (
    <Box className='icon-size-lg' component={ArrowRight} weight='bold' />
  )

  return (
    <StatCard title='Jobs Applied Status'>
      <Skeleton flex={1} />

      <Button
        fw='600'
        mt='auto'
        rightSection={CTARightSection}
        size='md'
        variant='subtle'
      >
        View All Applications
      </Button>
    </StatCard>
  )
}

function UpcomingInterviews() {
  return (
    <StatCard title='Upcoming Interviews'>
      <Skeleton flex={1} />
    </StatCard>
  )
}

export function Stats() {
  return (
    <Group align='stretch'>
      <Stack flex={3}>
        <TotalJobsAppliedStats />
        <JobsInterviewedStats />
      </Stack>

      <Stack flex={4}>
        <JobsAppliedStats />
      </Stack>

      <Stack flex={5}>
        <UpcomingInterviews />
      </Stack>
    </Group>
  )
}
