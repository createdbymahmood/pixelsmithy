'use client'

import {rem, Stack, Table, Text} from '@mantine/core'
import {paymentStatusMap} from '@/components/modernize/components'
import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import {get} from 'lodash-es'

import {TableWrapper} from '@/components/modernize/components/common'
import {dateTimeFormat} from '@/constants'

type OrderStatus = 'completed' | 'pending' | 'ready' | 'received' | 'shipped'
type PaymentStatus = 'paid' | 'pending'

export interface Order {
  order: string
  date: Dayjs
  customer: string
  paymentStatus: PaymentStatus
  orderStatus: OrderStatus
  total: string
}

export const orders: Order[] = [
  {
    order: '#12512B',
    date: dayJS().subtract(2, 'days'),
    customer: 'Tom Anderson',
    paymentStatus: 'paid',
    orderStatus: 'pending',
    total: '$49.90',
  },
  {
    order: '#12523C',
    date: dayJS().subtract(2, 'days'),
    customer: 'Tom Anderson',
    paymentStatus: 'pending',
    orderStatus: 'completed',
    total: '$49.90',
  },
  {
    order: '#51232A',
    date: dayJS().subtract(2, 'days'),
    customer: 'Inez Kim',
    paymentStatus: 'paid',
    orderStatus: 'ready',
    total: '$5.51',
  },
  {
    order: '#71232A',
    date: dayJS().subtract(2, 'days'),
    customer: 'Inez Kim',
    paymentStatus: 'paid',
    orderStatus: 'ready',
    total: '$5.51',
  },
]

function TableContent() {
  const rows = orders.map((element) => {
    const paymentStatus = get(paymentStatusMap, element.paymentStatus)

    return (
      <Table.Tr key={element.order}>
        <Table.Td fw='500'>{element.customer}</Table.Td>
        <Table.Td>{element.date.format(dateTimeFormat)}</Table.Td>
        <Table.Td>{element.total}</Table.Td>
        <Table.Td>{paymentStatus}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table withRowBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th>Amount</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function Header() {
  return <Text fw='bold'>Recent Transactions</Text>
}

export function RecentTransactions() {
  return (
    <Stack gap={rem(30)} h='100%'>
      <TableWrapper>
        <Header />
        <TableContent />
      </TableWrapper>
    </Stack>
  )
}
