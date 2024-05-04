import {Chat as ChatView} from '@job-huntly/components/applicant'
import {Box} from '@mantine/core'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Messages',
})

export default function Chat() {
  return (
    <Box bottom={0} left={0} pos='absolute' right={0} top={0}>
      <ChatView />
    </Box>
  )
}
