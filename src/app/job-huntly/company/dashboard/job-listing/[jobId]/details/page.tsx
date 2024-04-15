import {JobDescription as JobDetailsView} from '@job-huntly/components/applicant'
import React from 'react'

import {generateCompanyDashboardJobMetadata} from '@/components/job-huntly/utils/metadata'

export const generateMetadata =
  generateCompanyDashboardJobMetadata('Job Details')

export default function JobDetails() {
  return <JobDetailsView withApply={false} withReadMore={false} />
}
