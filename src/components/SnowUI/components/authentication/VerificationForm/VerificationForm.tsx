'use client'
import {
  Anchor,
  Box,
  Button,
  Group,
  Input,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {DeviceMobile} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {isEmpty, isEqual} from 'lodash-es'
import {useState} from 'react'
import OtpInput from 'react-otp-input'

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
  const [otp, setOtp] = useState('')

  return (
    <Stack align='center' gap='lg' miw={rem(384)}>
      <Title order={5}>Type your 4 digit security code</Title>

      <Box w={rem(248)}>
        <OtpInput
          containerStyle={{
            gap: rem(10),
            width: '100%',
            justifyContent: 'space-between',
          }}
          numInputs={4}
          renderInput={(props) => {
            console.log(props.value)
            return (
              <Input
                classNames={{
                  input: clsx(styles.input, {
                    [styles.filled]: !isEmpty(props.value),
                  }),
                }}
                radius='lg'
                size='lg'
                {...props}
              />
            )
          }}
          value={otp}
          onChange={setOtp}
        />
      </Box>

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
