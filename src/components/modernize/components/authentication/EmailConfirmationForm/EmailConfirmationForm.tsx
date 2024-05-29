'use client'
import {Button, Divider, Input, rem, Stack, Text, Title} from '@mantine/core'
import Link from 'next/link'

import {ModernizeAuthenticationSignin} from '@/lib/declarative-routing'

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={4} ta='center'>
        Confirm Email
      </Title>
      <Text c='general.5'>Check Your Email and Enter Confirmation Code</Text>
    </Stack>
  )
}

function FormView() {
  return (
    <Stack gap='sm'>
      <Input.Wrapper label='Confirmation Code'>
        <Input placeholder='Enter Code' size='md' />
      </Input.Wrapper>

      <Button size='md'>Confirm Email</Button>
    </Stack>
  )
}

function SocialLogin() {
  return (
    <Stack align='center' gap='xs'>
      <Text c='general.5' size='sm'>
        Haven’t received your code?
      </Text>

      <Button
        component={Link}
        href={ModernizeAuthenticationSignin()}
        size='md'
        variant='default'
        fullWidth
      >
        Resend Code
      </Button>
    </Stack>
  )
}

export function EmailConfirmationForm() {
  return (
    <Stack gap='sm'>
      <Header />
      <FormView />
      <Divider />
      <SocialLogin />
    </Stack>
  )
}
