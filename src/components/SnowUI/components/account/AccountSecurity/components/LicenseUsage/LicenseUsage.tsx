'use client'

import {
  Card,
  CopyButton,
  Group,
  Menu,
  rem,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core'
import {CaretDown, ClipboardText, Clock} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import dayJS from 'dayjs'

import {CompleationStatus} from '@/components/SnowUI'
import {dateToString} from '@/components/SnowUI/utils/date'

import styles from './LicenseUsage.module.scss'

const elements = [
  {
    operator: 'DSI: Workstation 2',
    ipAddress: '236.125.56.78',
    time: dayJS().subtract(2, 'days'),
    apiKey: 'fftt456765gjkkjhi8306767',
    status: 'inProgress' as CompleationStatus,
  },
  {
    operator: 'ReXe: Workstation 29',
    ipAddress: '236.125.56.69',
    time: dayJS().subtract(2, 'days'),
    apiKey: 'ertt456765gjkkjhi8303434',
    status: 'inProgress' as CompleationStatus,
  },
  {
    operator: 'RamenLC: Workstation 2',
    ipAddress: '236.125.56.10',
    time: dayJS().subtract(2, 'days'),
    apiKey: 'dctt456765gjkkjhi83093985',
    status: 'inProgress' as CompleationStatus,
  },
  {
    operator: 'Nest Five: Workstation 86',
    ipAddress: '236.125.56.54',
    time: dayJS().subtract(2, 'days'),
    apiKey: 'uytt456765gjkkjhi4312673',
    status: 'inProgress' as CompleationStatus,
  },
  {
    operator: 'DSI: Workstation 2',
    ipAddress: '236.100.56.50',
    time: dayJS().subtract(2, 'days'),
    apiKey: 'ygd456765gjkkjhi83095427',
    status: 'inProgress' as CompleationStatus,
  },
]

function TableContent() {
  const rows = elements.map((element, index) => {
    const timeColumn = (
      <Group gap={rem(5)}>
        <Clock className='icon-size-sm' />
        <Text size='xs'>{dateToString(element.time)}</Text>
      </Group>
    )

    const copyColumn = (
      <CopyButton value={element.apiKey}>
        {({copied, copy}) => (
          <Group className={styles.copyGroup} gap={rem(5)} onClick={copy}>
            <Text size='xs'>{element.apiKey}</Text>
            <ClipboardText
              className={clsx('icon-size-sm', styles.clipboardIcon)}
            />
          </Group>
        )}
      </CopyButton>
    )

    return (
      <Table.Tr key={element.apiKey}>
        <Table.Td>{element.operator}</Table.Td>
        <Table.Td>{element.ipAddress}</Table.Td>
        <Table.Td>{timeColumn}</Table.Td>
        <Table.Td>{copyColumn}</Table.Td>
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
          <Table.Th>Location</Table.Th>
          <Table.Th>Device</Table.Th>
          <Table.Th>IP Address</Table.Th>
          <Table.Th>Time</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>License Usage</Title>

      <Menu shadow='md'>
        <Menu.Target>
          <Group className={styles.menuTrigger} gap='xs'>
            <Text size='xs'>1 Hour</Text>
            <CaretDown className={clsx(styles.caret, 'icon-size-sm')} />
          </Group>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>1 Hour</Menu.Item>
          <Menu.Item>Day</Menu.Item>
          <Menu.Item>Week</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}

export function LicenseUsage() {
  return (
    <Card>
      <Stack>
        <Header />
        <TableContent />
      </Stack>
    </Card>
  )
}
