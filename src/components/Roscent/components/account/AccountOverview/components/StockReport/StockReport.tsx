import {Card, Group, rem, Table, Text, Title} from '@mantine/core'
import {get} from 'lodash-es'

import {statusBadgeMap} from '@/components/Roscent'

const elements = [
  {
    item: 'ASOS Ridley High Waist',
    price: '$79.49',
    quantity: 82,
    status: 'in-progress',
  },
  {
    item: 'Marco Lightweight Shirt',
    price: '$128.50',
    quantity: 37,
    status: 'complete',
  },
  {
    item: 'Half Sleeve  Shirt',
    price: '$39.99',
    quantity: 64,
    status: 'pending',
  },
  {
    item: 'Lightweight Jacket',
    price: '$20.00',
    quantity: 184,
    status: 'complete',
  },
  {
    item: 'Marco Shoes',
    price: '$28.49',
    quantity: 64,
    status: 'in-progress',
  },
]

function TableContent() {
  const rows = elements.map((element) => {
    const status = get(statusBadgeMap, element.status)
    return (
      <Table.Tr key={element.item}>
        <Table.Td>{element.item}</Table.Td>
        <Table.Td>{element.price}</Table.Td>
        <Table.Td>{element.quantity}</Table.Td>
        <Table.Td>{status}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Item</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Quantity</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function StockReportHeaader() {
  return (
    <Group align='baseline' gap={rem(5)}>
      <Title order={5}>Stock Report</Title>
      <Text c='dimmed' size='xs'>
        View Stock
      </Text>
    </Group>
  )
}

export function StockReport() {
  return (
    <Card>
      <StockReportHeaader />
      <TableContent />
    </Card>
  )
}
