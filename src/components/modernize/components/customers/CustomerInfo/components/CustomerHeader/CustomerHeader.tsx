'use client'
import {Button, Group, rem, Stack, Text, Title} from '@mantine/core'
import {ArrowLeft} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import {GroupLink} from '@/components/common'
import {ModernizeDashboardCustomers} from '@/lib/declarative-routing'

function BackButton() {
  return (
    <GroupLink
      c='general.5'
      className='cursor-pointer'
      component={Link}
      gap={rem(4)}
      href={ModernizeDashboardCustomers()}
    >
      <ArrowLeft className='icon-size-md' weight='bold' />
      <Text size='sm'>Back</Text>
    </GroupLink>
  )
}

function Actions() {
  return (
    <GroupLink ml='auto'>
      <Button
        component={Link}
        href={ModernizeDashboardCustomers()}
        ml='auto'
        variant='default'
      >
        Cancel
      </Button>
      <Button component={Link} href={ModernizeDashboardCustomers()}>
        Save
      </Button>
    </GroupLink>
  )
}

export function CustomerHeader() {
  return (
    <Stack gap={0}>
      <BackButton />
      <Group>
        <Title order={5}>Customer Information</Title>
        <Actions />
      </Group>
    </Stack>
  )
}
