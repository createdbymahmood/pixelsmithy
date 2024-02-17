import {
  Button,
  Card,
  Checkbox,
  Group,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import React from 'react'

import styles from './EmailPreferences.module.scss'

function SaveActions() {
  return (
    <Group gap='xs'>
      <Button size='xs' variant='light'>
        Cancel
      </Button>
      <Button size='xs'>Save Changes</Button>
    </Group>
  )
}

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Email Preferences</Title>
      <SaveActions />
    </Group>
  )
}

const preferences = [
  {
    title: 'Successful Payments',
    description: 'Receive a notification for every successful payment.',
    defaultActivated: true,
  },
  {
    title: 'Fee Collection',
    description:
      'Receive a notification each time you collect a fee from sales.',
    defaultActivated: true,
  },
  {
    title: 'Customer Payment Dispute',
    description:
      'Receive a notification if a payment is disputed by a customer and for dispute purposes.',
    defaultActivated: true,
  },
  {
    title: 'Refund Alerts',
    description:
      'Receive a notification if a payment is stated as risk by the Finance Department.',
    defaultActivated: true,
  },
  {
    title: 'Invoice Payments',
    description:
      'Receive a notification if a customer sends an incorrect amount to pay their invoice.',
    defaultActivated: false,
  },
  {
    title: 'Webhook API Endpoints',
    description:
      'Receive notifications for consistently failing webhook API endpoints.',
    defaultActivated: false,
  },
]

interface PreferenceProps {
  title: string
  description: string
  defaultActivated: boolean
}

function Preference(props: PreferenceProps) {
  return (
    <Group align='flex-start' className={styles.col} pb='md' wrap='nowrap'>
      <Checkbox defaultChecked={props.defaultActivated} />
      <Stack gap={rem(4)}>
        <Title order={5}>{props.title}</Title>
        <Text c='dimmed' className={styles.description} size='xs'>
          {props.description}
        </Text>
      </Stack>
    </Group>
  )
}

function Preferences() {
  const content = preferences.map((preference) => {
    return <Preference key={preference.title} {...preference} />
  })
  return (
    <SimpleGrid className={styles.stack} cols={{xs: 1, md: 2}}>
      {content}
    </SimpleGrid>
  )
}

export function EmailPreferences() {
  return (
    <Card>
      <Stack>
        <Header />
        <Preferences />
      </Stack>
    </Card>
  )
}
