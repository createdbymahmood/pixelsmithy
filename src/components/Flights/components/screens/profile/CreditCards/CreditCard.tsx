import {Box, Group, Stack, Text} from '@mantine/core'
import {Cardholder, CheckCircle} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export function CreditCard() {
  return (
    <Group gap='md'>
      <Cardholder className='icon-size-lg' />
      <Stack gap='xs'>
        <Text size='sm'>MasterCard •••• 2321</Text>
        <Text c='gray.6' size='sm'>
          1/30
        </Text>
      </Stack>
      <Box
        c='primary'
        className='icon-size-lg'
        component={CheckCircle}
        ml='auto'
        weight='fill'
      />
      something random purple from that point of view
    </Group>
  )
}
