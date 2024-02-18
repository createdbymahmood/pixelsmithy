import {
  Avatar,
  Card,
  Group,
  rem,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core'
import {CalendarBlank} from '@phosphor-icons/react'
import dayJS from 'dayjs'

import {dateToString} from '@/components/SnowUI/utils/date'

const elements = [
  {
    orderId: '678935899',
    manager: 'ByeWind',
    date: dayJS().subtract(5, 'months'),
    bonus: '26%',
    profit: '$1,200.00',
  },
  {
    orderId: '578433345',
    manager: 'Natali Craig',
    date: dayJS().subtract(5, 'months'),
    bonus: '35%',
    profit: '$2,400.00',
  },
  {
    orderId: '678935899',
    manager: 'ByeWind',
    date: dayJS().subtract(5, 'months'),
    bonus: '18%',
    profit: '$940.00',
  },
  {
    orderId: '098669322',
    manager: 'Orlando Diggs',
    date: dayJS().subtract(5, 'months'),
    bonus: '43%',
    profit: '$200.00',
  },
  {
    orderId: '245899092',
    manager: 'Andi Lane',
    date: dayJS().subtract(5, 'months'),
    bonus: '21%',
    profit: '$380.00',
  },
]

function TableContent() {
  const rows = elements.map((element) => {
    return (
      <Table.Tr key={element.orderId}>
        <Table.Td>{element.orderId}</Table.Td>
        <Table.Td>
          <Group gap={rem(5)}>
            <Avatar size={24} />
            <Text size='xs'>{element.manager}</Text>
          </Group>
        </Table.Td>
        <Table.Td>
          <Group gap={rem(5)}>
            <CalendarBlank className='icon-size-normal' />
            <Text size='xs'>{dateToString(element.date)}</Text>
          </Group>
        </Table.Td>
        <Table.Td>{element.bonus}</Table.Td>
        <Table.Td>{element.profit}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Order ID</Table.Th>
          <Table.Th>Details</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th>Amount</Table.Th>
          <Table.Th>Invoice</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Statement</Title>

      <Group>
        <Text size='sm'>This Year</Text>
        <Text c='dimmed' size='sm'>
          2022
        </Text>
        <Text c='dimmed' size='sm'>
          2021
        </Text>
      </Group>
    </Group>
  )
}

export function ReferredUsers() {
  return (
    <Card>
      <Stack gap='xs'>
        <Header />
        <TableContent />
      </Stack>
    </Card>
  )
}
