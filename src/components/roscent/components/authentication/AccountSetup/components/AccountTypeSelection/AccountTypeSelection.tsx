'use client'

import {Button, rem, Stack, Text, Title} from '@mantine/core'
import {
  CaretRight,
  SuitcaseSimple,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import {urls} from '@/constants'

import {CardSelectionGroup} from '../CardSelectionGroup'

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={3}>Choose Account Type</Title>
      <Text c='dimmed' size='sm'>
        If you need more info, please check out Help Page.
      </Text>
    </Stack>
  )
}

const options = [
  {
    value: 'personal',
    title: 'Personal Account',
    description: 'If you need more info, please check it out.',
    icon: UserCircle,
  },
  {
    value: 'corporate',
    title: 'Corporate Account',
    description: 'Create corporate account to many users.',
    icon: SuitcaseSimple,
  },
]

function FormView() {
  const rightSection = <CaretRight className='icon-size-xs' />

  return (
    <Stack>
      <CardSelectionGroup options={options} />
      <Button
        component={Link}
        href={urls.roscent.authentication.accountSetup.accountInfo}
        mt='lg'
        radius='md'
        rightSection={rightSection}
        fullWidth
      >
        Continue
      </Button>
    </Stack>
  )
}

export function AccountTypeSelection() {
  return (
    <Stack gap='lg' miw={rem(384)}>
      <Header />
      <FormView />
    </Stack>
  )
}
