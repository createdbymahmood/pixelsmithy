import {
  Anchor,
  Box,
  Button,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import Link from 'next/link'
import React from 'react'

import {RoscentAuthenticationSignin} from '@/lib/declarative-routing'

import {PasswordInput, TermsOfUse} from '../components'

function AlreadyResetPassword() {
  return (
    <Group gap={rem(5)} justify='center'>
      <Text c='dimmed' size='sm'>
        Have you already reset the password?
      </Text>

      <Anchor
        c='indigo.4'
        component={Link}
        href={RoscentAuthenticationSignin()}
        size='sm'
        underline='never'
      >
        Sign in
      </Anchor>
    </Group>
  )
}

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={3}>Setup New Password</Title>
      <AlreadyResetPassword />
    </Stack>
  )
}

function FormView() {
  return (
    <Stack>
      <Box mt='md'>
        <PasswordInput />
      </Box>

      <TermsOfUse />
      <Button mt='sm' radius='md' size='md' fullWidth>
        Submit
      </Button>
    </Stack>
  )
}

export function ResetPasswordForm() {
  return (
    <Stack>
      <Header />
      <FormView />
    </Stack>
  )
}
