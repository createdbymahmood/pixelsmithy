'use client'

import {Button, Divider, rem, Stack, Text, Title} from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

import {urls} from '@/constants'

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Image
        alt='Registration Completed LogoO'
        height={140}
        src='/assets/modernize/illustrations/registration-complete.svg'
        width={140}
      />
      <Title mt='sm' order={4} ta='center'>
        Almost There!
      </Title>
      <Text c='general.5'>Check your email inbox and confirm your account</Text>
    </Stack>
  )
}

function SocialLogin() {
  return (
    <Stack align='center' gap='xs'>
      <Text c='general.5' size='sm'>
        Didn’t receive any mail?
      </Text>

      <Button
        component={Link}
        href={urls.Modernize.authentication.signIn}
        size='md'
        variant='default'
        fullWidth
      >
        Resend Confirmation
      </Button>
    </Stack>
  )
}

export function RegistrationComplete() {
  return (
    <Stack gap='sm'>
      <Header />
      <Divider />
      <SocialLogin />
    </Stack>
  )
}
