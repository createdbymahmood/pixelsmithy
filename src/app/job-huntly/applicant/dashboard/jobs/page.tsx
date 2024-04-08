import {Jobs as JobsView} from '@job-huntly/components/applicant'
import DashboardPageLayout from '@job-huntly/layout/DashboardPageLayout/DashboardPageLayout'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Find Jobs',
})

export default function Jobs() {
  return (
    <DashboardPageLayout title='Find Jobs'>
      <JobsView />
    </DashboardPageLayout>
  )
}
