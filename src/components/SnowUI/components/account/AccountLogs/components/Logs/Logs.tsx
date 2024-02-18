import {Box, Button, Card, Group, rem, Stack, Text, Title} from '@mantine/core'
import {DownloadSimple} from '@phosphor-icons/react/dist/ssr'
import type {Dayjs} from 'dayjs'
import dayjs from 'dayjs'

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Logs</Title>
      <Button size='xs' variant='light'>
        Download Report
      </Button>
    </Group>
  )
}

const logs = [
  {
    date: dayjs().subtract(4, 'months'),
    log: 'POST /v1/invoice/in_3585_9341/invalid',
  },
  {
    date: dayjs().subtract(4, 'months'),
    log: 'POST /v1/customer/c_630faaba0c57b/not_found',
  },
  {
    date: dayjs().subtract(4, 'months'),
    log: 'POST /v1/customer/c_630faaba0c579/not_found',
  },
  {
    date: dayjs().subtract(4, 'months'),
    log: 'POST /v1/invoices/in_1881_1220/payment',
  },
  {
    date: dayjs().subtract(4, 'months'),
    log: 'POST /v1/customer/c_630faaba0c57b/not_found',
  },
]

interface LogProps {
  log: string
  date: Dayjs
}

function Log({date, log}: LogProps) {
  return (
    <Group gap={rem(50)}>
      <Text size='xs'>{date.format('MMM D, YYYY, H:MM A')}</Text>
      <Text size='xs'>{log}</Text>

      <Box
        className='icon-size-normal cursor-pointer'
        component={DownloadSimple}
        ml='auto'
      />
    </Group>
  )
}

function LogsList() {
  const content = logs.map((log) => {
    return <Log {...log} key={log.log} />
  })

  return <Stack>{content}</Stack>
}

export function Logs() {
  return (
    <Card>
      <Stack>
        <Header />
        <LogsList />
      </Stack>
    </Card>
  )
}
