import {Box, Button, Checkbox, Group, Input, rem, Stack} from '@mantine/core'
import {CreditCard} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScreenHeader} from '@/components/flights/components/common'

function FormView() {
  return (
    <Stack gap='xl'>
      <Input
        defaultValue='4500 0910 4334 3443'
        placeholder='Card number'
        rightSection={<Box className='icon-size-md' component={CreditCard} />}
      />
      <Group wrap='nowrap'>
        <Input defaultValue='10/3' placeholder='exp' />
        <Input placeholder='CVV/CVC' />
      </Group>
      <Checkbox label='Save card' defaultChecked />
    </Stack>
  )
}

export function Checkout() {
  return (
    <IOSScreen variant='dark'>
      <Stack flex={1} gap='md' mt={rem(63)} pb={0} px='md'>
        <ScreenHeader px={0} title='Payment' />

        <FormView />
        <Button mt='auto' radius='md' size='lg' fullWidth>
          Pay
        </Button>
      </Stack>
    </IOSScreen>
  )
}
