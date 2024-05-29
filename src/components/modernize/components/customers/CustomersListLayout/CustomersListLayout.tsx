import {Box, Button, Group, rem, Stack, Tabs, Title} from '@mantine/core'
import {TableWrapper} from '@modernize/components/common'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import {startCase} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {TabLink} from '@/components/common'
import {
  ModernizeDashboardCustomersAdd,
  ModernizeDashboardCustomersListAll,
  ModernizeDashboardCustomersListFromeurope,
  ModernizeDashboardCustomersListNew,
  ModernizeDashboardCustomersListReturning,
} from '@/lib/declarative-routing'

function Header() {
  return (
    <Group>
      <Title order={5}>Customers</Title>

      <Group ml='auto'>
        <Button variant='default'>Export</Button>
        <Button
          component={Link}
          href={ModernizeDashboardCustomersAdd()}
          leftSection={<Plus className='icon-size-md' weight='bold' />}
        >
          Add Customer
        </Button>
      </Group>
    </Group>
  )
}

interface CustomersListLayoutProps {
  children: ReactNode
}

const customers = [
  {
    key: 'all',
    label: 'All Customers',
    href: ModernizeDashboardCustomersListAll(),
  },
  {
    key: 'new',
    label: 'New Customers',
    href: ModernizeDashboardCustomersListNew(),
  },
  {
    key: 'returning',
    label: 'Returning Customers',
    href: ModernizeDashboardCustomersListReturning(),
  },
  {
    key: 'from-europe',
    label: 'From Europe',
    href: ModernizeDashboardCustomersListFromeurope(),
  },
] as const

export default function CustomersListLayout({
  children,
}: CustomersListLayoutProps) {
  const segment = useSelectedLayoutSegment()

  const content = customers.map((tab) => {
    return (
      <TabLink key={tab.key} component={Link} href={tab.href} value={tab.key}>
        {startCase(tab.label)}
      </TabLink>
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
