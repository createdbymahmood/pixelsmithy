import {
  Anchor,
  Button,
  Center,
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
import React from 'react'

import {urls} from '@/constants'

import styles from './SignInForm.module.scss'

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={3}>Sign In</Title>
      <Text c='dimmed' size='sm'>
        Your Social Campaigns
      </Text>
    </Stack>
  )
}

function SocialLogin() {
  const leftSection = <Skeleton h={rem(24)} w={rem(24)} circle />
  return (
    <Group>
      <Button leftSection={leftSection} radius='lg' variant='default'>
        Sign in with Apple
      </Button>
      <Button leftSection={leftSection} radius='lg' variant='default'>
        Sign in with Google
      </Button>
    </Group>
  )
}

function FormView() {
  return (
    <Stack>
      <Input
        classNames={{input: styles.input}}
        placeholder='Email'
        radius='md'
      />

      <Input
        classNames={{input: styles.input}}
        placeholder='Password'
        radius='md'
        type='password'
      />

      <Anchor
        c='indigo.4'
        className={styles.forgotPassword}
        component={Link}
        href={urls.SnowUI.authentication.forgotPassword}
        size='sm'
        underline='never'
      >
        Forogt Password?
      </Anchor>

      <Button mt='xs' fullWidth>
        Sign In
      </Button>

      <Group gap={rem(5)} justify='center'>
        <Text c='dimmed' size='sm'>
          Not a Member yet?
        </Text>

        <Anchor
          c='indigo.4'
          component={Link}
          href={urls.SnowUI.authentication.signUp}
          size='sm'
          underline='never'
        >
          Sign Up
        </Anchor>
      </Group>
    </Stack>
  )
}

export function SignInForm() {
  return (
    <Center h='100%'>
      <Stack gap='xl'>
        <Header />
        <SocialLogin />
        <Divider label='Or with Email' labelPosition='center' my='xs' />
        <FormView />
      </Stack>
    </Center>
  )
}
