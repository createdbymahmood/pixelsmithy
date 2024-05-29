'use client'

import {
  Anchor,
  Box,
  Button,
  Paper,
  rem,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

import {JobhuntlyApplicantDashboardHelpcenter} from '@/lib/declarative-routing'

import styles from './Sidebar.module.scss'

function Header() {
  const searchInputLeftSection = (
    <Box className='icon-size-md' component={MagnifyingGlass} weight='bold' />
  )
  return (
    <Stack gap='xl'>
      <Text c='neutrals.4'>Type your question or search keyword</Text>
      <TextInput
        leftSection={searchInputLeftSection}
        placeholder='Search'
        size='md'
      />
    </Stack>
  )
}

interface Link {
  label: string
  href: string
  active: boolean
}

interface ListItemProps extends Link {}

function ListItem(props: ListItemProps) {
  const fw = props.active ? '600' : '500'
  return (
    <Anchor
      c={props.active ? 'primary' : 'neutrals.5'}
      className={styles.listItem}
      component={Link}
      fw={fw}
      href={props.href}
      underline='never'
    >
      {props.label}
    </Anchor>
  )
}

const links: Link[] = [
  {
    label: 'Getting Started',
    active: true,
    href: JobhuntlyApplicantDashboardHelpcenter(),
  },
  {
    label: 'My Profile',
    active: false,
    href: JobhuntlyApplicantDashboardHelpcenter(),
  },
  {
    label: 'Applying for a job',
    active: false,
    href: JobhuntlyApplicantDashboardHelpcenter(),
  },
  {
    label: 'Job Search Tips',
    active: false,
    href: JobhuntlyApplicantDashboardHelpcenter(),
  },
  {
    label: 'Job Alerts',
    active: false,
    href: JobhuntlyApplicantDashboardHelpcenter(),
  },
]

function List() {
  const content = links.map((link) => {
    return <ListItem {...link} key={link.label} />
  })

  return <Stack gap={0}>{content}</Stack>
}

function CustomerServiceCard() {
  return (
    <Paper bg='primary' c='white' mt='auto' p='xl'>
      <Text fw='600' size='xl'>
        Didn't find what you were looking for?
      </Text>

      <Text mt='xs'>Contact our customer service </Text>
      <Button c='primary' color='white' mt='xl' size='sm' variant='white'>
        Contact Us
      </Button>
    </Paper>
  )
}

export function Sidebar() {
  return (
    <Stack className='shrink-0' gap='xxxl' h='100%' p='xxxl' w={rem(374)}>
      <Header />
      <List />
      <CustomerServiceCard />
    </Stack>
  )
}
