'use client'

import {
  Avatar,
  Badge,
  Card,
  Group,
  rem,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core'
import {get} from 'lodash-es'

const elements = [
  {
    name: 'Apple Watch',
    location: '6096 Marjolaine Landing',
    date: '12.09.2019 - 12.53 PM',
    piece: 423,
    amount: '$34,295',
    status: 'delivered',
  },
]

type DeliveryStatus = 'delivered'

export const deliveryStatusmap: Record<DeliveryStatus, JSX.Element> = {
  delivered: <Badge color='green.9'>Delivered</Badge>,
}

function TableContent() {
  const rows = elements.map((element) => {
    const status = get(deliveryStatusmap, element.status)
    const name = (
      <Group gap='sm'>
        <Avatar radius='md' size={rem(36)} />
        <Text>{element.name}</Text>
      </Group>
    )
    return (
      <Table.Tr key={`${element.name}-${element.date}${element.location}`}>
        <Table.Td>{name}</Table.Td>
        <Table.Td>{element.location}</Table.Td>
        <Table.Td>{element.date}</Table.Td>
        <Table.Td>{element.piece}</Table.Td>
        <Table.Td>{element.amount}</Table.Td>
        <Table.Td>{status}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product Name</Table.Th>
          <Table.Th>Location</Table.Th>
          <Table.Th>Date-Time</Table.Th>
          <Table.Th>Piece</Table.Th>
          <Table.Th>Amount</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function Header() {
  return <Title order={5}>Deals Details</Title>
}

export function DealsDetails() {
  return (
    <Card>
      <Stack gap='lg'>
        <Header />
        <TableContent />
      </Stack>
    </Card>
  )
}
