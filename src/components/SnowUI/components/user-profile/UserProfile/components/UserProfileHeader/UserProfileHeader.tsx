import {
  Avatar,
  Button,
  Card,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  ChatCircleDots,
  EnvelopeSimple,
  MapPin,
  Phone,
  ShareNetwork,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr'

function Header() {
  return (
    <Group justify='space-between'>
      <Group>
        <Avatar size={rem(40)} />
        <Title order={4}>ByeWind</Title>
      </Group>

      <Group>
        <ShareNetwork className='icon-size-md' />
        <Button leftSection={<ChatCircleDots />} size='xs'>
          Message
        </Button>
      </Group>
    </Group>
  )
}

function Info() {
  return (
    <Group c='dimmed'>
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

      <Group gap={rem(5)}>
        <Phone className='icon-size-sm' />
        <Text c='dimmed' size='xs'>
          +852 19850622
        </Text>
      </Group>
    </Group>
  )
}

function Projects() {
  return (
    <Stack gap={rem(5)}>
      <Text size='sm'>Projects</Text>
      <Group gap='sm'>
        <Title order={4}>75</Title>
      </Group>
    </Stack>
  )
}

function WorkingGroup() {
  return (
    <Stack gap={rem(5)}>
      <Text size='sm'>Working group</Text>
      <Group gap='sm'>
        <Title order={4}>23</Title>
      </Group>
    </Stack>
  )
}

function Likes() {
  return (
    <Stack gap={rem(5)}>
      <Text size='sm'>Likes</Text>
      <Group gap='sm'>
        <Title order={4}>1,123</Title>
      </Group>
    </Stack>
  )
}

function Stats() {
  return (
    <Group justify='space-between'>
      <Stack>
        <Group gap='xl'>
          <Projects />
          <Divider orientation='vertical' />
          <WorkingGroup />
          <Divider orientation='vertical' />
          <Likes />
        </Group>
      </Stack>
    </Group>
  )
}

export function UserProfileHeader() {
  return (
    <Card w='100%'>
      <Stack>
        <Header />
        <Info />
        <Stats />
      </Stack>
    </Card>
  )
}
