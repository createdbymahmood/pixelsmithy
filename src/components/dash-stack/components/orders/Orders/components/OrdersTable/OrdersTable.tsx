'use client'

import {Badge, Card, rem, Stack, Table} from '@mantine/core'
import {get} from 'lodash-es'

import {OrdersTableFilters} from '../OrdersTableFilters'
import {TablePagination} from '../TablePagination'
import styles from './OrdersTable.module.scss'

type OrderStatus = 'completed' | 'on-hold' | 'processing' | 'rejected'

export interface Order {
  id: string
  name: string
  address: string
  date: string
  type: string
  status: OrderStatus
}

export const orders: Order[] = [
  {
    id: '00001',
    name: 'Christine Brooks',
    address: '089 Kutch Green Apt. 448',
    date: '04 Sep 2019',
    type: 'Electric',
    status: 'completed',
  },
]

export const compleationStatusMap: Record<OrderStatus, JSX.Element> = {
  completed: (
    <Badge c='green.8' color='green.8' radius='sm' variant='light'>
      Completed
    </Badge>
  ),
  'on-hold': (
    <Badge color='yellow' radius='sm' variant='light'>
      On Hold
    </Badge>
  ),
  processing: (
    <Badge color='purlpe' radius='sm' variant='light'>
      Processing
    </Badge>
  ),
  rejected: (
    <Badge color='red' radius='sm' variant='light'>
      Processing
    </Badge>
  ),
}

function TableContent() {
  const rows = orders.map((element) => {
    const orderStatus = get(compleationStatusMap, element.status)

    return (
      <Table.Tr key={element.id}>
        <Table.Td>{element.id}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.address}</Table.Td>
        <Table.Td>{element.date}</Table.Td>
        <Table.Td>{element.type}</Table.Td>

        <Table.Td>{orderStatus}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table
      classNames={{th: styles.th, thead: styles.thead}}
      verticalSpacing='md'
      withRowBorders
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>NAME</Table.Th>
          <Table.Th>ADDRESS</Table.Th>
          <Table.Th>DATE</Table.Th>
          <Table.Th>TYPE</Table.Th>
          <Table.Th>STATUS</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

export function OrdersTable() {
  return (
    <Stack gap={rem(30)}>
      <OrdersTableFilters />
      <Card className={styles.tableWrapper} p={0}>
        <TableContent />
      </Card>

      <TablePagination />
    </Stack>
  )
}
