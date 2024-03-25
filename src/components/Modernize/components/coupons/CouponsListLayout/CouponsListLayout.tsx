import type {
  MantineComponent,
  TabsTabProps,
  TabsTabStylesNames,
} from '@mantine/core'
import {Box, Button, Group, rem, Stack, Tabs, Title} from '@mantine/core'
import {TableWrapper} from '@/components/modernize/components/common'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import {startCase} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {urls} from '@/constants'

function Header() {
  return (
    <Group>
      <Title order={5}>Coupons</Title>

      <Group ml='auto'>
        <Button
          component={Link}
          href={urls.Modernize.dashboard.coupons.create}
          leftSection={<Plus className='icon-size-md' weight='bold' />}
          px='md'
        >
          Create
        </Button>
      </Group>
    </Group>
  )
}

const Tab = Tabs.Tab as MantineComponent<{
  props: TabsTabProps & {href: string}
  ref: HTMLButtonElement
  stylesNames: TabsTabStylesNames
  compound: true
}>

interface CouponsListLayout {
  children: ReactNode
}

const coupons = [
  {
    key: 'all',
    label: 'All Coupons',
    href: urls.Modernize.dashboard.coupons.list.all,
  },
  {
    key: 'active',
    label: 'Active Coupons',
    href: urls.Modernize.dashboard.coupons.list.active,
  },
  {
    key: 'expired',
    label: 'Expired Coupons',
    href: urls.Modernize.dashboard.coupons.list.expired,
  },
] as const

export default function CouponsListLayout({children}: CouponsListLayout) {
  const segment = useSelectedLayoutSegment()

  const content = coupons.map((tab) => {
    return (
      <Tab key={tab.key} component={Link} href={tab.href} value={tab.key}>
        {startCase(tab.label)}
      </Tab>
    )
  })

  return (
    <Stack gap={rem(30)}>
      <Header />

      <TableWrapper>
        <Tabs key={segment} defaultValue={segment}>
          <Tabs.List>{content}</Tabs.List>
          <Box>{children}</Box>
        </Tabs>
      </TableWrapper>
    </Stack>
  )
}
