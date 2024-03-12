'use client'

import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Input,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import React from 'react'

import styles from './SignInForm.module.scss'

function Header() {
  return (
    <Stack align='center' gap='sm'>
      <Title order={4}>Login to Account</Title>
      <Text size={rem(18)}>
        Please enter your email and password to continue
      </Text>
    </Stack>
  )
}

function FormView() {
  const emailFieldLabel = <Text size='lg'>Email Address</Text>
  const passwordFieldLabel = (
    <Group justify='space-between' w='100%'>
      <Text size='lg'>Password</Text>
      <Anchor c='primary.4' underline='never'>
        Forgot Password?
      </Anchor>
    </Group>
  )

  return (
    <Stack gap='lg' mt={rem(20)}>
      <Input.Wrapper label={emailFieldLabel}>
        <Input
          name='email'
          placeholder='esteban_schiller@gmail.com'
          radius='md'
          size='md'
          type='email'
        />
      </Input.Wrapper>

      <Input.Wrapper
        fw='600'
        label={passwordFieldLabel}
        labelProps={{w: '100%'}}
      >
        <Input
          name='password'
          placeholder='esteban_schiller@gmail.com'
          radius='md'
          size='md'
          type='password'
        />
      </Input.Wrapper>

      <Checkbox
        classNames={{label: styles.checkboxLabel}}
        color='gray.5'
        label='Remember Password'
        size='md'
        variant='outline'
        defaultChecked
      />

      <Button color='primary.4' radius='lg' size='lg'>
        Sign in
      </Button>

      <Group gap='xs' justify='center'>
        <Text size='lg'>Don’t have an account?</Text>
        <Anchor c='primary.4' fw='600' size='lg' underline='always'>
          Create Account
        </Anchor>
      </Group>
    </Stack>
  )
}

export function SignInForm() {
  return (
    <Stack>
      <Header />
      <FormView />
    </Stack>
  )
}
