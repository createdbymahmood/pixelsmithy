import {Jobs as JobsView} from '@job-huntly/components/applicant'
import ApplicantDashboardPageLayout from '@job-huntly/layout/ApplicantDashboardPageLayout'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Find Jobs',
})

export default function Jobs() {
  return (
    <ApplicantDashboardPageLayout title='Find Jobs'>
      <JobsView />
    </ApplicantDashboardPageLayout>
  )
}
