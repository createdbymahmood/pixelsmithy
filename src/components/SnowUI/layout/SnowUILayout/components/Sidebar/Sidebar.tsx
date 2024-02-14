'use client'

import {Accordion, Box, Group, rem, Stack, Text} from '@mantine/core'
import type {IconProps, IconWeight} from '@phosphor-icons/react'
import {
  ChartPieSlice,
  ChatsTeardrop,
  FolderNotch,
  IdentificationBadge,
  IdentificationCard,
  Notebook,
  ShoppingBagOpen,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'
import {useSelections} from 'ahooks'
import clsx from 'clsx'
import {isArray, isEmpty} from 'lodash-es'
import Link from 'next/link'
import React, {Fragment} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {SidebarProfileButton} from '@/components/SnowUI/layout/SnowUILayout/components/Sidebar/SidebarProfileButton'
import {SidebarTabsQuickNavigation} from '@/components/SnowUI/layout/SnowUILayout/components/Sidebar/SidebarTabsQuickNavigation'
import {urls} from '@/constants'

import styles from './Sidebar.module.scss'

interface SidebarItem {
  id: string
  title: string
  icon?: React.FC<IconProps>
  filledIcon?: React.FC<IconProps>
  href: string
  children?: SidebarItem[]
}

interface SidebarSection {
  title: string
  items: SidebarItem[]
}

interface SidebarSectionsProps {
  sections: SidebarSection[]
}

interface SidebarItemsProps {
  items: SidebarItem[]
  selections: ReturnType<typeof useSelections<string>>
}

const SidebarItems = ({items, selections}: SidebarItemsProps) => {
  const content = items.map((item) => {
    const withChildren = isArray(item.children) && !isEmpty(item.children)

    const toggle = (title: string) => () => {
      if (!withChildren) return
      selections.toggle(title)
    }

    const children = (() => {
      // if (!opened) return null
      return withChildren ? (
        <SidebarItems items={item.children!} selections={selections} />
      ) : null
    })()

    const opened = selections.isSelected(item.id)
    const withIcon = !isEmpty(item.icon)
    const Icon = (() => {
      if (!opened) return item.icon ?? Fragment
      return item.filledIcon ?? item.icon ?? Fragment
    })()

    const iconWeight: IconWeight = opened ? 'fill' : 'duotone'
    return (
      <Accordion.Item key={item.id} value={item.id} onClick={toggle(item.id)}>
        <Accordion.Control
          // eslint-disable-next-line react/jsx-no-useless-fragment
          chevron={withChildren ? null : <Fragment />}
          className={clsx({[styles.activeSidebarItem]: opened})}
          mb='5px'
          pr='lg'
        >
          <Box component={Link} href={item.href}>
            <Group gap='xs'>
              {withIcon ? (
                <Icon
                  className={clsx(styles.icon, {
                    [styles.childlessSidebarItem]: !withChildren,
                  })}
                  size={25}
                  weight={iconWeight}
                />
              ) : null}

              <Text
                className={clsx({[styles.withoutIconSidebarItem]: !withIcon})}
                size='sm'
              >
                {item.title}
              </Text>
            </Group>
          </Box>
        </Accordion.Control>

        <Accordion.Panel>{children}</Accordion.Panel>
      </Accordion.Item>
    )
  })

  return content
}

const SidebarSections = ({sections}: SidebarSectionsProps) => {
  const selections = useSelections<string>([])
  const content = sections.map((section) => {
    return (
      <Box key={section.title} mb='xl'>
        <Text className={styles.section} mb={rem(10)} ml='lg' size='sm'>
          {section.title}
        </Text>

        <SidebarItems items={section.items} selections={selections} />
      </Box>
    )
  })

  return (
    <Accordion
      classNames={{control: styles.sidebarItem, chevron: styles.chevron}}
      mb='sm'
      value={selections.selected}
      w='100%'
      multiple
      unstyled
    >
      {content}
    </Accordion>
  )
}

export function Sidebar() {
  const sidebarSections: SidebarSection[] = [
    {
      title: 'Dashboards',
      items: [
        {
          id: 'Dashboards',
          icon: ChartPieSlice,
          href: '/',
          title: 'Overview',
          children: [
            {
              id: 'Overview',
              href: '/',
              title: 'Icon360',
            },
          ],
        },
        {
          id: 'eCommerce',
          title: 'eCommerce',
          icon: ShoppingBagOpen,
          href: '/',
        },
        {
          id: 'projects',
          title: 'Projects',
          icon: FolderNotch,
          href: urls.SnowUI.projects.overview,
        },
        {
          id: 'onlineCourses',
          title: 'Online Courses',
          icon: Notebook,
          href: '/',
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          id: 'userProfile',
          href: '/',
          title: 'User Profile',
          icon: IdentificationBadge,
          children: [
            {
              id: 'userProfile-Overview',
              href: '/',
              title: 'Overview',
            },
            {
              id: 'userProfile-Projects',
              href: '/',
              title: 'Projects',
            },
            {
              id: 'userProfile-Campaigns',
              href: '/',
              title: 'Campaigns',
            },
            {
              id: 'userProfile-Documents',
              href: '/',
              title: 'Documents',
            },
            {
              id: 'userProfile-Followers',
              href: '/',
              title: 'Followers',
            },
          ],
        },
        {
          id: 'account',
          href: '/',
          title: 'Account',
          icon: IdentificationCard,
          children: [],
        },

        {
          id: 'corporate',
          href: '/',
          title: 'Corporate',
          icon: UsersThree,
          children: [],
        },
        {
          id: 'blog',
          href: '/',
          title: 'Blog',
          icon: Notebook,
          children: [],
        },
        {
          id: 'social',
          href: '/',
          title: 'Social',
          icon: ChatsTeardrop,
          children: [],
        },
      ],
    },
  ]

  return (
    <PerfectScrollbar>
      <Stack className={styles.sidebar} gap='xl' px='md' py='lg'>
        <SidebarProfileButton />
        <SidebarTabsQuickNavigation />
        <SidebarSections sections={sidebarSections} />
      </Stack>
    </PerfectScrollbar>
  )
}
