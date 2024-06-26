import {Chat as ChatView} from '@dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Chat',
})

export default function Chat() {
  return <ChatView />
}
