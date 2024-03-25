'use client'

import {Card, Group, Menu, Stack, Table, Text, Title} from '@mantine/core'
import {CaretDown} from '@phosphor-icons/react/dist/ssr'
import dayJS from 'dayjs'

import {OperationStatus} from '@/components/roscent'
import {dateToString} from '@/components/roscent/utils/date'

import styles from './SignInSessions.module.scss'

const elements = [
  {
    location: 'USA(5)',
    device: 'Chrome - Windows',
    ipAddress: '236.125.56.78',
    time: dayJS().subtract(2, 'days'),
    status: 'success' as OperationStatus,
  },
  {
    location: 'United Kingdom(10)',
    device: 'Safari - Mac OS',
    ipAddress: '236.125.56.69',
    time: dayJS().subtract(3, 'days'),
    status: 'success' as OperationStatus,
  },
  {
    location: 'Norway(-)',
    device: 'Firefox - Windows',
    ipAddress: '236.125.56.10',
    time: dayJS().subtract(20, 'minutes'),
    status: 'success' as OperationStatus,
  },
  {
    location: 'Japan(112)',
    device: 'iOS - iPhone Pro',
    ipAddress: '236.125.56.54',
    time: dayJS().subtract(20, 'minutes'),
    status: 'failure' as OperationStatus,
  },
  {
    location: 'Italy(5)',
    device: 'Samsung Noted 5- Android',
    ipAddress: '236.100.56.50',
    time: dayJS().subtract(40, 'minutes'),
    status: 'failure' as OperationStatus,
  },
]

function TableContent() {
  const rows = elements.map((element) => {
    const key = `${element.ipAddress}-${element.location}-${element.status}`
    return (
      <Table.Tr key={key}>
        <Table.Td>{element.location}</Table.Td>
        <Table.Td>{element.device}</Table.Td>
        <Table.Td>{element.ipAddress}</Table.Td>
        <Table.Td>{dateToString(element.time)}</Table.Td>
        <Table.Td>
          <OperationStatus status={element.status} />
        </Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Location</Table.Th>
          <Table.Th>Device</Table.Th>
          <Table.Th>IP Address</Table.Th>
          <Table.Th>Time</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Sign in Sessions</Title>

      <Menu shadow='md'>
        <Menu.Target>
          <Group className={styles.menuTrigger} gap='xs'>
            <Text size='xs'>1 Hour</Text>
            <CaretDown className='icon-size-sm' />
          </Group>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>1 Hour</Menu.Item>
          <Menu.Item>Day</Menu.Item>
          <Menu.Item>Week</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}

export function SignInSessions() {
  return (
    <Card>
      <Stack>
        <Header />
        <TableContent />
      </Stack>
    </Card>
  )
}
