import React from 'react'

import {ProjectOverview} from '@/components/SnowUI'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Overview',
})

export default function Overview() {
  return <ProjectOverview />
}
