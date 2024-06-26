'use client'

import {
  Avatar,
  Box,
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
    <Box className={styles.content}>
      <Stack align='flex-start' gap='xl' h='100%' p='lg'>
        <Group>
          <Avatar size={rem(40)} />
          <Title order={3}>slack</Title>
        </Group>

        <Stack gap={0}>
          <Title order={3}>Invite your team</Title>
          <Text size='sm'>
            Slack is most useful when your whole team can join the conversation.
            Try adding people to Roscent Community to start being more
            productive together!
          </Text>
        </Stack>
        <Button radius='xl'> Invite People</Button>

        <Skeleton h={rem(260)} radius='lg' w='100%' />
        <Group w='100%'>
          <Avatar size={rem(40)} />
          <Stack gap={0}>
            <Title order={5}>Roscent Community</Title>
            <Text size='sm'>Workspace URL: Roscent-community</Text>
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

      <Footer />
    </Box>
  )
}

function Footer() {
  const forwardIcon = <ArrowBendUpRight className='icon-size-sm' />
  const replyIcon = <ArrowBendUpLeft className='icon-size-sm' />
  return (
    <Group className={styles.footer} gap='xs' justify='flex-end' p='md'>
      <Button leftSection={replyIcon} size='xs' variant='light'>
        Reply
      </Button>
      <Button rightSection={forwardIcon} size='xs' variant='light'>
        Forward
      </Button>
    </Group>
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
