'use client'

import {Avatar, Group, rem, Stack, Table, Text} from '@mantine/core'
import {TableWrapper} from '@modernize/components/common'

interface Product {
  title: string
  category: string
  inventory: string
  color: string
  price: string
  rating: string
  unitsSold: number
}

const elements: Product[] = [
  {
    title: 'Men Grey Hoodie',
    category: 'Hoodies',
    inventory: '96 in stock',
    color: 'Black',
    price: '$49.90',
    rating: '5.0 (32 Votes)',
    unitsSold: 204,
  },
  {
    title: 'Women Striped T-Shirt',
    category: 'Hoodies',
    inventory: '96 in stock',
    color: 'Black',
    price: '$49.90',
    rating: '5.0 (32 Votes)',
    unitsSold: 204,
  },
  {
    title: 'Wome White T-Shirt',
    category: 'Hoodies',
    inventory: '96 in stock',
    color: 'Black',
    price: '$49.90',
    rating: '5.0 (32 Votes)',
    unitsSold: 204,
  },
]

function TableContent() {
  const rows = elements.map((element) => {
    const titleColumn = (
      <Group gap={rem(12)}>
        <Avatar radius='sm' size={rem(36)} />
        {element.title}
      </Group>
    )

    return (
      <Table.Tr key={element.title}>
        <Table.Td fw='500'>{titleColumn}</Table.Td>
        <Table.Td>{element.price}</Table.Td>
        <Table.Td>{element.unitsSold}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table withRowBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Units Sold</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function Header() {
  return <Text fw='bold'>Top Products by Units Sold</Text>
}

export function TopProducts() {
  return (
    <Stack gap={rem(30)} h='100%'>
      <TableWrapper gap={rem(20)} h='100%'>
        <Header />
        <TableContent />
      </TableWrapper>
    </Stack>
  )
}
