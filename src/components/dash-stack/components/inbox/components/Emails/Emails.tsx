'use client'

import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Group,
  Input,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {
  CaretLeft,
  CaretRight,
  Download,
  Info,
  MagnifyingGlass,
  Star,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {range} from 'lodash-es'
import Link from 'next/link'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {GroupLink} from '@/components/common'
import {userId} from '@/components/dash-stack/mock/user'
import {DashstackDashboardInboxUserId} from '@/lib/declarative-routing'

import styles from './Emails.module.scss'

function Header() {
  const searchInputLeftSection = (
    <MagnifyingGlass className='icon-size-sm' weight='bold' />
  )

  return (
    <Group bg='white' justify='space-between' p='md'>
      <Input
        classNames={{input: styles.searchInput}}
        leftSection={searchInputLeftSection}
        maw={rem(332)}
        placeholder='Search mail'
        radius='lg'
        w='100%'
      />

      <Button.Group>
        <Button px='sm' radius='sm' size='md' variant='default'>
          <Download className='icon-size-md' weight='fill' />
        </Button>

        <Button px='sm' radius='sm' size='md' variant='default'>
          <Info className='icon-size-md' weight='fill' />
        </Button>

        <Button px='sm' radius='sm' size='md' variant='default'>
          <Trash className='icon-size-md' weight='fill' />
        </Button>
      </Button.Group>
    </Group>
  )
}

function EmailListItem() {
  const [isStarred, {toggle: toggleStar}] = useDisclosure(false)
  const [isSelected, {toggle: toggleSelection}] = useDisclosure(false)

  return (
    <GroupLink
      className={clsx(styles.emailListItem, {[styles.isSelected]: isSelected})}
      gap='sm'
      p='md'
      py='sm'
      wrap='nowrap'
    >
      <Checkbox checked={isSelected} color='black' onChange={toggleSelection} />

      <Box
        c={isStarred ? 'yellow.4' : 'gray.5'}
        className={clsx('icon-size-md', 'cursor-pointer')}
        component={Star}
        weight={isStarred ? 'fill' : 'regular'}
        onClick={toggleStar}
      />

      <GroupLink
        component={Link}
        gap='sm'
        href={DashstackDashboardInboxUserId({userId})}
        wrap='nowrap'
      >
        <Text fw='600' lineClamp={1} size='sm'>
          Jullu Jalal
        </Text>
        <Badge color='pink.4' radius='sm' variant='light'>
          Friends
        </Badge>

        <Text c='gray.8' fw='600' lineClamp={1} size='sm'>
          Our Bachelor of Commerce program is ACBSP-accredited.
        </Text>
        <Text lineClamp={1} ml='auto' size='sm'>
          8:38 AM
        </Text>
      </GroupLink>
    </GroupLink>
  )
}

function EmailList() {
  return (
    <Stack gap={0}>
      {range(0, 10).map((index) => (
        <EmailListItem key={index} />
      ))}
    </Stack>
  )
}

function Content() {
  return (
    <Box h='100%'>
      <EmailList />
    </Box>
  )
}

function Footer() {
  return (
    <Group justify='space-between' px='md'>
      <Text c='gray.8' size='sm'>
        Showing 1-12 of 1,253
      </Text>

      <Button.Group>
        <Button px='xs' py={0} radius='md' size='xs' variant='default'>
          <CaretLeft className='icon-size-sm' weight='bold' />
        </Button>

        <Button px='xs' py={0} radius='md' size='xs' variant='default'>
          <CaretRight className='icon-size-sm' weight='bold' />
        </Button>
      </Button.Group>
    </Group>
  )
}

export function Emails() {
  return (
    <Stack h='100%'>
      <Card bg='transparent' className={styles.content} h='100%' p={0} w='100%'>
        <Header />

        <Box bg='white' h={`calc(100% - ${rem(90)})`} p='0'>
          <PerfectScrollbar>
            <Content />
          </PerfectScrollbar>
        </Box>
      </Card>

      <Footer />
    </Stack>
  )
}
