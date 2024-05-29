import {JobDescription as JobDescriptionView} from '@job-huntly/components/applicant'

import ApplicantDashboardPageLayout from '@/components/job-huntly/layout/ApplicantDashboardPageLayout/ApplicantDashboardPageLayout'
import {JobhuntlyApplicantDashboardJobs} from '@/lib/declarative-routing'

export default function JobDescription() {
  return (
    <ApplicantDashboardPageLayout
      callbackURL={JobhuntlyApplicantDashboardJobs()}
      title='Job Description'
    >
      <JobDescriptionView />
    </ApplicantDashboardPageLayout>
  )
}
