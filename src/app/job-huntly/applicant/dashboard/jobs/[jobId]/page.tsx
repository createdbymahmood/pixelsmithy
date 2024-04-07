import React from 'react'

import {DashboardPageLayout} from '@/components/job-huntly/layout'
import {urls} from '@/constants'

export default function Job() {
  return (
    <DashboardPageLayout
      callbackURL={urls.JobHuntly.applicant.dashboard.jobs}
      title='Job Description'
    >
      Job Info
    </DashboardPageLayout>
  )
}
