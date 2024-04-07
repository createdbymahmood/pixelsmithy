import {
  Avatar,
  Badge,
  Button,
  Divider,
  Group,
  Paper,
  Progress,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {capitalize, clamp, startCase} from 'lodash-es'
import React, {Fragment} from 'react'

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

function calculateCapacityProgressValue(count: number, capacity: number) {
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
    <Fragment>
      <Progress color='green' radius={0} value={progressValue} />

      <Group gap='xs' wrap='nowrap'>
        <Text fw='600' size='sm'>
          {applicationsInfo.applicantsCount} applied
        </Text>

        <Text c='neutrals.4' size='sm'>
          of {applicationsInfo.capacity} capacity
        </Text>
      </Group>
    </Fragment>
  )
}

function Actions({applicationsInfo}: Pick<Job, 'applicationsInfo'>) {
  return (
    <Stack ml='auto' w='fit-content'>
      <Button miw={rem(164)} py='sm' size='md' w='100%'>
        Apply
      </Button>

      <JobApplicationsStatus applicationsInfo={applicationsInfo} />
    </Stack>
  )
}

function CardBody({
  categories,
  company,
  location,
  role,
  type,
}: Pick<Job, 'categories' | 'company' | 'location' | 'role' | 'type'>) {
  return (
    <Stack gap='xs'>
      <Text fw='600' size='xl'>
        {role}
      </Text>

      <Info company={company} location={location} />

      <Group gap='xs'>
        <JobType type={type} />
        <Divider orientation='vertical' />
        <Categories categories={categories} />
      </Group>
    </Stack>
  )
}

export function StackJobCard({
  applicationsInfo,
  categories,
  company,
  location,
  logo,
  role,
  type,
}: Job) {
  return (
    <Paper px='xxxl' py='xl' withBorder>
      <Group>
        <Avatar component={logo} size={rem(64)} />

        <CardBody
          categories={categories}
          company={company}
          location={location}
          role={role}
          type={type}
        />

        <Actions applicationsInfo={applicationsInfo} />
      </Group>
    </Paper>
  )
}
