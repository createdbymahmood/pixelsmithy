import React from 'react'

import {ProjectFiles} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Files',
})

export default function Files() {
  return <ProjectFiles />
}
