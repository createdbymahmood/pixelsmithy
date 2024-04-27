import {AppWindow, BarChart, Box, LayoutGrid, User} from 'lucide-react'

import {Stack} from '@/components/job-location/components/ui'

import {SideNavItem} from './side-nav-item'

const sideNavItems = [
  {
    icon: LayoutGrid,
    isActive: true,
    key: 'LayoutGrid',
  },
  {
    icon: AppWindow,
    isActive: false,
    key: 'AppWindow',
  },
  {
    icon: BarChart,
    isActive: false,
    key: 'BarChart',
  },
  {
    icon: Box,
    isActive: false,
    key: 'Box',
  },
  {
    icon: User,
    isActive: false,
    key: 'User',
  },
]

export function SideNav() {
  const content = sideNavItems.map((sideNavItem) => {
    return (
      <SideNavItem key={sideNavItem.key} active={sideNavItem.isActive}>
        <sideNavItem.icon size={29} strokeWidth='1.5' />
      </SideNavItem>
    )
  })

  return (
    <Stack
      className='absolute left-0 top-1/3 hidden -translate-y-1/3 rounded-e-4xl bg-white px-3 py-10 2xl:block'
      gap='md'
    >
      {content}
    </Stack>
  )
}
