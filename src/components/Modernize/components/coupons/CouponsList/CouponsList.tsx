'use client'

import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {
  Avatar,
  Badge,
  Checkbox,
  Group as MantineGroup,
  Pagination,
  rem,
  Stack,
  Table,
  Text,
} from '@mantine/core'
import {Tag} from '@phosphor-icons/react/dist/ssr'
import {get, isUndefined} from 'lodash-es'

import {TableFilters} from '@/components/Modernize/components/common'
import {useTableState} from '@/hooks/useTableState'

const Group = MantineGroup as MantineComponent<{
  props: GroupProps & {href?: string}
  ref: HTMLDivElement
  stylesNames: 'root'
  vars: GroupCssVariables
  ctx: GroupStylesCtx
}>

type CouponStatus = 'active' | 'expired'

interface Coupon {
  name: string
  category: string
  usage: number
  status: CouponStatus
  date: string
}

const elements: Coupon[] = [
  {
    name: 'Summer discount 10% off',
    category: 'Summer2020',
    usage: 15,
    date: 'May 5, 2020 - May 15, 2020',
    status: 'active',
  },
  {
    name: 'Free shipping on all items',
    category: 'Summer2020',
    usage: 18,
    date: 'May 5, 2020 - May 15, 2020',
    status: 'expired',
  },
]

const couponStatusMap: Record<CouponStatus, JSX.Element> = {
  active: <Badge color='green'>Active</Badge>,
  expired: <Badge color='general'>Expired</Badge>,
}

interface TableContentProps {
  status?: CouponStatus
}

function TableContent({status}: TableContentProps) {
  const mapElementToKey = (element: Coupon) => element.name
  const {
    onAllSelectionsChange,
    onItemSelectionChange,
    selections,
    indeterminate,
    isAllSelected,
  } = useTableState({
    items: elements.map(mapElementToKey),
  })

  const rows = elements
    .filter((el) => {
      if (isUndefined(status)) return true
      return el.status === status
    })
    .map((element) => {
      const couponStatus = get(couponStatusMap, element.status)

      const nameColumn = (
        <Group>
          <Checkbox
            checked={selections.isSelected(mapElementToKey(element))}
            size='sm'
            onChange={onItemSelectionChange(mapElementToKey(element))}
          />
          <Avatar
            c='primary'
            color='primary'
            radius='sm'
            size={rem(48)}
            variant='filled'
          >
            <Tag className='icon-size-md' weight='bold' />
          </Avatar>

          <Stack gap={0}>
            <Text fw='500' size='sm'>
              {element.name}
            </Text>
            <Text c='general.5' size='sm'>
              {element.category}
            </Text>
          </Stack>
        </Group>
      )

      return (
        <Table.Tr key={mapElementToKey(element)}>
          <Table.Td>{nameColumn}</Table.Td>
          <Table.Td>{element.usage} times</Table.Td>
          <Table.Td>{couponStatus}</Table.Td>
          <Table.Td>{element.date}</Table.Td>
        </Table.Tr>
      )
    })

  const nameHeadColumn = (
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
          <Table.Th>{nameHeadColumn}</Table.Th>
          <Table.Th>Usage</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Date</Table.Th>
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
      <Text c='general.5'>120 Results</Text>
    </Group>
  )
}

interface CouponsListProps {
  status?: CouponStatus
}

export function CouponsList({status}: CouponsListProps) {
  return (
    <Stack gap={rem(20)}>
      <TableFilters />
      <TableContent status={status} />
      <TableFooter />
    </Stack>
  )
}
