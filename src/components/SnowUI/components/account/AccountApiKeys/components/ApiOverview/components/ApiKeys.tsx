'use client'

import {Card, Stack, Table, Title} from '@mantine/core'
import dayJS from 'dayjs'

import {CompleationStatus} from '@/components/SnowUI'
import {dateToString} from '@/components/SnowUI/utils/date'

const elements = [
  {
    label: 'none set',
    apiKey: 'fftt456765gjkkjhi83093985',
    time: dayJS().subtract(2, 'days'),
  },
  {
    label: 'Navitare',
    apiKey: 'jk076590ygghgh324vd33',
    time: dayJS().subtract(2, 'days'),
  },
  {
    label: 'Docs API Key',
    apiKey: 'jk076590ygghgh324vd3568',
    time: dayJS().subtract(2, 'days'),
  },
  {
    label: 'Identity Key',
    apiKey: 'hhet6454788gfg555hhh4',
    time: dayJS().subtract(2, 'days'),
  },
  {
    label: 'Remote Interface',
    apiKey: 'fftt456765gjkkjhi83093985',
    time: dayJS().subtract(2, 'days'),
  },
]

function TableContent() {
  const rows = elements.map((element, index) => {
    return (
      <Table.Tr key={`${element.apiKey}-${element.label}`}>
        <Table.Td>{element.label}</Table.Td>
        <Table.Td>{element.apiKey}</Table.Td>
        <Table.Td>{dateToString(element.time)}</Table.Td>
        <Table.Td>
          <CompleationStatus index={index} />
        </Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Label</Table.Th>
          <Table.Th>API Keys</Table.Th>

          <Table.Th>Date</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function Header() {
  return <Title order={5}>Api Keys</Title>
}

export function ApiKeys() {
  return (
    <Card>
      <Stack>
        <Header />
        <TableContent />
      </Stack>
    </Card>
  )
}
