import {
  Alert,
  Button,
  Card,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {Info} from '@phosphor-icons/react/dist/ssr'

import {StrippedProgress} from '@/components/SnowUI/components/common/StrippedProgress'

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={4}>Overview</Title>
      <Group>
        <Button size='xs' variant='light'>
          Cancel Subscription
        </Button>
        <Button size='xs'>Upgrade Plan</Button>
      </Group>
    </Group>
  )
}

function UsageInfo() {
  return (
    <Stack>
      <Group align='baseline' gap={rem(5)}>
        <Title order={5}>Users</Title>
        <Text c='dimmed' size='sm'>
          86 of 100 Used
        </Text>
      </Group>

      <StrippedProgress lines={7} />

      <Text c='dimmed' size='sm'>
        14 Users remaining until your plan requires update
      </Text>
    </Stack>
  )
}

interface InfoSectionProps {
  title: string
  description: string
}

function InfoSection({description, title}: InfoSectionProps) {
  return (
    <Stack gap={0}>
      <Title order={5}>{title}</Title>
      <Text c='dimmed' size='sm'>
        {description}
      </Text>
    </Stack>
  )
}

function PaymendDeclinedAlert() {
  return (
    <Alert
      bg='gray.1'
      icon={<Info size={20} />}
      title='We need your attention!'
    >
      Your payment was declined. To start using tools, please Add Payment
      Method.
    </Alert>
  )
}

export function BillingOverview() {
  return (
    <Card>
      <Stack>
        <Header />
        <Divider />
        <UsageInfo />
        <Divider />
        <InfoSection
          description='We will send you a notification upon Subscription expiration.'
          title='Active until Dec 9, 2022'
        />
        <Divider />
        <InfoSection
          description='We will send you a notification upon Subscription expiration.'
          title='Active until Dec 9, 2022'
        />
        <PaymendDeclinedAlert />
      </Stack>
    </Card>
  )
}
