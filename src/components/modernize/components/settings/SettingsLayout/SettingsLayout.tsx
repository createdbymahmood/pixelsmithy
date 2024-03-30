'use client'

import type {
  MantineComponent,
  TabsTabProps,
  TabsTabStylesNames,
} from '@mantine/core'
import {Box, Button, Card, Group, rem, Stack, Tabs, Title} from '@mantine/core'
import {startCase} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {urls} from '@/constants'

function Actions() {
  return (
    <Group ml='auto'>
      <Button ml='auto' variant='default'>
        Cancel
      </Button>
      <Button>Save</Button>
    </Group>
  )
}

function Header() {
  return (
    <Group>
      <Title order={5}>Settings</Title>
      <Actions />
    </Group>
  )
}

const Tab = Tabs.Tab as MantineComponent<{
  props: TabsTabProps & {href: string}
  ref: HTMLButtonElement
  stylesNames: TabsTabStylesNames
  compound: true
}>

interface SettingsLayout {
  children: ReactNode
}

const settings = [
  {
    key: 'profile',
    label: 'Profile',
    href: urls.Modernize.dashboard.settings.profile,
  },
  {
    key: 'notifications',
    label: 'Notifications',
    href: urls.Modernize.dashboard.settings.notifications,
  },
] as const

export default function SettingsLayout({children}: SettingsLayout) {
  const segment = useSelectedLayoutSegment()

  const content = settings.map((tab) => {
    return (
      <Tab
        key={tab.key}
        component={Link}
        href={tab.href}
        styles={{
          tab: {
            padding: rem(14),
          },
        }}
        value={tab.key}
      >
        {startCase(tab.label)}
      </Tab>
    )
  })

  return (
    <Stack gap={rem(30)} pb={rem(30)}>
      <Header />

      <Tabs key={segment} defaultValue={segment}>
        <Stack gap={0}>
          <Card pb={0} pt={rem(28)} px={rem(28)}>
            <Tabs.List style={{margin: 0}}>{content}</Tabs.List>
          </Card>
          <Box>{children}</Box>
        </Stack>
      </Tabs>
    </Stack>
  )
}
