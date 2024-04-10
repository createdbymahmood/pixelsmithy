'use client'

import {FormSection} from '@job-huntly/components/applicant/dashboard/Settings/common'
import {
  Box,
  Button,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import {CheckCircle} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

function Header() {
  return (
    <Stack gap='xxs'>
      <Text fw='600' size='lg'>
        Basic Information
      </Text>
      <Text c='neutrals.5'>
        This is login information that you can update anytime.
      </Text>
    </Stack>
  )
}

function EmailSettings() {
  return (
    <FormSection
      description='Update your email address to make sure it is safe'
      title='Update Email'
    >
      <Stack align='flex-start' gap={rem(20)}>
        <Stack gap={rem(2)} w='100%'>
          <Group gap='xs'>
            <Text fw='500'>jakegyll@email.com</Text>
            <Box
              c='green.5'
              className='icon-size-lg'
              component={CheckCircle}
              weight='bold'
            />
          </Group>
          <Text c='neutrals.5'>Your email address is verified.</Text>
        </Stack>

        <TextInput
          label='Update Email'
          name='email'
          placeholder='Enter your new email'
          size='md'
          type='email'
          w='100%'
        />
        <Button size='md'>Update Email</Button>
      </Stack>
    </FormSection>
  )
}

function PasswordSettings() {
  return (
    <FormSection
      description='Manage your password to make sure it is safe'
      title='New Password'
    >
      <Stack align='flex-start' gap={rem(20)}>
        <TextInput
          description='Minimum 8 characters'
          label='Old Password'
          name='password'
          placeholder='Enter your old password'
          size='md'
          type='password'
          w='100%'
        />

        <TextInput
          description='Minimum 8 characters'
          label='New Password'
          name='password'
          placeholder='Enter your new password'
          size='md'
          type='password'
          w='100%'
        />
        <Button size='md'>Change Password</Button>
      </Stack>
    </FormSection>
  )
}

export function LoginSettings() {
  return (
    <Stack gap='xl'>
      <Header />
      <Divider />
      <EmailSettings />
      <Divider />
      <PasswordSettings />
    </Stack>
  )
}
