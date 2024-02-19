import {
  ActionIcon,
  Autocomplete,
  Card,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {CaretUpDown, DownloadSimple} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import styles from './Invoices.module.scss'

function Header() {
  return <Title order={5}>Invoices</Title>
}

function Notice() {
  return (
    <Text c='dimmed' size='sm'>
      Download apart from order of the good awesome invoice topics.
    </Text>
  )
}

function DownloadBox() {
  return (
    <Group wrap='nowrap'>
      <Autocomplete
        classNames={{
          root: styles.autocompleteRoot,
          input: styles.autocompleteInput,
        }}
        data={['Individual Seller Account']}
        defaultValue='Individual Seller Account'
        placeholder='Pick value or enter anything'
        radius='md'
        rightSection={<CaretUpDown className='icon-size-sm' />}
        w='100%'
      />
      <ActionIcon aria-label='Settings' variant='light'>
        <DownloadSimple className='icon-size-sm' />
      </ActionIcon>
    </Group>
  )
}

export function Invoices() {
  return (
    <Card>
      <Stack gap='md'>
        <Header />
        <DownloadBox />
        <Notice />
      </Stack>
    </Card>
  )
}
