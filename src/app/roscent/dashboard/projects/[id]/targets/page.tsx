import {ProjectTargets} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Targets',
})

export default function Targets() {
  return <ProjectTargets />
}
