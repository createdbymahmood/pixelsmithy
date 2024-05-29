'use client'
import {
  Anchor,
  Button,
  Checkbox,
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

import {
  ModernizeAuthenticationForgotpassword,
  ModernizeAuthenticationSignup,
} from '@/lib/declarative-routing'

function SignUpNotice() {
  return (
    <Group gap={rem(5)} justify='center'>
      <Text c='dimmed' size='sm'>
        New to Our Product?
      </Text>

      <Anchor
        c='primary.7'
        component={Link}
        href={ModernizeAuthenticationSignup()}
        size='sm'
        underline='never'
      >
        Create an Account
      </Anchor>
    </Group>
  )
}

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={4}> Sign In</Title>
      <SignUpNotice />
    </Stack>
  )
}

function FormView() {
  return (
    <Stack gap='sm' w='100%'>
      <Input.Wrapper label='Email'>
        <Input
          name='email'
          placeholder='Enter Email Address'
          size='md'
          type='email'
        />
      </Input.Wrapper>

      <Input.Wrapper label='Password'>
        <Input placeholder='Create Password' size='md' type='password' />
      </Input.Wrapper>
      <Checkbox label='Keep me signed in' />
      <Button size='md'>Sign in</Button>
      <Anchor
        c='primary.7'
        component={Link}
        href={ModernizeAuthenticationForgotpassword()}
        size='sm'
        ta='center'
        underline='never'
      >
        Forgot your password?
      </Anchor>
    </Stack>
  )
}

function SocialLogin() {
  const leftSection = <Skeleton h={rem(24)} w={rem(24)} circle />
  return (
    <Stack align='center' gap='xs'>
      <Text c='general.5' size='sm'>
        Or sign in using:
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

export function SignInForm() {
  return (
    <Stack gap='sm'>
      <Header />
      <FormView />
      <Divider />
      <SocialLogin />
    </Stack>
  )
}
