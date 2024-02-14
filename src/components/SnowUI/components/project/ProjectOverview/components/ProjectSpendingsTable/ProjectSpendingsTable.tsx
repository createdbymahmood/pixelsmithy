import {Avatar, Card, Group, rem, Stack, Table, Title} from '@mantine/core'
import dayJS from 'dayjs'
import React from 'react'

import {Status} from '@/components/SnowUI'

const elements = [
  {
    manager: 'ByeWind',
    date: dayJS().subtract(4, 'years').subtract(1, 'months'),
    amount: '$942.00',
    status: 'Completed',
  },
  {
    manager: 'Natali Craig',
    date: dayJS().subtract(1, 'year').subtract(5, 'months').subtract(2, 'days'),
    amount: '$881.00',
    status: 'Completed',
  },
  {
    manager: 'Drew Cano',
    date: dayJS().subtract(5, 'months').subtract(10, 'days'),
    amount: '$409.00',
    status: 'Completed',
  },
  {
    manager: 'Orlando Diggs',
    date: dayJS().subtract(1, 'month').subtract(25, 'days'),
    amount: '$953.00',
    status: 'Completed',
  },
  {manager: 'Andi Lane', date: dayJS(), amount: '$907.00', status: 'Completed'},
]

function TableContent() {
  const rows = elements.map((element, index) => (
    <Table.Tr key={element.manager}>
      <Table.Td>
        <Group gap={rem(5)}>
          <Avatar size={rem(24)} /> {element.manager}
        </Group>
      </Table.Td>
      <Table.Td>{element.date.format('MMM DD, YYYY')}</Table.Td>
      <Table.Td>{element.amount}</Table.Td>
      <Table.Td>
        <Status index={index} />
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <Table withRowBorders={false}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Manager</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th>Amount</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

export function ProjectSpendingsTable() {
  return (
    <Stack component={Card} gap='xs'>
      <Title order={5}>Project Spendings</Title>
      <TableContent />
    </Stack>
  )
}