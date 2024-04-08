import {calculateCapacityProgressValue} from '@job-huntly/components/applicant/dashboard/Jobs/GridJobCard'
import type {Job} from '@job-huntly/mock/jobs'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  Progress,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {capitalize, startCase} from 'lodash-es'
import React from 'react'

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

export function JobApplicationsStatus({
  applicationsInfo,
}: Pick<Job, 'applicationsInfo'>) {
  const progressValue = calculateCapacityProgressValue(
    applicationsInfo.applicantsCount,
    applicationsInfo.capacity,
  )

  return (
    <Stack gap='xs'>
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

function Actions({applicationsInfo}: Pick<Job, 'applicationsInfo'>) {
  return (
    <Stack gap='xs' ml='auto' w='fit-content'>
      <Button
        miw={rem(164)}
        py='sm'
        size='md'
        w='100%'
        onClick={(e) => e.preventDefault()}
      >
        Apply
      </Button>

      <Box mt='xs'>
        <JobApplicationsStatus applicationsInfo={applicationsInfo} />
      </Box>
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
