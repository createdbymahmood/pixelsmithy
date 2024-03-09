import {Team as TeamView} from '@dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Team',
})

export default function Team() {
  return <TeamView />
}
