'use client'

import {Card, Group, rem, Stack, Table, Text, Title} from '@mantine/core'
import {CalendarBlank} from '@phosphor-icons/react'
import {DownloadSimple} from '@phosphor-icons/react/dist/ssr'
import dayJS from 'dayjs'

import {dateToString} from '@/components/SnowUI/utils/date'

const elements = [
  {
    orderId: '678935899',
    details: 'Darknight transparency 36 Icons Pack',
    date: dayJS().subtract(5, 'months'),
    amount: '$123.79',
  },
  {
    orderId: '578433345',
    details: 'Seller Fee',
    date: dayJS().subtract(5, 'months'),
    amount: '$-2.60',
  },
  {
    orderId: '678935899',
    details: 'Cartoon Mobile Emoji Phone Pack',
    date: dayJS().subtract(5, 'months'),
    amount: '$35.07',
  },
  {
    orderId: '098669322',
    details: 'Iphone 12 Pro Mockup Mega Bundle',
    date: dayJS().subtract(5, 'months'),
    amount: '$-5.00',
  },
  {
    orderId: '245899092',
    details: 'Parcel Shipping / Delivery Service App',
    date: dayJS().subtract(5, 'months'),
    amount: '$123.79',
  },
]

function TableContent() {
  const rows = elements.map((element) => {
    return (
      <Table.Tr key={`${element.orderId}-${element.amount}`}>
        <Table.Td>{element.orderId}</Table.Td>
        <Table.Td>{element.details}</Table.Td>
        <Table.Td>
          <Group gap={rem(5)}>
            <CalendarBlank className='icon-size-sm' />
            <Text size='xs'>{dateToString(element.date)}</Text>
          </Group>
        </Table.Td>
        <Table.Td>{element.amount}</Table.Td>

        <Table.Td>
          <Group className='cursor-pointer' gap={rem(5)}>
            <DownloadSimple className='icon-size-sm' />
            <Text size='xs'>PDF</Text>
          </Group>
        </Table.Td>
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

export function Statements() {
  return (
    <Card>
      <Stack gap='xs'>
        <Header />
        <TableContent />
      </Stack>
    </Card>
  )
}
