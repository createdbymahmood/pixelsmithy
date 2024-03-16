import React, {Fragment} from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {FullscreenDrawer} from '@/components/Flights/components'

export function DateSelection() {
  return (
    <IOSScreen bg='gray.4' variant='dark'>
      <FullscreenDrawer>
        <Fragment />
      </FullscreenDrawer>
    </IOSScreen>
  )
}
