import {
  Avatar,
  Card,
  Divider,
  Group,
  Progress,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  EnvelopeSimple,
  MapPin,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr'

import styles from './AccountInfo.module.scss'

function Header() {
  return <Title order={4}>ByeWind</Title>
}

function UserDetails() {
  return (
    <Group>
      <Group gap={rem(5)}>
        <UserCircle className='icon-size-sm' />
        <Text c='dimmed' size='xs'>
          Developer
        </Text>
      </Group>

      <Group gap={rem(5)}>
        <MapPin className='icon-size-sm' />
        <Text c='dimmed' size='xs'>
          SF, Bay Area
        </Text>
      </Group>

      <Group gap={rem(5)}>
        <EnvelopeSimple className='icon-size-sm' />
        <Text c='dimmed' size='xs'>
          byewind@twitter.com
        </Text>
      </Group>
    </Group>
  )
}

function ProfileCompleationStatus() {
  return (
    <Stack miw={rem(160)}>
      <Text size='sm'>Profile Compleation</Text>

      <Progress.Root classNames={{root: styles.progress}} size={rem(28)}>
        <Progress.Section color='indigo.1' value={70}>
          <Progress.Label c='black' styles={{label: {lineHeight: 1.3}}}>
            70%
          </Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Stack>
  )
}

function Earnings() {
  return (
    <Stack>
      <Text size='sm'>Earnings</Text>
      <Group gap='sm'>
        <Title order={4}>$4,500</Title>
      </Group>
    </Stack>
  )
}

function Projects() {
  return (
    <Stack>
      <Text size='sm'>Projects</Text>
      <Title order={4}>75</Title>
    </Stack>
  )
}

function SuccessRate() {
  return (
    <Stack>
      <Text size='sm'>Success Rate</Text>
      <Title order={4}>60</Title>
    </Stack>
  )
}

export function ProfileStats() {
  return (
    <Group justify='space-between'>
      <Stack>
        <Group gap='xl'>
          <ProfileCompleationStatus />
          <Divider orientation='vertical' />
          <Earnings />
          <Divider orientation='vertical' />
          <Projects />
          <Divider orientation='vertical' />
          <SuccessRate />
        </Group>
      </Stack>
    </Group>
  )
}

export function AccountInfo() {
  return (
    <Card>
      <Stack>
        <Group justify='space-between'>
          <Stack>
            <Header />
            <UserDetails />
          </Stack>

          <Avatar size={40} />
        </Group>
        <ProfileStats />
      </Stack>
    </Card>
  )
}
