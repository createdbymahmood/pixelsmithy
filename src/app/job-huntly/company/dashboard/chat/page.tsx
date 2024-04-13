import {Chat as ChatView} from '@job-huntly/components/applicant'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Messages',
})

export default function Chat() {
  return <ChatView />
}
