import {Card, Group, rem, Stack, Table, Text, Title} from '@mantine/core'
import {DownloadSimple} from '@phosphor-icons/react/dist/ssr'
import dayJS from 'dayjs'

import {dateToString} from '@roscent/utils/date'

const elements = [
  {
    date: dayJS().subtract(5, 'months'),
    description: 'Invoice for Ocrober 2024',
    amount: '$123.79',
  },
  {
    date: dayJS().subtract(5, 'months'),
    description: 'Invoice for September 2024',
    amount: '$98.03',
  },
  {
    date: dayJS().subtract(5, 'months'),
    description: 'Paypal',
    amount: '$35.07',
  },
  {
    date: dayJS().subtract(5, 'months'),
    description: 'Invoice for July 2024',
    amount: '$142.80',
  },
  {
    date: dayJS().subtract(5, 'months'),
    description: 'Invoice for June 2024',
    amount: '$123.79',
  },
]

function TableContent() {
  const rows = elements.map((element) => {
    const downloadColumn = (
      <Group className='cursor-pointer' gap={rem(5)}>
        <DownloadSimple className='icon-size-sm' />
        <Text size='xs'>PDF</Text>
      </Group>
    )

    return (
      <Table.Tr key={`${element.description}-${element.amount}`}>
        <Table.Td>{dateToString(element.date)}</Table.Td>
        <Table.Td>{element.description}</Table.Td>
        <Table.Td>{element.amount}</Table.Td>
        <Table.Td>{downloadColumn}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Amount</Table.Th>
          <Table.Th>Invoice</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Billing History</Title>

      <Group>
        <Text size='sm'>Month</Text>
        <Text c='dimmed' size='sm'>
          Year
        </Text>
        <Text c='dimmed' size='sm'>
          All Time
        </Text>
      </Group>
    </Group>
  )
}

export function BillingHistory() {
  return (
    <Card>
      <Stack gap='xs'>
        <Header />
        <TableContent />
      </Stack>
    </Card>
  )
}
