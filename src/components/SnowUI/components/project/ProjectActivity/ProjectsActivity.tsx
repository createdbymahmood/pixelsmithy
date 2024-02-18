'use client'

import {
  Avatar,
  Checkbox,
  Group,
  Pagination,
  Stack,
  Table,
  Text,
} from '@mantine/core'
import dayJS from 'dayjs'
import {get} from 'lodash-es'

import {TableFilters} from '@/components/SnowUI'
import {useTableState} from '@/components/SnowUI/hooks/useTableState'
import {dateToString} from '@/components/SnowUI/utils/date'
import {iconMap} from '@/components/SnowUI/utils/icons'

const elements = [
  {
    file: 'Project tech requirements.pdf',
    type: 'pdf',
    size: '5.6MB',
    uploader: 'Natali Craig',
    uploadTime: dayJS().subtract(4, 'years').subtract(1, 'months'),
  },
  {
    file: 'Create Project Wireframes.xls',
    type: 'xlsx',
    size: '2.3MB',
    uploader: 'Natali Craig',
    uploadTime: dayJS()
      .subtract(1, 'year')
      .subtract(5, 'months')
      .subtract(2, 'days'),
  },
  {
    file: 'Completed Project Stylings.pdf',
    type: 'pdf',
    size: '4.6MB',
    uploader: 'Natali Craig',
    uploadTime: dayJS().subtract(5, 'months').subtract(10, 'days'),
  },
  {
    file: 'Dashboard-design.jpg',
    type: 'img',
    size: '1.2.6MB',
    uploader: 'Natali Craig',
    uploadTime: dayJS().subtract(1, 'month').subtract(25, 'days'),
  },
]

const createElementKey = (fileName: string, uploader: string) =>
  `file-${fileName}-uploader-${uploader}`

function TableContent() {
  const {
    onAllSelectionsChange,
    onItemSelectionChange,
    selections,
    indeterminate,
  } = useTableState({
    items: elements.map((element) =>
      createElementKey(element.file, element.uploader),
    ),
  })

  const rows = elements.map((element) => {
    const Icon = get(iconMap, element.type)
    return (
      <Table.Tr key={createElementKey(element.file, element.uploader)}>
        <Table.Td>
          <Group>
            <Checkbox
              checked={selections.isSelected(
                createElementKey(element.file, element.uploader),
              )}
              size='xs'
              onChange={onItemSelectionChange(
                createElementKey(element.file, element.uploader),
              )}
            />
            <Icon size={24} />
            <Text size='xs'>{element.file}</Text>
          </Group>
        </Table.Td>

        <Table.Td>
          <Group gap='xs'>
            <Avatar size={24} />
            <Text size='xs'>{element.uploader}</Text>
          </Group>
        </Table.Td>
        <Table.Td>{element.size}</Table.Td>
        <Table.Td>{dateToString(element.uploadTime)}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Group>
              <Checkbox
                indeterminate={indeterminate}
                size='xs'
                onChange={onAllSelectionsChange}
              />
              <Text size='xs'>File Name</Text>
            </Group>
          </Table.Th>
          <Table.Th>User</Table.Th>
          <Table.Th>File Size</Table.Th>
          <Table.Th>Upload Time</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

export function ProjectActivity() {
  return (
    <Stack>
      <TableFilters />
      <TableContent />
      <Pagination size='sm' total={5} />
    </Stack>
  )
}
