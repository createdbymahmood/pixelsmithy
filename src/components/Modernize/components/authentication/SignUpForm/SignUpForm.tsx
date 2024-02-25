import {Anchor, Button, Group, rem, Stack, Text, Title} from '@mantine/core'
import Link from 'next/link'

import {urls} from '@/constants'

function AleadyHaveAnAccount() {
  return (
    <Group gap={rem(5)} justify='center'>
      <Text c='dimmed' size='sm'>
        Have an Account?
      </Text>

      <Anchor
        c='primary.7'
        component={Link}
        href={urls.SnowUI.authentication.signIn}
        size='sm'
        underline='never'
      >
        Sign In
      </Anchor>
    </Group>
  )
}

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={4}> Create an Account</Title>
      <AleadyHaveAnAccount />
    </Stack>
  )
}

function FormView() {
  return (
    <Stack>
      <Button size='md'>Create Account</Button>
    </Stack>
  )
}

export function SignUpForm() {
  return (
    <Stack>
      <Header />
      <FormView />
    </Stack>
  )
}
