'use client'

import {Avatar, Box, Button, Card, Group, rem, Stack, Text} from '@mantine/core'
import {ArrowRight} from '@phosphor-icons/react'
import {DotsThree} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {get} from 'lodash-es'
import React from 'react'

import {applicationStatusMap} from '@/components/job-huntly/components/applicant/Applications/components/ApplicationsList/components'
import type {Application} from '@/components/job-huntly/mock/applications'
import {applications} from '@/components/job-huntly/mock/applications'

import styles from './RecentApplications.module.scss'

interface ListItemProps extends Application {}

function ListItem(props: ListItemProps) {
  const badge = get(applicationStatusMap, props.status)
  return (
    <Box className={styles.item} p='xl'>
      <Group gap='xl' wrap='nowrap'>
        <Avatar component={props.logo} radius='md' size={rem(64)}>
          N
        </Avatar>

        <Stack gap={0}>
          <Text fw='700' size='lg'>
            {props.role}
          </Text>

          <Text c='neutrals.4'>
            {props.company} • {props.location} • {props.type}
          </Text>
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
    </Box>
  )
}

function List() {
  const content = applications.slice(0, 3).map((application) => {
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
      <Text className={styles.header} fw='600' p='xl' size='xl'>
        Recent Applications History
      </Text>

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
