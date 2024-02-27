'use client'
import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {
  Button,
  Group as MantineGroup,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {ArrowLeft} from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

import {urls} from '@/constants'

const Group = MantineGroup as MantineComponent<{
  props: GroupProps & {href?: string}
  ref: HTMLDivElement
  stylesNames: 'root'
  vars: GroupCssVariables
  ctx: GroupStylesCtx
}>

function BackButton() {
  return (
    <Group
      c='general.5'
      className='cursor-pointer'
      component={Link}
      gap={rem(4)}
      href={urls.Modernize.dashboard.customers.index}
    >
      <ArrowLeft className='icon-size-md' weight='bold' />
      <Text size='sm'>Back</Text>
    </Group>
  )
}

function Actions() {
  return (
    <Group ml='auto'>
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
    </Group>
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
