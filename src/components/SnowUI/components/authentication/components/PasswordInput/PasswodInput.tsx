'use client'

import type {InputProps, PasswordInputProps} from '@mantine/core'
import {
  Group,
  Input,
  PasswordInput as OriginalPasswordInput,
  Progress,
  Stack,
  Text,
} from '@mantine/core'
import {Eye, EyeSlash} from '@phosphor-icons/react/dist/ssr'
import {range} from 'lodash-es'
import {useState} from 'react'

import styles from './PasswodInput.module.scss'

export function PasswordInput() {
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
      <OriginalPasswordInput
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
