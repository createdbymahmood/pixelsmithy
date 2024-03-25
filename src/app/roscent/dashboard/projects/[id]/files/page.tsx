import React from 'react'

import {ProjectFiles} from '@roscent/components'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Files',
})

export default function Files() {
  return <ProjectFiles />
}
