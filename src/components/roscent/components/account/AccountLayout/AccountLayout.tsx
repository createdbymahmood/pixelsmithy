'use client'
import {Box, Tabs} from '@mantine/core'
import {startCase} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {TabLink} from '@/components/common'
import {
  RoscentDashboardAccountApikeys,
  RoscentDashboardAccountBilling,
  RoscentDashboardAccountLogs,
  RoscentDashboardAccountOverview,
  RoscentDashboardAccountReferrals,
  RoscentDashboardAccountSecurity,
  RoscentDashboardAccountSettings,
  RoscentDashboardAccountStatements,
} from '@/lib/declarative-routing'

interface ProjectOverviewProps {
  children: ReactNode
}

const accountSections = [
  {
    key: 'overview',
    href: RoscentDashboardAccountOverview(),
  },
  {
    key: 'settings',
    href: RoscentDashboardAccountSettings(),
  },
  {
    key: 'security',
    href: RoscentDashboardAccountSecurity(),
  },
  {
    key: 'billing',
    href: RoscentDashboardAccountBilling(),
  },
  {
    key: 'statements',
    href: RoscentDashboardAccountStatements(),
  },
  {
    key: 'referrals',
    href: RoscentDashboardAccountReferrals(),
  },
  {
    key: 'api-keys',
    href: RoscentDashboardAccountApikeys(),
  },
  {
    key: 'logs',
    href: RoscentDashboardAccountLogs(),
  },
] as const

export function AccountLayout({children}: ProjectOverviewProps) {
  const segment = useSelectedLayoutSegment()

  const content = accountSections.map((tab) => {
    return (
      <TabLink key={tab.key} component={Link} href={tab.href} value={tab.key}>
        {startCase(tab.key)}
      </TabLink>
    )
  })

  return (
    <Tabs key={segment} defaultValue={segment}>
      <Tabs.List>{content}</Tabs.List>
      <Box mt='lg'>{children}</Box>
    </Tabs>
  )
}
