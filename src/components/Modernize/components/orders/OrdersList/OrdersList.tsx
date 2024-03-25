'use client'

import {
  Badge,
  Button,
  Checkbox,
  Group,
  Pagination,
  rem,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import {get} from 'lodash-es'

import {TableFilters, TableWrapper} from '@modernize/components/common'
import {dateTimeFormat} from '@/constants'
import {useTableState} from '@/hooks/useTableState'

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
    paymentStatus: 'paid',
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
]

export const orderStatusMap: Record<OrderStatus, JSX.Element> = {
  ready: <Badge color='yellow'>Ready</Badge>,
  received: <Badge color='primary'>Received</Badge>,
  shipped: <Badge color='general'>Shipped</Badge>,
  completed: <Badge color='green'>Completed</Badge>,
  pending: <Badge color='general'>Pending</Badge>,
}

export const paymentStatusMap: Record<PaymentStatus, JSX.Element> = {
  paid: <Badge color='green'>Paid</Badge>,
  pending: <Badge color='general'>Pending</Badge>,
}

function TableContent() {
  const {
    onAllSelectionsChange,
    onItemSelectionChange,
    selections,
    indeterminate,
    isAllSelected,
  } = useTableState({
    items: orders.map((element) => element.order),
  })

  const rows = orders.map((element) => {
    const orderStatus = get(orderStatusMap, element.orderStatus)
    const paymentStatus = get(paymentStatusMap, element.paymentStatus)

    const orderColumn = (
      <Group>
        <Checkbox
          checked={selections.isSelected(element.order)}
          onChange={onItemSelectionChange(element.order)}
        />
        <Text fw='500' size='sm'>
          {element.order}
        </Text>
      </Group>
    )
    return (
      <Table.Tr key={element.order}>
        <Table.Td>{orderColumn}</Table.Td>
        <Table.Td>{element.date.format(dateTimeFormat)}</Table.Td>
        <Table.Td>{element.customer}</Table.Td>
        <Table.Td>{paymentStatus}</Table.Td>
        <Table.Td>{orderStatus}</Table.Td>
        <Table.Td>{element.total}</Table.Td>
      </Table.Tr>
    )
  })

  const orderHeadColumn = (
    <Group>
      <Checkbox
        checked={isAllSelected}
        indeterminate={indeterminate}
        onChange={onAllSelectionsChange}
      />
      <Text size='sm'>Order</Text>
    </Group>
  )

  return (
    <Table withRowBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>{orderHeadColumn}</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th>Customer</Table.Th>
          <Table.Th>Payment Status</Table.Th>
          <Table.Th>Order Status</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function Header() {
  return (
    <Group>
      <Title order={5}>Orders</Title>
      <Group ml='auto'>
        <Button variant='default'>Export</Button>
        <Button leftSection={<Plus className='icon-size-md' weight='bold' />}>
          Add Order
        </Button>
      </Group>
    </Group>
  )
}

function TableFooter() {
  return (
    <Group justify='space-between'>
      <Pagination total={24} />
      <Text c='general.5'>247 Results</Text>
    </Group>
  )
}

export function OrdersList() {
  return (
    <Stack gap={rem(30)}>
      <Header />

      <TableWrapper>
        <TableFilters />
        <TableContent />
        <TableFooter />
      </TableWrapper>
    </Stack>
  )
}
