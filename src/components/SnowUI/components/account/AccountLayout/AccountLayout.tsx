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
  'overview',
  'settings',
  'security',
  'billing',
  'statements',
  'referrals',
  'api-keys',
  'logs',
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
      <Tab
        key={tab}
        component={Link}
        href={urls.SnowUI.account.page(tab)}
        value={tab}
      >
        {startCase(tab)}
      </Tab>
    )
  })

  return (
    <Tabs defaultValue={segment}>
      <Tabs.List>{content}</Tabs.List>
      <Box mt='lg'>{children}</Box>
    </Tabs>
  )
}
