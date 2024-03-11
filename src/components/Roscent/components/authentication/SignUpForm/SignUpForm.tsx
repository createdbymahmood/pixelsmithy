'use client'

import {
  Anchor,
  Button,
  Divider,
  Group,
  Input,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import Link from 'next/link'

import {SocialLogin} from '@/components/Roscent'
import {
  PasswordInput,
  TermsOfUse,
} from '@/components/Roscent/components/authentication/components'
import {urls} from '@/constants'

import styles from './SignUpForm.module.scss'

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={3}>Sign Up </Title>
      <Text c='dimmed' size='sm'>
        Your Social Campaigns
      </Text>
    </Stack>
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

      <PasswordInput />
      <TermsOfUse />

      <Button mt='xs' radius='lg' size='md' fullWidth>
        Sign Up
      </Button>

      <Group gap={rem(5)} justify='center'>
        <Text c='dimmed' size='sm'>
          Already have an Account?
        </Text>

        <Anchor
          c='indigo.4'
          component={Link}
          href={urls.roscent.authentication.signIn}
          size='sm'
          underline='never'
        >
          Sign in
        </Anchor>
      </Group>
    </Stack>
  )
}

export function SignUpForm() {
  return (
    <Stack gap='xl'>
      <Header />
      <SocialLogin />
      <Divider label='Or with Email' labelPosition='center' my='xs' />
      <FormView />
    </Stack>
  )
}
