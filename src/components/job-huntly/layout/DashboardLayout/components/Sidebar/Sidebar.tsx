import {Badge, Box, Group, rem, Stack, Text} from '@mantine/core'
import clsx from 'clsx'
import {intersection, isEmpty, isEqual, isUndefined} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegments} from 'next/navigation'
import React, {Fragment} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {GroupLink} from '@/components/common'
import type {SidebarItem, SidebarSection} from '@/components/roscent'
import {inter} from '@/lib/styles/font/inter'

import {Logo, UserProfile} from './components'
import styles from './Sidebar.module.scss'

function SidebarItemElement(props: SidebarItem) {
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

        <Text fw='500' lineClamp={1}>
          {props.title}
        </Text>
        {!isUndefined(props.unread) && (
          <Badge bg='primary' ml='auto' size='lg' circle>
            {props.unread}
          </Badge>
        )}
      </Group>
    </GroupLink>
  )
}

interface SidebarContentProps {
  sections: SidebarSection[]
}

function SidebarContent({sections}: SidebarContentProps) {
  const content = sections.map((section) => {
    const sidebarItems = section.items.map((item) => {
      return <SidebarItemElement key={item.id} {...item} />
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
    <Stack gap='xxxl' h='100%' pb='xs'>
      {content}

      <Box ml='xxxl' mt='auto' pb='xxxl'>
        <UserProfile />
      </Box>
    </Stack>
  )
}

export interface SidebarProps {
  sections: SidebarSection[]
}

export function Sidebar({sections}: SidebarProps) {
  return (
    <Stack
      bg='neutrals.0'
      className={clsx(styles.sidebar, inter.className, 'shrink-0')}
      gap={0}
      h='100%'
      w={rem(272)}
    >
      <Box mx='xl'>
        <Logo />
      </Box>

      <PerfectScrollbar>
        <SidebarContent sections={sections} />
      </PerfectScrollbar>
    </Stack>
  )
}
