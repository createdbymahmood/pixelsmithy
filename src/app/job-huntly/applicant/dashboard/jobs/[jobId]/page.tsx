import {JobDescription as JobDescriptionView} from '@job-huntly/components/applicant'
import ApplicantDashboardPageLayout from '@job-huntly/layout/ApplicantDashboardPageLayout'
import React from 'react'

import {urls} from '@/constants'

export default function JobDescription() {
  return (
    <ApplicantDashboardPageLayout
      callbackURL={urls.JobHuntly.applicant.dashboard.jobs}
      title='Job Description'
    >
      <JobDescriptionView />
    </ApplicantDashboardPageLayout>
  )
}
