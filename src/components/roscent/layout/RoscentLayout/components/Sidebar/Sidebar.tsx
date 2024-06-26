'use client'

import type {AccordionControlProps, MantineComponent} from '@mantine/core'
import {Accordion, Box, Group, rem, Stack, Text} from '@mantine/core'
import type {IconProps, IconWeight} from '@phosphor-icons/react'
import {
  ChatsCircle,
  Envelope,
  Fingerprint,
  FolderNotch,
  IdentificationCard,
  PaintRoller,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'
import {SidebarProfileButton} from '@roscent/layout/RoscentLayout/components/Sidebar/SidebarProfileButton'
import {SidebarTabsQuickNavigation} from '@roscent/layout/RoscentLayout/components/Sidebar/SidebarTabsQuickNavigation'
import {emailId, projectId} from '@roscent/mocks/email'
import {userId} from '@roscent/mocks/user'
import clsx from 'clsx'
import {isArray, isEmpty, isEqual} from 'lodash-es'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import Link from 'next/link'
import {useParams, useSelectedLayoutSegments} from 'next/navigation'
import type {ComponentProps} from 'react'
import React, {Fragment, useState} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {
  RoscentAuthenticationAccountsetupAccounttypeselection,
  RoscentAuthenticationForgotpassword,
  RoscentAuthenticationResetpassword,
  RoscentAuthenticationSignin,
  RoscentAuthenticationSignup,
  RoscentAuthenticationVerification,
  RoscentDashboardAccountApikeys,
  RoscentDashboardAccountBilling,
  RoscentDashboardAccountLogs,
  RoscentDashboardAccountOverview,
  RoscentDashboardAccountReferrals,
  RoscentDashboardAccountSecurity,
  RoscentDashboardAccountSettings,
  RoscentDashboardAccountStatements,
  RoscentDashboardChat,
  RoscentDashboardEmailInboxId,
  RoscentDashboardProjectsIdActivity,
  RoscentDashboardProjectsIdBudget,
  RoscentDashboardProjectsIdFiles,
  RoscentDashboardProjectsIdOverview,
  RoscentDashboardProjectsIdSettings,
  RoscentDashboardProjectsIdTargets,
  RoscentDashboardProjectsIdUsers,
  RoscentDashboardUserprofileId,
  RoscentEmailtemplate,
} from '@/lib/declarative-routing'

import styles from './Sidebar.module.scss'

export type AccordionControlStylesNames =
  | 'chevron'
  | 'control'
  | 'icon'
  | 'itemTitle'
  | 'label'

type AnchorTarget = ComponentProps<'a'>['target']
export interface SidebarItem {
  id: string
  title: string
  icon?: React.FC<IconProps>
  href?: string
  children?: SidebarItem[]
  activeSegment: string[] | null
  target?: AnchorTarget
  unread?: number
}

export interface SidebarSection {
  title: string
  items: SidebarItem[]
}

export interface SidebarSectionsProps {
  sections: SidebarSection[]
}

export interface SidebarItemsProps {
  items: SidebarItem[]
}

type LocalAccordionControlProps = AccordionControlProps & {
  href: string
  target?: AnchorTarget
}

const AccordionControl = Accordion.Control as MantineComponent<{
  props: LocalAccordionControlProps
  ref: HTMLButtonElement
  stylesNames: AccordionControlStylesNames
  compound: true
}>

const SidebarItems = ({items}: SidebarItemsProps) => {
  const segments = useSelectedLayoutSegments()
  const content = items.map((item) => {
    const withChildren = isArray(item.children) && !isEmpty(item.children)

    const children = (() => {
      return withChildren ? <SidebarItems items={item.children!} /> : null
    })()

    const opened = isEqual(segments, item.activeSegment)
    const withIcon = !isEmpty(item.icon)
    const Icon = (() => {
      if (!opened) return item.icon ?? Fragment
      return item.icon ?? Fragment
    })()

    const iconWeight: IconWeight = opened ? 'fill' : 'duotone'

    return (
      <Accordion.Item key={item.id} value={item.id}>
        <AccordionControl
          // eslint-disable-next-line react/jsx-no-useless-fragment
          chevron={withChildren ? null : <Fragment />}
          className={clsx({[styles.activeSidebarItem]: opened})}
          component={item.href ? Link : undefined}
          href={item.href as unknown as string}
          mb='5px'
          pr='lg'
          target={item.target}
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
        {children ? <Accordion.Panel>{children}</Accordion.Panel> : null}
      </Accordion.Item>
    )
  })

  return content
}

const SidebarSections = ({sections}: SidebarSectionsProps) => {
  const [selection, setSelection] = useState<string[]>([])

  const content = sections.map((section) => {
    return (
      <Box key={section.title} mb='xl'>
        <Text className={styles.section} mb={rem(10)} ml='lg' size='sm'>
          {section.title}
        </Text>

        <SidebarItems items={section.items} />
      </Box>
    )
  })

  return (
    <Accordion
      classNames={{control: styles.sidebarItem, chevron: styles.chevron}}
      mb='sm'
      value={selection}
      w='100%'
      multiple
      unstyled
      onChange={setSelection}
    >
      {content}
    </Accordion>
  )
}

interface QueryParams extends Params {
  id: string
}

// eslint-disable-next-line max-lines-per-function
export function Sidebar() {
  const params = useParams<QueryParams>()
  const sidebarSections: SidebarSection[] = [
    {
      title: 'Pages',
      items: [
        {
          id: 'projects',
          title: 'Projects',
          icon: FolderNotch,
          activeSegment: null,
          children: [
            {
              id: 'projectsOverview',
              href: RoscentDashboardProjectsIdOverview({id: projectId}),
              title: 'Overview',
              activeSegment: ['projects', params.id, 'overview'],
            },
            {
              id: 'projectsTargets',
              href: RoscentDashboardProjectsIdTargets({id: projectId}),
              title: 'Targets',
              activeSegment: ['projects', params.id, 'targets'],
            },
            {
              id: 'projectsBudget',
              href: RoscentDashboardProjectsIdBudget({id: projectId}),
              title: 'Budget',
              activeSegment: ['projects', params.id, 'budget'],
            },
            {
              id: 'projectsUsers',
              href: RoscentDashboardProjectsIdUsers({id: projectId}),
              title: 'Users',
              activeSegment: ['projects', params.id, 'users'],
            },
            {
              id: 'projectsFiles',
              href: RoscentDashboardProjectsIdFiles({id: projectId}),
              title: 'Files',
              activeSegment: ['projects', params.id, 'files'],
            },
            {
              id: 'projectsActivity',
              href: RoscentDashboardProjectsIdActivity({id: projectId}),
              title: 'Activity',
              activeSegment: ['projects', params.id, 'activity'],
            },
            {
              id: 'projectsSettings',
              href: RoscentDashboardProjectsIdSettings({id: projectId}),
              title: 'Settings',
              activeSegment: ['projects', params.id, 'settings'],
            },
          ],
        },
        {
          id: 'account',
          title: 'Account',
          icon: IdentificationCard,
          activeSegment: null,
          children: [
            {
              id: 'accountOverview',
              href: RoscentDashboardAccountOverview(),
              title: 'Overview',
              activeSegment: ['account', 'overview'],
            },
            {
              id: 'accountSettings',
              href: RoscentDashboardAccountSettings(),
              title: 'Settings',
              activeSegment: ['account', 'settings'],
            },
            {
              id: 'accountSecurity',
              href: RoscentDashboardAccountSecurity(),
              title: 'Security',
              activeSegment: ['account', 'security'],
            },
            {
              id: 'accountBilling',
              href: RoscentDashboardAccountBilling(),
              title: 'Billing',
              activeSegment: ['account', 'billing'],
            },
            {
              id: 'accountStatements',
              href: RoscentDashboardAccountStatements(),
              title: 'Statements',
              activeSegment: ['account', 'statements'],
            },
            {
              id: 'accountReferrals',
              href: RoscentDashboardAccountReferrals(),
              title: 'Referrals',
              activeSegment: ['account', 'referrals'],
            },
            {
              id: 'accountApiKeys',
              href: RoscentDashboardAccountApikeys(),
              title: 'API Keys',
              activeSegment: ['account', 'api-key'],
            },
            {
              id: 'accountLogs',
              href: RoscentDashboardAccountLogs(),
              title: 'Logs',
              activeSegment: ['account', 'logs'],
            },
          ],
        },
        {
          id: 'authentication',
          title: 'Auth',
          icon: Fingerprint,
          activeSegment: null,
          children: [
            {
              id: 'sign-up',
              href: RoscentAuthenticationSignup(),
              title: 'Sign Up',
              activeSegment: null,
              target: '_blank',
            },
            {
              id: 'sign-in',
              href: RoscentAuthenticationSignin(),
              title: 'Sign In',
              activeSegment: null,
              target: '_blank',
            },
            {
              id: 'forgot-password',
              href: RoscentAuthenticationForgotpassword(),
              title: 'Forgot Password',
              activeSegment: null,
              target: '_blank',
            },
            {
              id: 'reset-password',
              href: RoscentAuthenticationResetpassword(),
              title: 'Reset Password',
              activeSegment: null,
              target: '_blank',
            },
            {
              id: 'account-setup',
              href: RoscentAuthenticationAccountsetupAccounttypeselection(),
              title: 'Account Setup',
              activeSegment: null,
              target: '_blank',
            },
            {
              id: 'verification',
              href: RoscentAuthenticationVerification(),
              title: 'Verification',
              activeSegment: null,
              target: '_blank',
            },
          ],
        },
        {
          id: 'email',
          href: RoscentDashboardEmailInboxId({id: emailId}),
          title: 'Email',
          icon: Envelope,
          activeSegment: null,
          children: [],
        },
        {
          id: 'chat',
          href: RoscentDashboardChat(),
          title: 'Chat',
          icon: ChatsCircle,
          activeSegment: null,
          children: [],
        },
        {
          id: 'userProfile',
          href: RoscentDashboardUserprofileId({id: userId}),
          title: 'User Profile',
          icon: UsersThree,
          activeSegment: null,
          children: [],
        },
      ],
    },
    {
      title: 'Etc',
      items: [
        {
          id: 'email-template',
          title: 'Template',
          icon: PaintRoller,
          href: RoscentEmailtemplate(),
          activeSegment: ['email-template'],
        },
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
