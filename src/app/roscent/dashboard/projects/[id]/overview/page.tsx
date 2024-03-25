import {ProjectOverview} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Overview',
})

export default function Overview() {
  return <ProjectOverview />
}
