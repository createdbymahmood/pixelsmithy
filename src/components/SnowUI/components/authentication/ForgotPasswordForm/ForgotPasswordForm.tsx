import {Anchor, Button, Input, rem, Stack, Text, Title} from '@mantine/core'
import Link from 'next/link'
import React from 'react'

import {urls} from '@/constants'

import styles from './ForgotPasswordForm.module.scss'

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={3}>Forgot Password?</Title>
      <Text c='dimmed' size='sm'>
        Enter your email to reset your password.
      </Text>
    </Stack>
  )
}

function FormView() {
  return (
    <Stack w={rem(360)}>
      <Input
        classNames={{input: styles.input}}
        name='email'
        placeholder='Please enter your email address'
        radius='md'
        type='email'
        w='100%'
      />

      <Button mt='xs' radius='md' fullWidth>
        Submit
      </Button>
    </Stack>
  )
}

function Footer() {
  return (
    <Anchor
      c='indigo.4'
      className={styles.forgotPassword}
      component={Link}
      href={urls.SnowUI.authentication.signIn}
      mt='sm'
      size='sm'
      underline='never'
    >
      Back
    </Anchor>
  )
}

export function ForgotPasswordForm() {
  return (
    <Stack align='center'>
      <Header />
      <FormView />
      <Footer />
    </Stack>
  )
}
