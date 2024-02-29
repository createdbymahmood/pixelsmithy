'use client'

import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {
  Avatar,
  Checkbox,
  Group as MantineGroup,
  Pagination,
  rem,
  Stack,
  Table,
  Text,
} from '@mantine/core'
import Link from 'next/link'

import {TableFilters} from '@/components/Modernize/components/common'
import {urls} from '@/constants'
import {useTableState} from '@/hooks/useTableState'

const Group = MantineGroup as MantineComponent<{
  props: GroupProps & {href?: string}
  ref: HTMLDivElement
  stylesNames: 'root'
  vars: GroupCssVariables
  ctx: GroupStylesCtx
}>

interface Customer {
  id: string
  name: string
  location: string
  orders: number
  spent: string
}

const elements: Customer[] = [
  {
    id: '1',
    name: 'Walter Gibson',
    location: 'Sawaynchester',
    orders: 5,
    spent: '$96.14',
  },
  {
    id: '2',
    name: 'Lenora Robinson',
    location: 'Kaydenville',
    orders: 12,
    spent: '$22.18',
  },
  {
    id: '3',
    name: 'Daisy Tran',
    location: 'East Freidaton',
    orders: 6,
    spent: '$59.64',
  },
  {
    id: '4',
    name: 'Alejandro Holland',
    location: 'South Marcellus',
    orders: 3,
    spent: '$54.52',
  },
  {
    id: '5',
    name: 'Rose Foster',
    location: 'South Olestad',
    orders: 15,
    spent: '$45.8',
  },
]

function TableContent() {
  const mapElementToKey = (element: Customer) =>
    `${element.name}-${element.location}`
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
    const nameColumn = (
      <Group
        component={Link}
        href={urls.Modernize.dashboard.customers.info(element.id)}
      >
        <Checkbox
          checked={selections.isSelected(mapElementToKey(element))}
          size='sm'
          onChange={onItemSelectionChange(mapElementToKey(element))}
        />
        <Avatar color='general' size={rem(48)} variant='light'>
          {String(element.name).charAt(0)}
        </Avatar>
        <Text fw='500' size='sm'>
          {element.name}
        </Text>
      </Group>
    )

    return (
      <Table.Tr key={mapElementToKey(element)}>
        <Table.Td>{nameColumn}</Table.Td>
        <Table.Td>{element.location}</Table.Td>
        <Table.Td>{element.orders}</Table.Td>
        <Table.Td>{element.spent}</Table.Td>
      </Table.Tr>
    )
  })

  const customerHeadColumn = (
    <Group>
      <Checkbox
        checked={isAllSelected}
        indeterminate={indeterminate}
        onChange={onAllSelectionsChange}
      />
      <Text size='sm'>Name</Text>
    </Group>
  )

  return (
    <Table withRowBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>{customerHeadColumn}</Table.Th>
          <Table.Th>Location</Table.Th>
          <Table.Th>Orders</Table.Th>
          <Table.Th>Spent</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function TableFooter() {
  return (
    <Group justify='space-between'>
      <Pagination total={24} />
      <Text c='general.5'>154 Results</Text>
    </Group>
  )
}

export function CustomersList() {
  return (
    <Stack>
      <TableFilters />
      <TableContent />
      <TableFooter />
    </Stack>
  )
}
