import {JobDescription as JobDescriptionView} from '@job-huntly/components/applicant'
import React from 'react'

import ApplicantDashboardPageLayout from '@/components/job-huntly/layout/ApplicantDashboardPageLayout/ApplicantDashboardPageLayout'
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
