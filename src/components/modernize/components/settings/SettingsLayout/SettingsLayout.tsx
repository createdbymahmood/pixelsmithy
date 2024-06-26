'use client'

import {Box, Button, Card, Group, rem, Stack, Tabs, Title} from '@mantine/core'
import {startCase} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {TabLink} from '@/components/common'
import {
  ModernizeDashboardSettingsNotifications,
  ModernizeDashboardSettingsProfile,
} from '@/lib/declarative-routing'

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

interface SettingsLayout {
  children: ReactNode
}

const settings = [
  {
    key: 'profile',
    label: 'Profile',
    href: ModernizeDashboardSettingsProfile(),
  },
  {
    key: 'notifications',
    label: 'Notifications',
    href: ModernizeDashboardSettingsNotifications(),
  },
] as const

export default function SettingsLayout({children}: SettingsLayout) {
  const segment = useSelectedLayoutSegment()

  const content = settings.map((tab) => {
    return (
      <TabLink
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
      </TabLink>
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
