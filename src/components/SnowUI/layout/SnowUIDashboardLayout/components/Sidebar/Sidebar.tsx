'use client'

import type {AccordionControlProps, MantineComponent} from '@mantine/core'
import {Accordion, Box, Group, rem, Stack, Text} from '@mantine/core'
import type {IconProps, IconWeight} from '@phosphor-icons/react'
import {FolderNotch, IdentificationCard} from '@phosphor-icons/react/dist/ssr'
import {useSelections} from 'ahooks'
import clsx from 'clsx'
import {includes, isArray, isEmpty} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegments} from 'next/navigation'
import React, {Fragment} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {SidebarProfileButton} from '@/components/SnowUI/layout/SnowUIDashboardLayout/components/Sidebar/SidebarProfileButton'
import {SidebarTabsQuickNavigation} from '@/components/SnowUI/layout/SnowUIDashboardLayout/components/Sidebar/SidebarTabsQuickNavigation'
import {projectId} from '@/components/SnowUI/mocks/email'
import {urls} from '@/constants'

import styles from './Sidebar.module.scss'

export type AccordionControlStylesNames =
  | 'chevron'
  | 'control'
  | 'icon'
  | 'itemTitle'
  | 'label'

interface SidebarItem {
  id: string
  title: string
  icon?: React.FC<IconProps>
  filledIcon?: React.FC<IconProps>
  href?: string
  children?: SidebarItem[]
  activeSegment: string | null
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

type LocalAccordionControlProps = AccordionControlProps & {
  href: string
}

const AccordionControl = Accordion.Control as MantineComponent<{
  props: LocalAccordionControlProps
  ref: HTMLButtonElement
  stylesNames: AccordionControlStylesNames
  compound: true
}>

const SidebarItems = ({items, selections}: SidebarItemsProps) => {
  const segments = useSelectedLayoutSegments()
  const content = items.map((item) => {
    const withChildren = isArray(item.children) && !isEmpty(item.children)

    const children = (() => {
      return withChildren ? (
        <SidebarItems items={item.children!} selections={selections} />
      ) : null
    })()

    const opened = includes(segments, item.activeSegment)
    const withIcon = !isEmpty(item.icon)
    const Icon = (() => {
      if (!opened) return item.icon ?? Fragment
      return item.filledIcon ?? item.icon ?? Fragment
    })()

    const iconWeight: IconWeight = opened ? 'fill' : 'duotone'

    return (
      <Fragment key={item.id}>
        <Accordion.Item value={item.id}>
          <AccordionControl
            // eslint-disable-next-line react/jsx-no-useless-fragment
            chevron={withChildren ? null : <Fragment />}
            className={clsx({[styles.activeSidebarItem]: opened})}
            component={item.href ? Link : undefined}
            href={item.href as unknown as string}
            mb='5px'
            pr='lg'
          >
            <Box>
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
          </AccordionControl>
          <Accordion.Panel>{children}</Accordion.Panel>
        </Accordion.Item>
      </Fragment>
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

  const onChange = (value: string[]) => {
    if (isArray(value)) {
      value.forEach((v) => {
        selections.select(v)
      })
    } else {
      selections.select(value)
    }
  }

  return (
    <Accordion
      classNames={{control: styles.sidebarItem, chevron: styles.chevron}}
      mb='sm'
      value={selections.selected}
      w='100%'
      multiple
      unstyled
      onChange={onChange}
    >
      {content}
    </Accordion>
  )
}

// eslint-disable-next-line max-lines-per-function
export function Sidebar() {
  const sidebarSections: SidebarSection[] = [
    {
      title: 'Pages',
      items: [
        /*  {
          id: 'Dashboards',
          icon: ChartPieSlice,
          href: '/',
          title: 'Overview',
          activeSegment: '',
          children: [
            {
              id: 'Overview',
              href: '/',
              title: 'Icon360',
              activeSegment: '',
            },
          ],
        }, */
        /*  {
          id: 'eCommerce',
          title: 'eCommerce',
          icon: ShoppingBagOpen,
          href: '/',
        }, */
        {
          id: 'projects',
          title: 'Projects',
          icon: FolderNotch,
          // href: urls.SnowUI.projects.overview(projectId),
          activeSegment: null,
          children: [
            {
              id: 'projectOverview',
              href: urls.SnowUI.projects.overview(projectId),
              title: 'Overview',
              activeSegment: 'overview',
            },
            {
              id: 'projectTargets',
              href: urls.SnowUI.projects.targets(projectId),
              title: 'Targets',
              activeSegment: 'targets',
            },
            {
              id: 'projectBudget',
              href: urls.SnowUI.projects.budget(projectId),
              title: 'budget',
              activeSegment: 'budget',
            },
            {
              id: 'projectUsers',
              href: urls.SnowUI.projects.users(projectId),
              title: 'Users',
              activeSegment: 'users',
            },
            {
              id: 'projectFiles',
              href: urls.SnowUI.projects.files(projectId),
              title: 'Files',
              activeSegment: 'files',
            },
            {
              id: 'projectActivity',
              href: urls.SnowUI.projects.activity(projectId),
              title: 'Activity',
              activeSegment: 'activity',
            },
            {
              id: 'projectSettings',
              href: urls.SnowUI.projects.settings(projectId),
              title: 'Settings',
              activeSegment: 'settings',
            },
          ],
        },
        {
          id: 'account',
          title: 'Account',
          icon: IdentificationCard,
          activeSegment: 'account',
          children: [
            {
              id: 'accountOverview',
              href: urls.SnowUI.account.overview,
              title: 'Overview',
              activeSegment: 'overview',
            },
            {
              id: 'accountSettings',
              href: urls.SnowUI.account.settings,
              title: 'Settings',
              activeSegment: 'settings',
            },
            {
              id: 'accountSecurity',
              href: urls.SnowUI.account.security,
              title: 'Security',
              activeSegment: 'security',
            },
            {
              id: 'accountBilling',
              href: urls.SnowUI.account.billing,
              title: 'Billing',
              activeSegment: 'billing',
            },
            {
              id: 'accountStatements',
              href: urls.SnowUI.account.statements,
              title: 'Statements',
              activeSegment: 'statements',
            },
            {
              id: 'accountReferrals',
              href: urls.SnowUI.account.referrals,
              title: 'Referrals',
              activeSegment: 'referrals',
            },
            {
              id: 'accountApiKeys',
              href: urls.SnowUI.account.apiKey,
              title: 'API Keys',
              activeSegment: 'api-key',
            },
            {
              id: 'accountLogs',
              href: urls.SnowUI.account.logs,
              title: 'Logs',
              activeSegment: 'logs',
            },
          ],
        },
        // {
        //   id: 'email',
        //   href: urls.SnowUI.email.inbox(emailId),
        //   title: 'Email',
        //   icon: Envelope,
        //   children: [],
        //   activeSegment: 'email',
        // },
        /*   {
          id: 'onlineCourses',
          title: 'Online Courses',
          icon: Notebook,
          href: '/',
        }, */
      ],
    },
  ]

  return (
    <PerfectScrollbar>
      <Stack className={styles.sidebar} gap='xl' miw={212} px='md' py='lg'>
        <SidebarProfileButton />
        <SidebarTabsQuickNavigation />
        <SidebarSections sections={sidebarSections} />
      </Stack>
    </PerfectScrollbar>
  )
}
