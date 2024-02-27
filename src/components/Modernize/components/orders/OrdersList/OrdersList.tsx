'use client'

import {
  Badge,
  Button,
  Checkbox,
  Group,
  Pagination,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import {get} from 'lodash-es'

import {
  TableFilters,
  TableWrapper,
} from '@/components/Modernize/components/common'
import {useTableState} from '@/hooks/useTableState'

type OrderStatus = 'ready' | 'received' | 'shipped'
type PaymentStatus = 'paid' | 'pending'

interface Order {
  order: string
  date: Dayjs
  customer: string
  paymentStatus: PaymentStatus
  orderStatus: OrderStatus
  total: string
}

const elements: Order[] = [
  {
    order: '#12512B',
    date: dayJS().subtract(2, 'days'),
    customer: 'Tom Anderson',
    paymentStatus: 'paid',
    orderStatus: 'ready',
    total: '$49.90',
  },
  {
    order: '#12523C',
    date: dayJS().subtract(2, 'days'),
    customer: 'Tom Anderson',
    paymentStatus: 'paid',
    orderStatus: 'ready',
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

const orderStatusMap: Record<OrderStatus, JSX.Element> = {
  ready: (
    <Badge color='yellow' radius='sm'>
      Ready
    </Badge>
  ),
  received: (
    <Badge color='primary' radius='sm'>
      Received
    </Badge>
  ),
  shipped: (
    <Badge color='general' radius='sm'>
      Shipped
    </Badge>
  ),
}

const paymentStatusMap: Record<PaymentStatus, JSX.Element> = {
  paid: (
    <Badge color='green' radius='sm'>
      Paid
    </Badge>
  ),
  pending: (
    <Badge color='general' radius='sm'>
      Paid
    </Badge>
  ),
}

function TableContent() {
  const {
    onAllSelectionsChange,
    onItemSelectionChange,
    selections,
    indeterminate,
    isAllSelected,
  } = useTableState({
    items: elements.map((element) => element.order),
  })

  const rows = elements.map((element) => {
    const orderStatus = get(orderStatusMap, element.orderStatus)
    const paymentStatus = get(paymentStatusMap, element.paymentStatus)

    const orderColumn = (
      <Group>
        <Checkbox
          checked={selections.isSelected(element.order)}
          onChange={onItemSelectionChange(element.order)}
        />
        {element.order}
      </Group>
    )
    return (
      <Table.Tr key={element.order}>
        <Table.Td>{orderColumn}</Table.Td>
        <Table.Td>{element.date.format('MMM D, hh:mmA')}</Table.Td>
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
    <Stack gap='sm'>
      <Header />

      <TableWrapper>
        <TableFilters />
        <TableContent />
        <TableFooter />
      </TableWrapper>
    </Stack>
  )
}
