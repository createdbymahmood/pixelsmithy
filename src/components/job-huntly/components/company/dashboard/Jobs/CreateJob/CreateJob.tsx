'use client'

import {Box, Group, rem, Stack, Title} from '@mantine/core'
import {ArrowLeft} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/dist/client/link'
import React from 'react'

import {urls} from '@/constants'
import {useCallbackUrl} from '@/hooks/useCallbackUrl'

import {Steps} from './components'

function Header() {
  const [callbackUrl] = useCallbackUrl({
    defaultValue: urls.JobHuntly.company.dashboard.jobs.listing,
  })
  const backArrow = (
    <Link href={callbackUrl}>
      <Box
        className='cursor-pointer'
        component={ArrowLeft}
        h={rem(40)}
        w={rem(40)}
        weight='bold'
      />
    </Link>
  )

  return (
    <Group pb='xxxl'>
      {backArrow}
      <Title order={4}>Post a Job</Title>
    </Group>
  )
}

export function CreateJob() {
  return (
    <Stack gap={0}>
      <Header />
      <Steps />
    </Stack>
  )
}
