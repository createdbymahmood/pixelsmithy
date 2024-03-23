import type {MantineColor} from '@mantine/core'
import {Box, Card, Divider, Group, rem, Stack, Text} from '@mantine/core'
import {
  Cardholder,
  CheckCircle,
  CreditCard as CreditCardIcon,
  XCircle,
} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScreenHeader} from '@/components/Flights/components/common'
import {BottomNavigation} from '@/components/Flights/components/screens/general/components'

interface CC {
  exp: string
  number: string
}

interface CreditCardProps extends CC {
  deletable?: boolean
}

function CreditCard({deletable = false, exp, number}: CreditCardProps) {
  const Icon = deletable ? XCircle : CheckCircle
  const color: MantineColor = deletable ? 'error.5' : 'primary'
  return (
    <Group gap='md'>
      <Cardholder className='icon-size-lg' />
      <Stack gap='xs'>
        <Text size='sm'>{number}</Text>
        <Text c='gray.6' size='sm'>
          {exp}
        </Text>
      </Stack>
      <Group gap='xs' ml='auto'>
        <Box
          c={color}
          className='icon-size-lg'
          component={Icon}
          weight='fill'
        />
        {deletable ? (
          <Text c={color} fw='500'>
            Delete
          </Text>
        ) : null}
      </Group>
    </Group>
  )
}

function CreditCardsList() {
  return (
    <Stack>
      <CreditCard exp='1/30' number='MasterCard •••• 2321' />
      <Divider />
      <CreditCard exp='Card expired' number='MIR •••• 7765' deletable />
    </Stack>
  )
}

function AddNewCard() {
  return (
    <Card bg='gray.1' className='cursor-pointer' p='sm' radius='md'>
      <Group>
        <Box c='primary' className='icon-size-lg' component={CreditCardIcon} />
        <Text size='sm'>Add new card</Text>
      </Group>
    </Card>
  )
}

export function CreditCards() {
  return (
    <IOSScreen variant='dark'>
      <Stack gap='md' h='100%' mt={rem(63)} pb={0} px='md'>
        <ScreenHeader title='My cards' />
        <CreditCardsList />
        <Box mt={rem(50)}>
          <AddNewCard />
        </Box>
      </Stack>
      <BottomNavigation />
    </IOSScreen>
  )
}
