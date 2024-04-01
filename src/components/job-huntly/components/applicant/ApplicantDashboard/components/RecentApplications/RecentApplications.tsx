'use client'

import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {ArrowRight} from '@phosphor-icons/react'
import {DotsThree} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {get} from 'lodash-es'
import React from 'react'

import type {
  Application,
  ApplicationStatus,
} from '@/components/job-huntly/mock/applications'
import {applications} from '@/components/job-huntly/mock/applications'

import styles from './RecentApplications.module.scss'

const applicationStatusMap: Record<ApplicationStatus, JSX.Element> = {
  review: (
    <Badge color='yellow' py='md' size='lg' variant='outline'>
      In Review
    </Badge>
  ),
  shortlisted: (
    <Badge color='primary' py='md' size='lg' variant='outline'>
      Shortlisted
    </Badge>
  ),
  declined: (
    <Badge color='red' py='md' size='lg' variant='outline'>
      Declined
    </Badge>
  ),
}

interface ListItemProps extends Application {}

function ListItem(props: ListItemProps) {
  const badge = get(applicationStatusMap, props.status)
  return (
    <Group className={styles.item} justify='space-between' p='xl'>
      <Group gap='xl'>
        <Avatar component={props.logo} radius='md' size={rem(64)}>
          N
        </Avatar>

        <Stack gap={0}>
          <Text fw='700' size='lg'>
            {props.position}
          </Text>

          <Text c='neutrals.4'>{props.info}</Text>
        </Stack>
      </Group>

      <Stack gap='xxs'>
        <Text fw='600'>Date Applied</Text>
        <Text c='neutrals.4'>{props.date}</Text>
      </Stack>

      <Box>{badge}</Box>

      <Box
        className={clsx('icon-size-lg', 'cursor-pointer')}
        component={DotsThree}
        weight='bold'
      />
    </Group>
  )
}

function List() {
  const content = applications.map((application) => {
    return <ListItem key={application.id} {...application} />
  })

  return <Stack gap={0}>{content}</Stack>
}

export function RecentApplications() {
  const CTARightSection = (
    <Box className='icon-size-lg' component={ArrowRight} weight='bold' />
  )
  return (
    <Card className={styles.table} p={0} radius={0}>
      <Title className={styles.header} fw='600' order={5} p='xl'>
        Recent Applications History
      </Title>

      <Box p='xl'>
        <List />
      </Box>

      <Box mx='auto' p='xl'>
        <Button
          fw='600'
          mt='auto'
          mx='auto'
          rightSection={CTARightSection}
          size='md'
          variant='subtle'
        >
          View all applications history
        </Button>
      </Box>
    </Card>
  )
}
