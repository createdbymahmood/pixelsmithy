'use client'

import type {
  Application,
  ApplicationStatus,
} from '@job-huntly/mock/applications'
import {applications} from '@job-huntly/mock/applications'
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Group,
  Pagination,
  rem,
  Stack,
  Table,
  Text,
} from '@mantine/core'
import {DotsThree} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {get} from 'lodash-es'

import {GroupLink} from '@/components/common'

const elements: Application[] = applications

export const applicationStatusMap: Record<ApplicationStatus, JSX.Element> = {
  review: (
    <Badge color='yellow' py='md' size='lg' variant='outline'>
      In Review
    </Badge>
  ),
  interview: (
    <Badge color='yellow' py='md' size='lg' variant='outline'>
      Interview
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

function TableContent() {
  const rows = elements.map((element) => {
    const badge = get(applicationStatusMap, element.status)

    const nameColumn = (
      <GroupLink gap='xs'>
        <Avatar
          component={element.logo}
          radius='sm'
          size={rem(40)}
          variant='light'
        />
        <Text>{element.company}</Text>
      </GroupLink>
    )

    return (
      <Table.Tr key={element.id}>
        <Table.Td>{element.id}</Table.Td>
        <Table.Td>{nameColumn}</Table.Td>
        <Table.Td>{element.role}</Table.Td>
        <Table.Td>{element.date}</Table.Td>
        <Table.Td>{badge}</Table.Td>
        <Table.Td>
          <Box
            className={clsx('icon-size-lg', 'cursor-pointer')}
            component={DotsThree}
            weight='bold'
          />
        </Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>#</Table.Th>
          <Table.Th>Company Name</Table.Th>
          <Table.Th>Roles</Table.Th>
          <Table.Th>Date Applied</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function TableFooter() {
  return (
    <Group justify='center'>
      <Pagination size='lg' total={24} />
    </Group>
  )
}

export function List() {
  return (
    <Stack>
      <TableContent />
      <Divider />
      <TableFooter />
    </Stack>
  )
}
