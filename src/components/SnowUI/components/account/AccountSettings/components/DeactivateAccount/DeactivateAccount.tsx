import {Alert, Button, Card, Checkbox, Group, Stack, Title} from '@mantine/core'
import {Info} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Notifications</Title>
      <Button bg='red.7' size='xs'>
        Deactivate Account
      </Button>
    </Group>
  )
}

function DangerAlert() {
  return (
    <Alert
      bg='indigo.0'
      icon={<Info size={20} />}
      styles={{
        label: {
          width: '100%',
        },
      }}
      title='You Are Deactivating Your Account'
    >
      For extra security, this requires you to confirm your email or phone
      number when you reset yousignr password. Learn more
    </Alert>
  )
}

function Confirmation() {
  return <Checkbox label='I confirm my account deactivation' />
}

export function DeactivateAccount() {
  return (
    <Card>
      <Stack>
        <Header />
        <DangerAlert />
        <Confirmation />
      </Stack>
    </Card>
  )
}
