import {Button, Card, Group, rem, Stack, Title} from '@mantine/core'
import {StackOverflowLogo} from '@phosphor-icons/react'

export function MobileApplicationAnnouncement() {
  return (
    <Card h='100%'>
      <Stack align='center'>
        <Title order={5} ta='center'>
          Have you tried new Mobile Application?
        </Title>

        <StackOverflowLogo
          style={{
            height: rem(115),
            width: rem(154),
            marginTop: 'var(--mantine-spacing-lg)',
          }}
          weight='duotone'
        />

        <Group mt='lg'>
          <Button size='xs' variant='light'>
            Learn more
          </Button>
          <Button size='xs'>Try Now</Button>
        </Group>
      </Stack>
    </Card>
  )
}
