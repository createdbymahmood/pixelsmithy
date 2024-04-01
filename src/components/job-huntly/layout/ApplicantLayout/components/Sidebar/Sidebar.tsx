import {Badge, Box, Group, rem, Skeleton, Stack, Text} from '@mantine/core'
import {
  Buildings,
  ChatCenteredText,
  FileText,
  Gear,
  HouseSimple,
  MagnifyingGlass,
  Question,
  User,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {intersection, isEmpty, isEqual, isUndefined} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegments} from 'next/navigation'
import React, {Fragment} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {GroupLink} from '@/components/common'
import type {SidebarSection} from '@/components/roscent'
import {SidebarItem} from '@/components/roscent'
import {urls} from '@/constants'

import {UserProfile} from './components'
import styles from './Sidebar.module.scss'

const sections: SidebarSection[] = [
  {
    title: '',
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: HouseSimple,
        href: urls.JobHuntly.applicant.dashboard.index,
        activeSegment: [],
      },
      {
        id: 'messages',
        title: 'Messages',
        icon: ChatCenteredText,
        href: '',
        activeSegment: ['messages'],
        unread: 1,
      },
      {
        id: 'my-applications',
        title: 'My Applications',
        icon: FileText,
        href: '',
        activeSegment: ['applications'],
      },
      {
        id: 'find-jobs',
        title: 'Find Jobs',
        icon: MagnifyingGlass,
        href: '',
        activeSegment: ['explore'],
      },
      {
        id: 'browse-companies',
        title: 'Browse Companies',
        icon: Buildings,
        href: '',
        activeSegment: ['companies'],
      },
      {
        id: 'my-public-profile',
        title: 'My Public Profile',
        icon: User,
        href: '',
        activeSegment: ['profile'],
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        id: 'settings',
        title: 'Settings',
        icon: Gear,
        href: '',
        activeSegment: ['settings'],
      },
      {
        id: 'help-center',
        title: 'Help Center',
        icon: Question,
        href: '',
        activeSegment: ['help'],
      },
    ],
  },
]

function SidebarItem(props: SidebarItem) {
  const segment = useSelectedLayoutSegments()
  const isEqualToSegment = isEqual(segment, props.activeSegment)
  const isActive =
    !isEmpty(intersection(segment, props.activeSegment)) || isEqualToSegment

  const Icon = props.icon ?? Fragment

  return (
    <GroupLink
      className={clsx('cursor-pointer', {
        [styles.activeSidebarItemWrapper]: isActive,
      })}
      component={Link}
      href={props.href}
      target={props.target}
      wrap='nowrap'
    >
      <Group
        className={clsx(styles.sidebarItem, {[styles.active]: isActive})}
        gap='sm'
        mx='md'
        px='sm'
        py='sm'
        w='100%'
        wrap='nowrap'
      >
        <Icon
          className='icon-size-lg'
          color='currentColor'
          style={{padding: rem(2)}}
          weight='bold'
        />

        <Text fw='500'>{props.title}</Text>
        {!isUndefined(props.unread) && (
          <Badge bg='primary' ml='auto' size='lg' circle>
            {props.unread}
          </Badge>
        )}
      </Group>
    </GroupLink>
  )
}

function SidebarContent() {
  const content = sections.map((section) => {
    const sidebarItems = section.items.map((item) => {
      return <SidebarItem key={item.id} {...item} />
    })

    return (
      <Stack key={section.title} gap={0}>
        {!isEmpty(section.title) ? (
          <Text
            c='dimmed'
            className={styles.sectionTitle}
            fw='600'
            mb='xl'
            mx={0}
            pt='xxxl'
            px='xl'
            size='sm'
          >
            {section.title}
          </Text>
        ) : null}
        <Stack gap={0}>{sidebarItems}</Stack>
      </Stack>
    )
  })

  return (
    <Stack flex={1} gap='xxxl' h='100%' pb='xs'>
      {content}

      <Box ml='xxxl' mt='auto' pb='xxxl'>
        <UserProfile />
      </Box>
    </Stack>
  )
}

export function Sidebar() {
  return (
    <Stack
      bg='neutrals.0'
      className={styles.sidebar}
      gap='xxxl'
      h='100%'
      pt='xxxl'
      w={rem(272)}
    >
      <Box mx='lg'>
        <Skeleton className='shrink-0' h={rem(48)} radius={0} />
      </Box>

      <PerfectScrollbar>
        <SidebarContent />
      </PerfectScrollbar>
    </Stack>
  )
}
