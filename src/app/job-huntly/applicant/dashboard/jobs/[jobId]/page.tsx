import {JobDescription as JobDescriptionView} from '@job-huntly/components/applicant'
import DashboardPageLayout from '@job-huntly/layout/DashboardPageLayout/DashboardPageLayout'
import React from 'react'

import {urls} from '@/constants'

export default function JobDescription() {
  return (
    <DashboardPageLayout
      callbackURL={urls.JobHuntly.applicant.dashboard.jobs}
      title='Job Description'
    >
      <JobDescriptionView />
    </DashboardPageLayout>
  )
}
