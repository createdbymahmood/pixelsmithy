import {
  Button,
  Card,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import React from 'react'

import {SignInSessions} from '@/components/Roscent/components/account/AccountSecurity/components'

import {ApiKeys} from './components'

function Header() {
  return <Title order={4}>API Overview</Title>
}

interface SectionProps {
  title: string
  description: string
  cta: string
}

function Section({cta, description, title}: SectionProps) {
  return (
    <Group justify='space-between'>
      <Stack gap={rem(2)}>
        <Title order={5}>{title}</Title>
        <Text c='dimmed' size='xs'>
          {description}
        </Text>
      </Stack>
      <Button size='xs' variant='light'>
        {cta}
      </Button>
    </Group>
  )
}

function Sections() {
  return (
    <Stack>
      <Section
        cta='Get Started'
        description=' Use images to enhance your post, improve its flow, add humor and explain complex topics.'
        title='How to set API'
      />

      <Divider />

      <Section
        cta='Create Rule'
        description='Plan your blog post by choosing a topic, creating an outline conduct research, and checking facts.'
        title='Developer Tools'
      />
    </Stack>
  )
}

export function ApiOverview() {
  return (
    <Stack gap='xl'>
      <Card>
        <Stack>
          <Header />
          <Sections />
        </Stack>
      </Card>

      <SignInSessions />
      <ApiKeys />
    </Stack>
  )
}
