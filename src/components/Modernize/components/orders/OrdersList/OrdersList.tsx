'use client'

import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Group,
  Stack,
  Table,
  Title,
} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import dayJS from 'dayjs'

import styles from './OrdersList.module.scss'

const elements = [
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
]

function TableContent() {
  const rows = elements.map((element) => {
    return (
      <Table.Tr key={element.order}>
        <Table.Td>
          <Group>
            <Checkbox />
            {element.order}
          </Group>
        </Table.Td>
        <Table.Td>{element.date.format('MMM D, hh:mmA')}</Table.Td>
        <Table.Td>{element.customer}</Table.Td>
        <Table.Td>
          <Badge color='green' radius='sm'>
            Paid
          </Badge>
        </Table.Td>
        <Table.Td>
          <Badge color='yellow' radius='sm'>
            Paid
          </Badge>
        </Table.Td>
        <Table.Td>{element.total}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table withRowBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Group>
              <Checkbox />
              Order
            </Group>
          </Table.Th>
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

export function OrdersList() {
  return (
    <Stack gap='sm'>
      <Header />
      <Box bg='white' className={styles.table} p='sm'>
        <TableContent />
      </Box>
    </Stack>
  )
}
