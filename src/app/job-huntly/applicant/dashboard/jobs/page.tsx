import {Jobs as JobsView} from '@job-huntly/components/applicant'
import React from 'react'

import DashboardPageLayout from '@/components/job-huntly/layout/DashboardPageLayout/DashboardPageLayout'
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
