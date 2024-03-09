import {Anchor, Card, Divider, Group, rem, Stack, Text} from '@mantine/core'
import React from 'react'

function Header() {
  return (
    <Group justify='space-between'>
      <Text fw='bold'>Overview</Text>

      <Anchor c='primary' underline='never'>
        Edit
      </Anchor>
    </Group>
  )
}

function Body() {
  return (
    <Stack>
      <Stack gap={rem(7)}>
        <Text c='general.3' size='sm'>
          Address
        </Text>

        <Text c='general.5' className='pre-line' size='sm'>
          {`831 Wilhelmine Glen\n40583-2293\nSouth Lelastad Ireland`}
        </Text>
      </Stack>

      <Stack gap={rem(7)}>
        <Text c='general.3' size='sm'>
          Email Address
        </Text>

        <Text c='general.5' size='sm'>
          lenora_rob@yahoo.com
        </Text>
      </Stack>

      <Stack gap={rem(7)}>
        <Text c='general.3' size='sm'>
          Phone
        </Text>

        <Text c='general.5' size='sm'>
          636-458-4820
        </Text>
      </Stack>
    </Stack>
  )
}

function Footer() {
  return (
    <Anchor c='red' size='sm' underline='never'>
      Delete Customer
    </Anchor>
  )
}

export function CustomerOverview() {
  return (
    <Card>
      <Stack gap={rem(24)}>
        <Header />
        <Body />
        <Divider />
        <Footer />
      </Stack>
    </Card>
  )
}
