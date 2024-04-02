import {ApplicantChat} from '@job-huntly/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Messages',
})

export default function Chat() {
  return <ApplicantChat />
}
