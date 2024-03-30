'use client'
import {
  Anchor,
  Button,
  Group,
  PinInput,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {DeviceMobile} from '@phosphor-icons/react/dist/ssr'

import styles from './VerificationForm.module.scss'

function Header() {
  return (
    <Stack align='center' gap={0}>
      <DeviceMobile size={80} weight='duotone' />
      <Title mt='md' order={3}>
        Two Step Verification
      </Title>
      <Text c='dimmed' mt={rem(5)} size='sm'>
        Enter the verification code we sent to
      </Text>
      <Title mt='lg' order={4}>
        +852 19850622
      </Title>
    </Stack>
  )
}

function OTPView() {
  return (
    <Stack align='center' gap='lg' miw={rem(384)}>
      <Title order={5}>Type your 4 digit security code</Title>

      <PinInput classNames={{input: styles.input}} size='md' mask />

      <Button radius='lg' size='md' fullWidth>
        Submit
      </Button>
    </Stack>
  )
}

function Footer() {
  return (
    <Group gap={rem(5)} justify='center'>
      <Text c='dimmed' size='sm'>
        Didn’t get the code ?
      </Text>

      <Anchor c='indigo.4' size='sm' underline='never'>
        Resend
      </Anchor>

      <Text c='dimmed' size='sm'>
        Or
      </Text>

      <Anchor c='indigo.4' size='sm' underline='never'>
        Call US
      </Anchor>
    </Group>
  )
}

export function VerificationForm() {
  return (
    <Stack gap='xl'>
      <Header />
      <OTPView />
      <Footer />
    </Stack>
  )
}
