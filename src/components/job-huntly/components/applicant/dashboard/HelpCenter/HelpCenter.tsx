import {Divider, Group} from '@mantine/core'
import React from 'react'

import {Sidebar} from './components'

export function HelpCenter() {
  return (
    <Group align='flex-start' h='100%' wrap='nowrap'>
      <Sidebar />
      <Divider orientation='vertical' />
    </Group>
  )
}
