import {AppWindow, BarChart, Box, LayoutGrid, User} from 'lucide-react'

import {Stack} from '@/components/job-location/components/ui'

import {SideNavItem} from './side-nav-item'

export function SideNav() {
  return (
    <Stack
      className='absolute left-0 top-1/2 -translate-y-1/2 rounded-e-4xl bg-white px-3 py-10'
      gap='md'
    >
      <SideNavItem active>
        <LayoutGrid size={29} strokeWidth='1.5' />
      </SideNavItem>

      <SideNavItem>
        <AppWindow size={30} strokeWidth='1.5' />
      </SideNavItem>

      <SideNavItem>
        <BarChart size={30} strokeWidth='1.5' />
      </SideNavItem>

      <SideNavItem>
        <Box size={30} strokeWidth='1.5' />
      </SideNavItem>

      <SideNavItem>
        <User size={30} strokeWidth='1.5' />
      </SideNavItem>
    </Stack>
  )
}
