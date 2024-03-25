'use client'

import {rem, Stack, Table} from '@mantine/core'
import {orders, orderStatusMap} from '@/components/modernize/components'
import {get} from 'lodash-es'

import {TableWrapper} from '@/components/modernize/components/common'
import {dateTimeFormat} from '@/constants'

function TableContent() {
  const rows = orders.map((element) => {
    const orderStatus = get(orderStatusMap, element.orderStatus)

    return (
      <Table.Tr key={element.order}>
        <Table.Td fw='500'>{element.order}</Table.Td>
        <Table.Td>{element.date.format(dateTimeFormat)}</Table.Td>
        <Table.Td>{orderStatus}</Table.Td>
        <Table.Td>{element.total}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table withRowBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Order</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th>Order Status</Table.Th>
          <Table.Th>Price</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

export function CustomerOrders() {
  return (
    <Stack gap={rem(30)}>
      <TableWrapper>
        <TableContent />
      </TableWrapper>
    </Stack>
  )
}
