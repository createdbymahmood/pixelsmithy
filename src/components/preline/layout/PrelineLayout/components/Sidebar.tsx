import {theme, useMediaQuery} from '@chakra-ui/react'
import React from 'react'

import {SidebarContent} from './SidebarContent'
import {SidebarDrawer} from './SidebarDrawer'

export function Sidebar() {
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const content = <SidebarContent />
  if (isMobile) return <SidebarDrawer>{content}</SidebarDrawer>
  return content
}
