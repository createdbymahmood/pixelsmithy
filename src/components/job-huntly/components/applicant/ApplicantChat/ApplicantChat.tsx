import {Box} from '@mantine/core'
import React from 'react'

import {ChatSidebar} from '@/components/job-huntly/components/applicant/ApplicantChat/components'

export function ApplicantChat() {
  return (
    <Box h='100%' /* my='calc(var(--mantine-spacing-xl) * -1)' */>
      <ChatSidebar />
    </Box>
  )
}
