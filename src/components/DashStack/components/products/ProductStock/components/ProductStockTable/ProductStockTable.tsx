'use client'

import {
  Avatar,
  Button,
  Card,
  ColorSwatch,
  Group,
  rem,
  Stack,
  Table,
} from '@mantine/core'
import {NotePencil, Trash} from '@phosphor-icons/react/dist/ssr'

import {TablePagination} from '../TablePagination'
import styles from './ProductStock.module.scss'

interface Product {
  name: string
  category: string
  price: string
  piece: number
  colors: string[]
}
const products: Product[] = [
  {
    name: 'Apple Watch Series 4',
    category: 'Digital Product',
    price: '$690.00',
    piece: 63,
    colors: [
      'var(--mantine-color-black)',
      'var(--mantine-color-gray-5)',
      'var(--mantine-color-red-5)',
    ],
  },
]

function Actions() {
  return (
    <Button.Group>
      <Button px='xs' py={0} radius='md' size='xs' variant='default'>
        <NotePencil
          className='icon-size-sm'
          color='var(--mantine-color-gray-6)'
          weight='bold'
        />
      </Button>

      <Button px='xs' py={0} radius='md' size='xs' variant='default'>
        <Trash
          className='icon-size-sm'
          color='var(--mantine-color-red-5)'
          weight='bold'
        />
      </Button>
    </Button.Group>
  )
}

function TableContent() {
  const rows = products.map((element) => {
    return (
      <Table.Tr key={element.name}>
        <Table.Td>
          <Avatar radius='md' size={rem(60)} />
        </Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.category}</Table.Td>
        <Table.Td>{element.price}</Table.Td>
        <Table.Td>{element.piece}</Table.Td>
        <Table.Td>
          <Group gap='xs'>
            {element.colors.map((c) => (
              <ColorSwatch
                key={c}
                color={c}
                size={rem(20)}
                withShadow={false}
              />
            ))}
          </Group>
        </Table.Td>
        <Table.Td>
          <Actions />
        </Table.Td>
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
          <Table.Th>Image</Table.Th>
          <Table.Th>Product Name</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Piece</Table.Th>
          <Table.Th>Available Color</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

export function ProductStockTable() {
  return (
    <Stack gap={rem(30)}>
      <Card className={styles.tableWrapper} p={0}>
        <TableContent />
      </Card>

      <TablePagination />
    </Stack>
  )
}
