'use client'

import {Box, Button, Group, rem, Title} from '@mantine/core'
import {ArrowLeft, CaretDown} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

import {GroupLink} from '@/components/common'
import {JobhuntlyCompanyDashboardApplicants} from '@/lib/declarative-routing'

const backButtonSize = rem(40)

function Action() {
  const leftSection = (
    <Box className='icon-size-md' component={CaretDown} weight='bold' />
  )
  return (
    <Button leftSection={leftSection} ml='auto' size='md' variant='outline'>
      More Action
    </Button>
  )
}

function BackButton() {
  return (
    <GroupLink component={Link} href={JobhuntlyCompanyDashboardApplicants()}>
      <Box
        className='cursor-pointer'
        component={ArrowLeft}
        h={backButtonSize}
        w={backButtonSize}
        weight='bold'
      />
    </GroupLink>
  )
}

export function Header() {
  return (
    <Group gap='xl'>
      <BackButton />
      <Title order={4}>Applicant Details</Title>
      <Action />
    </Group>
  )
}
