'use client'

import {Box, Group, rem, Stack, Title} from '@mantine/core'
import {ArrowLeft} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/dist/client/link'

import {useCallbackUrl} from '@/hooks/useCallbackUrl'
import {JobhuntlyCompanyDashboardJobs} from '@/lib/declarative-routing'

import {Steps} from './components'

function Header() {
  const [callbackUrl] = useCallbackUrl({
    defaultValue: JobhuntlyCompanyDashboardJobs(),
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
