'use client'

import {
  Avatar,
  Checkbox,
  Group,
  Pagination,
  rem,
  Stack,
  Table,
  Text,
} from '@mantine/core'
import {CalendarBlank} from '@phosphor-icons/react/dist/ssr'
import dayJS from 'dayjs'

import {TableFilters} from '@/components/roscent'
import {dateToString} from '@/components/roscent/utils/date'
import {useTableState} from '@/hooks/useTableState'

const elements = [
  {
    user: 'ByeWind',
    registrationDate: dayJS().subtract(4, 'years').subtract(1, 'months'),
    email: 'example@gmail.com',
  },
  {
    user: 'Natali Craig',
    registrationDate: dayJS()
      .subtract(1, 'year')
      .subtract(5, 'months')
      .subtract(2, 'days'),
    email: 'example@gmail.com',
  },
  {
    user: 'Drew Cano',
    registrationDate: dayJS().subtract(5, 'months').subtract(10, 'days'),
    email: 'example@gmail.com',
  },
  {
    user: 'Orlando Diggs',
    registrationDate: dayJS().subtract(1, 'month').subtract(25, 'days'),
    email: 'example@gmail.com',
  },
  {
    user: 'Andi Lane',
    registrationDate: dayJS(),
    email: 'example@gmail.com',
  },
]

function TableContent() {
  const {
    onAllSelectionsChange,
    onItemSelectionChange,
    selections,
    indeterminate,
    isAllSelected,
  } = useTableState({items: elements.map((element) => element.user)})

  const rows = elements.map((element) => {
    const managerColumn = (
      <Group>
        <Checkbox
          checked={selections.isSelected(element.user)}
          size='xs'
          onChange={onItemSelectionChange(element.user)}
        />
        <Avatar size={rem(24)} />
        <Text size='xs'>{element.user}</Text>
      </Group>
    )

    return (
      <Table.Tr key={element.user}>
        <Table.Td>{managerColumn}</Table.Td>
        <Table.Td>{element.email}</Table.Td>
        <Table.Td>
          <Group gap={rem(5)}>
            <CalendarBlank size={16} />
            {dateToString(element.registrationDate)}
          </Group>
        </Table.Td>
      </Table.Tr>
    )
  })

  const managerColumnHead = (
    <Group>
      <Checkbox
        checked={isAllSelected}
        indeterminate={indeterminate}
        size='xs'
        onChange={onAllSelectionsChange}
      />
      <Text size='xs'>Manager</Text>
    </Group>
  )
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>{managerColumnHead}</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Registration Date</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

export function ProjectUsers() {
  return (
    <Stack>
      <TableFilters />
      <TableContent />
      <Pagination size='sm' total={5} />
    </Stack>
  )
}
