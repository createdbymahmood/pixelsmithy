import {Inbox as InboxView} from '@dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Inbox',
})

export default function Inbox() {
  return <InboxView />
}
