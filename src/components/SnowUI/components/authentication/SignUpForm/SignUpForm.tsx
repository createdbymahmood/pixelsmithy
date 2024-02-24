'use client'

import type {InputProps, PasswordInputProps} from '@mantine/core'
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Input,
  PasswordInput,
  Progress,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {Eye, EyeSlash} from '@phosphor-icons/react/dist/ssr'
import {range} from 'lodash-es'
import Link from 'next/link'
import {useState} from 'react'

import {SocialLogin} from '@/components/SnowUI'
import {urls} from '@/constants'

import styles from './SignUpForm.module.scss'

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

function PasswordField() {
  const requirements = [
    {re: /.{8,}/, label: 'At least 8 characters'},
    {re: /[0-9]/, label: 'Includes number'},
    {re: /[a-z]/, label: 'Includes lowercase letter'},
    {re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol'},
  ]

  const [value, setValue] = useState('')

  const countOfMatchingRequirements = requirements.reduce((prev, curr) => {
    if (curr.re.test(value)) {
      return prev + 1
    }

    return prev + 0
  }, 0)

  const checks = range(0, requirements.length).map((index) => {
    const meets = index < countOfMatchingRequirements
    return <Progress key={index} size='sm' value={meets ? 100 : 0} w='100%' />
  })

  const iconStyles = {
    width: 'var(--psi-icon-size)',
    height: 'var(--psi-icon-size)',
    color: 'var(--mantine-color-dimmed)',
  }

  const commonPasswordFieldProps: PasswordInputProps = {
    classNames: {input: styles.input},
    radius: 'md',
    type: 'password',
  }

  return (
    <Stack>
      <PasswordInput
        {...commonPasswordFieldProps}
        placeholder='Password'
        value={value}
        visibilityToggleIcon={({reveal}) =>
          reveal ? <Eye style={iconStyles} /> : <EyeSlash style={iconStyles} />
        }
        withAsterisk
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Group gap='xs' wrap='nowrap'>
        {checks}
      </Group>

      <Text c='dimmed' size='xs'>
        Use 8 or more characters with a mix of letters, numbers & symbols.
      </Text>

      <Input
        {...(commonPasswordFieldProps as InputProps)}
        placeholder='Repeat Password'
      />
    </Stack>
  )
}

function TermsOfUse() {
  return (
    <Group gap='xs'>
      <Checkbox size='xs' />
      <Group gap={rem(3)}>
        <Text c='dimmed' size='sm'>
          I Accept the
        </Text>

        <Anchor
          c='indigo.4'
          component={Link}
          href={urls.SnowUI.index}
          size='sm'
          underline='never'
        >
          Terms
        </Anchor>
      </Group>
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

      <PasswordField />
      <TermsOfUse />

      <Button mt='xs' fullWidth>
        Sign Up
      </Button>

      <Group gap={rem(5)} justify='center'>
        <Text c='dimmed' size='sm'>
          Already have an Account?
        </Text>

        <Anchor
          c='indigo.4'
          component={Link}
          href={urls.SnowUI.authentication.signIn}
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
