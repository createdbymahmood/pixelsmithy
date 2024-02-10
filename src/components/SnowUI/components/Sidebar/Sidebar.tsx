'use client'

import {Accordion, Group, rem, Stack, Text} from '@mantine/core'
import type {IconProps, IconWeight} from '@phosphor-icons/react'
import {
  BookOpenText,
  ChartPieSlice,
  FolderNotch,
  Notebook,
  ShoppingBagOpen,
} from '@phosphor-icons/react'
import {useSelections} from 'ahooks'
import clsx from 'clsx'
import {isArray, isEmpty} from 'lodash-es'
import React, {Fragment} from 'react'

import {SidebarTabsQuickNavigation} from '@/components/SnowUI/components/Sidebar/SidebarTabsQuickNavigation'

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
    const withChildren = isArray(item.children)

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
        >
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
      <Fragment key={section.title}>
        <Text className={styles.section} mb={rem(10)} ml='lg' size='sm'>
          {section.title}
        </Text>

        <SidebarItems items={section.items} selections={selections} />
      </Fragment>
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
          href: '/',
        },
        {
          id: 'onlineCourses',
          title: 'Online Courses',
          icon: Notebook,
          href: '/',
        },
        {
          id: 'allInOne',
          title: 'All in one',
          icon: BookOpenText,
          href: '/',
          children: [
            {
              id: 'allInOne-overview',
              href: '/',
              title: 'Overview',
            },
            {
              title: 'eCommerce',
              id: 'allInOne-ecommerce',
              href: '/',
            },
            {
              id: 'allInOne-projects',
              title: 'Projects',
              href: '/',
            },
            {
              id: 'allInOne-online-courses',
              title: 'Online Courses',
              href: '/',
            },
          ],
        },
      ],
    },
  ]

  return (
    <Stack gap='xl' maw={220} pl='lg' py='lg'>
      <SidebarTabsQuickNavigation />
      <SidebarSections sections={sidebarSections} />
    </Stack>
  )
}
