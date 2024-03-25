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
      <Title order={5}>Customers</Title>

      <Group ml='auto'>
        <Button variant='default'>Export</Button>
        <Button
          component={Link}
          href={urls.Modernize.dashboard.customers.add}
          leftSection={<Plus className='icon-size-md' weight='bold' />}
        >
          Add Customer
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

interface CustomersListLayoutProps {
  children: ReactNode
}

const customers = [
  {
    key: 'all',
    label: 'All Customers',
    href: urls.Modernize.dashboard.customers.list.all,
  },
  {
    key: 'new',
    label: 'New Customers',
    href: urls.Modernize.dashboard.customers.list.new,
  },
  {
    key: 'returning',
    label: 'Returning Customers',
    href: urls.Modernize.dashboard.customers.list.returning,
  },
  {
    key: 'from-europe',
    label: 'From Europe',
    href: urls.Modernize.dashboard.customers.list.fromEurope,
  },
] as const

export default function CustomersListLayout({
  children,
}: CustomersListLayoutProps) {
  const segment = useSelectedLayoutSegment()

  const content = customers.map((tab) => {
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
