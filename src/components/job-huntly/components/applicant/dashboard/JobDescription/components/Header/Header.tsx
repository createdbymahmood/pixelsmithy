'use client'

import type {Job} from '@job-huntly/mock/jobs'
import {
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {ShareNetwork} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {startCase} from 'lodash-es'
import React from 'react'

function Actions() {
  return (
    <Group gap='xxl' ml='auto'>
      <Box
        c='neutrals.4'
        className={clsx('icon-size-xl', 'cursor-pointer')}
        component={ShareNetwork}
      />

      <Divider orientation='vertical' />
      <Button miw={rem(164)} size='lg'>
        Apply
      </Button>
    </Group>
  )
}

function Info(props: Pick<Job, 'company' | 'location' | 'type'>) {
  return (
    <Group gap='xs'>
      <Text c='neutrals.5'>{props.company}</Text>
      <Text c='neutrals.4' fw='700'>
        •
      </Text>
      <Text c='neutrals.5'>{props.location}</Text>
      <Text c='neutrals.4' fw='700'>
        •
      </Text>
      <Text c='neutrals.5'>{startCase(props.type)}</Text>
    </Group>
  )
}

interface HeaderProps {
  job: Job
  withApply: boolean
}

export function Header({job, withApply}: HeaderProps) {
  return (
    <Paper bg='neutrals.0' p={rem(40)}>
      <Paper bg='white' p='xl' withBorder>
        <Group gap='xl'>
          <Avatar component={job.logo} radius={0} size={rem(90)} />

          <Stack gap='xs'>
            <Title order={3}>{job.role}</Title>
            <Info
              company={job.company}
              location={job.location}
              type={job.type}
            />
          </Stack>

          {withApply ? <Actions /> : null}
        </Group>
      </Paper>
    </Paper>
  )
}
