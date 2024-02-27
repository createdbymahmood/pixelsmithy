'use client'

import {
  Avatar,
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
import Link from 'next/link'

import {
  TableFilters,
  TableWrapper,
} from '@/components/Modernize/components/common'
import {urls} from '@/constants'
import {useTableState} from '@/hooks/useTableState'

interface Product {
  title: string
  category: string
  inventory: string
  color: string
  price: string
  rating: string
}

const elements: Product[] = [
  {
    title: 'Men Grey Hoodie',
    category: 'Hoodies',
    inventory: '96 in stock',
    color: 'Black',
    price: '$49.90',
    rating: '5.0 (32 Votes)',
  },
]

function TableContent() {
  const mapElementToKey = (element: Product) => element.title
  const {
    onAllSelectionsChange,
    onItemSelectionChange,
    selections,
    indeterminate,
    isAllSelected,
  } = useTableState({
    items: elements.map(mapElementToKey),
  })

  const rows = elements.map((element) => {
    const orderColumn = (
      <Group>
        <Checkbox
          checked={selections.isSelected(mapElementToKey(element))}
          size='sm'
          onChange={onItemSelectionChange(mapElementToKey(element))}
        />
        <Avatar radius='md' size={rem(48)} />

        <Stack gap={0}>
          <Text size='sm'>{element.title}</Text>
          <Text c='general.5' size='sm'>
            {element.category}
          </Text>
        </Stack>
      </Group>
    )

    return (
      <Table.Tr key={element.title}>
        <Table.Td>{orderColumn}</Table.Td>
        <Table.Td>{element.inventory}</Table.Td>
        <Table.Td>{element.color}</Table.Td>
        <Table.Td>{element.price}</Table.Td>
        <Table.Td>{element.rating}</Table.Td>
      </Table.Tr>
    )
  })

  const productHeadColumn = (
    <Group>
      <Checkbox
        checked={isAllSelected}
        indeterminate={indeterminate}
        onChange={onAllSelectionsChange}
      />
      <Text size='sm'>Product</Text>
    </Group>
  )

  return (
    <Table withRowBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>{productHeadColumn}</Table.Th>
          <Table.Th>Inventory</Table.Th>
          <Table.Th>Color</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Rating</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function Header() {
  return (
    <Group>
      <Title order={5}>Products</Title>

      <Group ml='auto'>
        <Button variant='default'>Export</Button>
        <Button
          component={Link}
          href={urls.Modernize.dashboard.products.add}
          leftSection={<Plus className='icon-size-md' weight='bold' />}
        >
          Add Product
        </Button>
      </Group>
    </Group>
  )
}

function TableFooter() {
  return (
    <Group justify='space-between'>
      <Pagination total={24} />
      <Text c='general.5'>146 Results</Text>
    </Group>
  )
}

export function ProductsList() {
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
