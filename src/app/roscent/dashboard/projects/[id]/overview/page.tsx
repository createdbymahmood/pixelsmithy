import React from 'react'

import {ProjectOverview} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Overview',
})

export default function Overview() {
  return <ProjectOverview />
}
