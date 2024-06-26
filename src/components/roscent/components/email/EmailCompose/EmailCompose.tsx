'use client'

import {
  Button,
  Group,
  Input,
  rem,
  Skeleton,
  Stack,
  TagsInput,
  Text,
} from '@mantine/core'
import {
  CaretUpDown,
  Image,
  Paperclip,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import {EmailInboxSidebar} from '@roscent/components'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'

import styles from './EmailCompose.module.scss'

function ComposeEditor() {
  return (
    <Stack className={styles.editor} gap={0}>
      <Skeleton h={rem(400)} />

      <Footer />
    </Stack>
  )
}

function Header() {
  return (
    <Stack classNames={{root: styles.header}} gap={rem(5)} pt={rem(5)}>
      <TagsInput
        classNames={{
          root: styles.autocompleteRoot,
        }}
        data={['ByeWind', 'Slack']}
        defaultValue={['ByeWind', 'Slack']}
        leftSection={<Text size='sm'>To</Text>}
        rightSection={<CaretUpDown className='icon-size-sm' />}
      />

      <Subject />
    </Stack>
  )
}

function Subject() {
  const leftSection = (
    <Text c='dimmed' size='sm'>
      Subject
    </Text>
  )

  return (
    <Group
      align='baseline'
      className={styles.subject}
      gap={rem(6)}
      px='sm'
      py={rem(5)}
      wrap='nowrap'
    >
      {leftSection}
      <Input
        classNames={{section: styles.leftSection}}
        defaultValue='Introducing the roscent'
        w='100%'
      />
    </Group>
  )
}

function Footer() {
  return (
    <Group className={styles.footer} justify='flex-end'>
      <Trash className={clsx('cursor-pointer', 'icon-size-md')} />
      <Image className={clsx('cursor-pointer', 'icon-size-md')} />
      <Paperclip className={clsx('cursor-pointer', 'icon-size-md')} />
      <Button size='xs' variant='light'>
        Send Late
      </Button>
      <Button size='xs'>Send</Button>
    </Group>
  )
}

export function EmailCompose() {
  return (
    <Group align='flex-start' h='100%' w='100%' wrap='nowrap'>
      <EmailInboxSidebar />

      <PerfectScrollbar style={{width: '100%'}}>
        <Stack w='100%'>
          <Header />
          <ComposeEditor />
        </Stack>
      </PerfectScrollbar>
    </Group>
  )
}
