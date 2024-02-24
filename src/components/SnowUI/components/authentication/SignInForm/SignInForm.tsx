'use client'
import {
  Anchor,
  Button,
  Divider,
  Group,
  Input,
  PasswordInput,
  rem,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {Eye, EyeSlash} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

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

export function SocialLogin() {
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

      <PasswordInput
        classNames={{input: styles.input}}
        placeholder='Password'
        radius='md'
        type='password'
        visibilityToggleIcon={({reveal}) =>
          reveal ? (
            <Eye
              style={{
                width: 'var(--psi-icon-size)',
                height: 'var(--psi-icon-size)',
              }}
            />
          ) : (
            <EyeSlash
              style={{
                width: 'var(--psi-icon-size)',
                height: 'var(--psi-icon-size)',
              }}
            />
          )
        }
      />

      <Anchor
        c='indigo.4'
        className={styles.forgotPassword}
        component={Link}
        href={urls.SnowUI.authentication.forgotPassword}
        size='sm'
        underline='never'
      >
        Forgot Password?
      </Anchor>

      <Button mt='xs' radius='lg' fullWidth>
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
    <Stack gap='xl'>
      <Header />
      <SocialLogin />
      <Divider label='Or with Email' labelPosition='center' my='xs' />
      <FormView />
    </Stack>
  )
}
