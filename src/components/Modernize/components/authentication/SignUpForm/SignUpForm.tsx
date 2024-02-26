'use client'
import {
  Anchor,
  Button,
  Divider,
  Group,
  Input,
  rem,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import Link from 'next/link'

import {urls} from '@/constants'

function AlreadySignedUp() {
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
      <AlreadySignedUp />
    </Stack>
  )
}

function FormView() {
  return (
    <Stack gap='sm'>
      <Input.Wrapper label='Email'>
        <Input placeholder='Enter Email Address' size='md' />
      </Input.Wrapper>

      <Input.Wrapper label='Password'>
        <Input placeholder='Create Password' size='md' type='password' />
      </Input.Wrapper>
      <Button size='md'>Create Account</Button>
    </Stack>
  )
}

function TermsOfServiceNotice() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Text c='general.5' size='sm'>
        By creating account, you agree to our
      </Text>

      <Anchor
        c='primary.7'
        component={Link}
        href={urls.Modernize.index}
        ml={rem(5)}
        size='sm'
        underline='never'
      >
        Terms of Service
      </Anchor>
    </Stack>
  )
}

function SocialLogin() {
  const leftSection = <Skeleton h={rem(24)} w={rem(24)} circle />
  return (
    <Stack align='center' gap='xs'>
      <Text c='general.5' size='sm'>
        Or create an account using:
      </Text>

      <Button leftSection={leftSection} size='md' variant='default' fullWidth>
        Continue with Google
      </Button>
      <Button leftSection={leftSection} size='md' variant='default' fullWidth>
        Continue with Facebook
      </Button>
    </Stack>
  )
}

export function SignUpForm() {
  return (
    <Stack gap='sm'>
      <Header />
      <FormView />
      <TermsOfServiceNotice />
      <Divider />
      <SocialLogin />
    </Stack>
  )
}
