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

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Earnings</Title>
      <Button ml='auto' size='xs' variant='light'>
        Withdraw Earnings
      </Button>
    </Group>
  )
}

function NetEarnings() {
  return (
    <Stack gap={rem(5)}>
      <Text size='sm'>Net Earnings</Text>
      <Group gap='sm'>
        <Title order={4}>$6,840</Title>
      </Group>
    </Stack>
  )
}

function Change() {
  return (
    <Stack gap={rem(5)}>
      <Text size='sm'>Change</Text>
      <Group gap='sm'>
        <Title order={4}>80%</Title>
      </Group>
    </Stack>
  )
}

function Fees() {
  return (
    <Stack gap={rem(5)}>
      <Text size='sm'>Fees</Text>
      <Group gap='sm'>
        <Title order={4}>$1,240</Title>
      </Group>
    </Stack>
  )
}

function EarningStats() {
  return (
    <Group justify='space-between'>
      <Stack>
        <Group gap='xl'>
          <NetEarnings />
          <Divider orientation='vertical' />
          <Change />
          <Divider orientation='vertical' />
          <Fees />
        </Group>
      </Stack>
    </Group>
  )
}

function Notice() {
  return (
    <Text c='dimmed' size='sm'>
      Last 30 day earnings calculated. Apart from arranging the order of topics.
    </Text>
  )
}

export function Earnings() {
  return (
    <Card>
      <Stack>
        <Header />
        <EarningStats />
        <Notice />
      </Stack>
    </Card>
  )
}
