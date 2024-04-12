import {Jobs as JobsView} from '@job-huntly/components/applicant'
import React from 'react'

import ApplicantDashboardPageLayout from '@/components/job-huntly/layout/ApplicantDashboardPageLayout/ApplicantDashboardPageLayout'
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
