import {HelpCenter as HelpCenterView} from '@job-huntly/components/applicant'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Help Center',
})

export default function HelpCenter() {
  return <HelpCenterView />
}
