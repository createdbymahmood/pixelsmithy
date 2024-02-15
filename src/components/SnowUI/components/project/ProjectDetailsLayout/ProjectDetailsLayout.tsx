import type {
  MantineComponent,
  TabsTabProps,
  TabsTabStylesNames,
} from '@mantine/core'
import {Box, Tabs} from '@mantine/core'
import {startCase} from 'lodash-es'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import Link from 'next/link'
import {useParams, useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {urls} from '@/constants'

interface ProjectOverviewProps {
  children: ReactNode
}

export const projectDetailsSections = [
  'overview',
  'targets',
  'budget',
  'users',
  'files',
  'activity',
  'settings',
] as const

const Tab = Tabs.Tab as MantineComponent<{
  props: TabsTabProps & {href: string}
  ref: HTMLButtonElement
  stylesNames: TabsTabStylesNames
  compound: true
}>

export function ProjectDetailsLayout({children}: ProjectOverviewProps) {
  const segment = useSelectedLayoutSegment()
  const content = projectDetailsSections.map((tab) => {
    return (
      <Tab
        key={tab}
        component={Link}
        href={urls.SnowUI.projects.details(
          '6cf7e844-a4a2-40c3-b7a4-a9ac8a0593de',
          tab,
        )}
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
