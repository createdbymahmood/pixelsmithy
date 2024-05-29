'use client'
import {Button, Divider, Input, rem, Stack, Text, Title} from '@mantine/core'
import Link from 'next/link'

import {ModernizeAuthenticationSignin} from '@/lib/declarative-routing'

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={4} ta='center'>
        Password Reset
      </Title>
      <Text c='general.5'>We Will Help You Reset your Password</Text>
    </Stack>
  )
}

function FormView() {
  return (
    <Stack gap='sm'>
      <Input.Wrapper label='Email'>
        <Input
          name='email'
          placeholder='Enter Email Address'
          size='md'
          type='email'
        />
      </Input.Wrapper>

      <Button size='md'>Reset Password</Button>
    </Stack>
  )
}

function SocialLogin() {
  return (
    <Stack align='center' gap='xs'>
      <Text c='general.5' size='sm'>
        Remembered your Password?
      </Text>

      <Button
        component={Link}
        href={ModernizeAuthenticationSignin()}
        size='md'
        variant='default'
        fullWidth
      >
        Back to Sign In
      </Button>
    </Stack>
  )
}

export function ForgotPasswordForm() {
  return (
    <Stack gap='sm'>
      <Header />
      <FormView />
      <Divider />
      <SocialLogin />
    </Stack>
  )
}
