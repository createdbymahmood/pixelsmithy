import {Divider, Group} from '@mantine/core'
import React from 'react'

import {Articles, Sidebar} from './components'

export function HelpCenter() {
  return (
    <Group align='flex-start' gap={0} h='100%' wrap='nowrap'>
      <Sidebar />
      <Divider orientation='vertical' />
      <Articles />
    </Group>
  )
}
