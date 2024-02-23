import type {
  MantineComponent,
  TabsTabProps,
  TabsTabStylesNames,
} from '@mantine/core'
import {Box, Tabs} from '@mantine/core'
import {startCase} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {urls} from '@/constants'

interface ProjectOverviewProps {
  children: ReactNode
}

const accountSections = [
  {key: 'overview', href: urls.SnowUI.account.overview},
  {key: 'settings', href: urls.SnowUI.account.settings},
  {key: 'security', href: urls.SnowUI.account.security},
  {key: 'billing', href: urls.SnowUI.account.billing},
  {key: 'statements', href: urls.SnowUI.account.statements},
  {key: 'referrals', href: urls.SnowUI.account.referrals},
  {key: 'api-keys', href: urls.SnowUI.account.apiKey},
  {key: 'logs', href: urls.SnowUI.account.logs},
] as const

const Tab = Tabs.Tab as MantineComponent<{
  props: TabsTabProps & {href: string}
  ref: HTMLButtonElement
  stylesNames: TabsTabStylesNames
  compound: true
}>

export function AccountLayout({children}: ProjectOverviewProps) {
  const segment = useSelectedLayoutSegment()

  const content = accountSections.map((tab) => {
    return (
      <Tab key={tab.key} component={Link} href={tab.href} value={tab.key}>
        {startCase(tab.key)}
      </Tab>
    )
  })

  return (
    <Tabs key={segment} defaultValue={segment}>
      <Tabs.List>{content}</Tabs.List>
      <Box mt='lg'>{children}</Box>
    </Tabs>
  )
}
