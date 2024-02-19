'use client'

import {
  Avatar,
  Button,
  Card,
  Divider,
  Group,
  rem,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  ArrowBendDoubleUpLeft,
  ArrowBendUpLeft,
  ArrowBendUpRight,
  DotsThree,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'

import styles from './EmailInbox.module.scss'

function Subject() {
  return (
    <Card p='xs' style={{borderRadius: 'var(--mantine-radius-md)'}}>
      <Title order={5}>Invite your team to Slack</Title>
    </Card>
  )
}

function Header() {
  return (
    <Card p='xs' style={{borderRadius: 'var(--mantine-radius-md)'}}>
      <Group align='flex-start' gap='xs'>
        <Avatar size={rem(24)} />

        <Stack gap={rem(3)}>
          <Group align='baseline' gap='xs'>
            <Text size='sm'>Slack</Text>
            <Divider orientation='vertical' />
            <Text size='sm'>no-reply@email.slackhq.com</Text>
          </Group>
          <Text c='dimmed' size='sm'>
            Today, 18:30
          </Text>
        </Stack>

        <Group ml='auto'>
          <ArrowBendUpLeft className={clsx('icon-size-md', 'cursor-pointer')} />
          <ArrowBendDoubleUpLeft
            className={clsx('icon-size-md', 'cursor-pointer')}
          />
          <ArrowBendUpRight
            className={clsx('icon-size-md', 'cursor-pointer')}
          />
          <DotsThree className={clsx('icon-size-md', 'cursor-pointer')} />
        </Group>
      </Group>
    </Card>
  )
}

function Content() {
  return (
    <Stack align='flex-start' className={styles.content} gap='xl' h='100%'>
      <Group>
        <Avatar size={rem(40)} />
        <Title order={3}>slack</Title>
      </Group>

      <Stack gap={0}>
        <Title order={3}>Invite your team</Title>
        <Text size='sm'>
          Slack is most useful when your whole team can join the conversation.
          Try adding people to SnowUI Community to start being more productive
          together!
        </Text>
      </Stack>
      <Button radius='xl'> Invite People</Button>

      <Skeleton h={rem(260)} radius='lg' w='100%' />
      <Group w='100%'>
        <Avatar size={rem(40)} />
        <Stack gap={0}>
          <Title order={5}>SnowUI Community</Title>
          <Text size='sm'>Workspace URL: SnowUI-community</Text>
          <Text size='sm'>Email: byewind@live.com</Text>
        </Stack>

        <Button ml='auto' size='xs' variant='light'>
          Sign In
        </Button>
      </Group>

      <Text c='dimmed' size='sm' ta='center' w='100%'>
        ©2024 Slack Technologies, LLC, a Salesforce company.
      </Text>
    </Stack>
  )
}

export function EmailInbox() {
  return (
    <PerfectScrollbar>
      <Stack>
        <Subject />
        <Header />
        <Content />
      </Stack>
    </PerfectScrollbar>
  )
}
