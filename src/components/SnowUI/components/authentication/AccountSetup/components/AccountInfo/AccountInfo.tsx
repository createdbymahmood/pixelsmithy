'use client'

import {
  Anchor,
  Button,
  Card,
  Group,
  Input,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  CaretLeft,
  CaretRight,
  SuitcaseSimple,
  Target,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import {urls} from '@/constants'

import {CardSelectionGroup} from '../CardSelectionGroup'
import styles from './AccountInfo.module.scss'

function Help() {
  return (
    <Group gap={0} justify='center'>
      <Text c='dimmed' size='sm'>
        If you need more info, please check out
      </Text>

      <Anchor
        c='indigo.4'
        component={Link}
        href={urls.SnowUI.authentication.signIn}
        ml={rem(5)}
        size='sm'
        underline='never'
      >
        Help Page
      </Anchor>

      <Text c='dimmed' size='sm'>
        .
      </Text>
    </Group>
  )
}

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={3}>Account Info</Title>
      <Help />
    </Stack>
  )
}

function TeamSize() {
  const options = ['1-1', '2-10', '10-50', '50+']
  return (
    <Stack>
      <Title order={5}>Specify Team Size</Title>
      <Text c='dimmed' size='sm'>
        Customers will see this shortened version of your statement descriptor.
      </Text>
      <Group wrap='nowrap'>
        {options.map((option) => (
          <Card
            key={option}
            bg='white'
            className={clsx(styles.teamSizeOption, 'cursor-pointer')}
            flex={1}
            p='xs'
            radius='lg'
          >
            <Text ta='center'>{option}</Text>
          </Card>
        ))}
      </Group>
    </Stack>
  )
}

function TeamAccountName() {
  return (
    <Stack>
      <Title order={5}>Team Account Name</Title>
      <Input classNames={{input: styles.input}} radius='md' w='100%' />
    </Stack>
  )
}

const options = [
  {
    value: 'company',
    title: 'Company Account',
    description: 'Use images to enhance your post flow.',
    icon: UserCircle,
  },
  {
    value: 'developer',
    title: 'Developer Account',
    description: 'Use images to your post time.',
    icon: SuitcaseSimple,
  },
  {
    value: 'testing',
    title: 'Testing Account',
    description: 'Use images to enhance your post flow.',
    icon: Target,
  },
]

function SelectAccountPlan() {
  return <CardSelectionGroup options={options} size='sm' />
}

function Footer() {
  const previousLeftSection = <CaretLeft className='icon-size-xs' />
  const continueRightsection = <CaretRight className='icon-size-xs' />
  return (
    <Group justify='center' wrap='nowrap'>
      <Button
        leftSection={previousLeftSection}
        radius='md'
        variant='light'
        fullWidth
      >
        Previous
      </Button>
      <Button radius='md' rightSection={continueRightsection} fullWidth>
        Continue
      </Button>
    </Group>
  )
}

export function AccountInfo() {
  return (
    <Stack gap='xl' maw={rem(384)}>
      <Header />
      <TeamSize />
      <TeamAccountName />
      <SelectAccountPlan />
      <Footer />
    </Stack>
  )
}
