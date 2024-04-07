import {
  Avatar,
  Badge,
  Group,
  Paper,
  Progress,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {capitalize, clamp, startCase} from 'lodash-es'
import React from 'react'

import type {Job} from '@/components/job-huntly/mock/jobs'

function Info({company, location}: Pick<Job, 'company' | 'location'>) {
  return (
    <Group gap='xs'>
      <Text c='neutrals.4'>{company}</Text>
      <Text c='neutrals.4'>•</Text>
      <Text c='neutrals.4'>{location}</Text>
    </Group>
  )
}

function JobType({type}: Pick<Job, 'type'>) {
  return (
    <Badge color='green' fw='600' py='md' size='lg' variant='light'>
      {startCase(type)}
    </Badge>
  )
}

function Categories({categories}: Pick<Job, 'categories'>) {
  return categories.map((category) => {
    return (
      <Badge
        key={category.label}
        color={category.color}
        fw='600'
        py='md'
        size='lg'
        variant='outline'
      >
        {capitalize(category.label)}
      </Badge>
    )
  })
}

export function calculateCapacityProgressValue(
  count: number,
  capacity: number,
) {
  return clamp((count * 100) / capacity, 0, 100)
}

function JobApplicationsStatus({
  applicationsInfo,
}: Pick<Job, 'applicationsInfo'>) {
  const progressValue = calculateCapacityProgressValue(
    applicationsInfo.applicantsCount,
    applicationsInfo.capacity,
  )

  return (
    <Stack gap='xs' mt='sm'>
      <Progress color='green' radius={0} value={progressValue} />

      <Group gap='xs' wrap='nowrap'>
        <Text fw='600' size='sm'>
          {applicationsInfo.applicantsCount} applied
        </Text>

        <Text c='neutrals.4' size='sm'>
          of {applicationsInfo.capacity} capacity
        </Text>
      </Group>
    </Stack>
  )
}

function CardBody({
  categories,
  company,
  location,
  role,
}: Pick<Job, 'categories' | 'company' | 'location' | 'role'>) {
  return (
    <Stack gap='xxs'>
      <Text fw='600' size='xl'>
        {role}
      </Text>

      <Info company={company} location={location} />

      <Group mt='lg'>
        <Categories categories={categories} />
      </Group>
    </Stack>
  )
}

export function GridJobCard({
  applicationsInfo,
  categories,
  company,
  location,
  logo,
  role,
  type,
}: Job) {
  return (
    <Paper p='xl' withBorder>
      <Stack>
        <Group justify='space-between'>
          <Avatar component={logo} size={rem(48)} />
          <JobType type={type} />
        </Group>

        <CardBody
          categories={categories}
          company={company}
          location={location}
          role={role}
        />

        <JobApplicationsStatus applicationsInfo={applicationsInfo} />
      </Stack>
    </Paper>
  )
}
