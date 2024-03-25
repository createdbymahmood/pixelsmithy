import {Inbox as InboxView} from '@/components/dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Important',
})

export default function Inbox() {
  return <InboxView />
}
