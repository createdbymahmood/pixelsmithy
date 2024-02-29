'use client'
import {Button, Group, rem, Stack, Text, Title} from '@mantine/core'
import {ArrowLeft} from '@phosphor-icons/react'
import Link from 'next/link'

import {GroupLink} from '@/components/common'
import {urls} from '@/constants'

function BackButton() {
  return (
    <GroupLink
      c='general.5'
      className='cursor-pointer'
      component={Link}
      gap={rem(4)}
      href={urls.Modernize.dashboard.customers.index}
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
        href={urls.Modernize.dashboard.customers.index}
        ml='auto'
        variant='default'
      >
        Cancel
      </Button>
      <Button component={Link} href={urls.Modernize.dashboard.customers.index}>
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
