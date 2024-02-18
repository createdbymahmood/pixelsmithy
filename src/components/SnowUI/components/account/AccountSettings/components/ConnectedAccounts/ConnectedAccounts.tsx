import {
  Alert,
  Avatar,
  Card,
  Group,
  rem,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  Title,
} from '@mantine/core'
import {ShieldCheck} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import styles from './ConnectedAccounts.module.scss'

function Header() {
  return <Title order={5}>Connected Accounts</Title>
}

function SecurityAlert() {
  return (
    <Alert bg='indigo.0' icon={<ShieldCheck size={20} />}>
      Two-factor authentication adds an extra layer of security to your account.
      To log in, in you'll need to provide a 4 digit amazing code. Learn More
    </Alert>
  )
}

interface AccountProps {
  title: string
  description: string
  defaultConnected: boolean
}

function Account({defaultConnected, description, title}: AccountProps) {
  return (
    <Group className={styles.col} pb='md' wrap='nowrap'>
      <Avatar size={rem(32)} />
      <Stack gap={rem(4)}>
        <Title order={5}>{title}</Title>
        <Text c='dimmed' className={styles.accountDescription} size='xs'>
          {description}
        </Text>
      </Stack>
      <Switch defaultChecked={defaultConnected} ml='auto' size='xs' />
    </Group>
  )
}

const apps = [
  {
    title: 'Snow UI',
    description:
      'An advanced Dashboard / SaaS UI kit and design system for Figma.',
    defaultConnected: true,
  },
  {
    title: 'Figma',
    description: 'the collaborative interface design tool.',
    defaultConnected: true,
  },
  {
    title: 'Twitter',
    description:
      'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.',
    defaultConnected: false,
  },
  {
    title: 'Instagram',
    description:
      'A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.',
    defaultConnected: false,
  },
]

function AccountsList() {
  const content = apps.map((app) => {
    return <Account {...app} key={app.title} />
  })
  return (
    <SimpleGrid
      className={styles.stack}
      cols={2}
      spacing='xl'
      verticalSpacing='sm'
    >
      {content}
    </SimpleGrid>
  )
}

export function ConnectedAccounts() {
  return (
    <Card>
      <Stack>
        <Header />
        <SecurityAlert />
        <AccountsList />
      </Stack>
    </Card>
  )
}
