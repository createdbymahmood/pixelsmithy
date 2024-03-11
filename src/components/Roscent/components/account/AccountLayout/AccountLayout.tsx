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
  {key: 'overview', href: urls.roscent.account.overview},
  {key: 'settings', href: urls.roscent.account.settings},
  {key: 'security', href: urls.roscent.account.security},
  {key: 'billing', href: urls.roscent.account.billing},
  {key: 'statements', href: urls.roscent.account.statements},
  {key: 'referrals', href: urls.roscent.account.referrals},
  {key: 'api-keys', href: urls.roscent.account.apiKey},
  {key: 'logs', href: urls.roscent.account.logs},
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