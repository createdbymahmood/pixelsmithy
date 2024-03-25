import React from 'react'

import {ProjectTargets} from '@roscent/components'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Targets',
})

export default function Targets() {
  return <ProjectTargets />
}
