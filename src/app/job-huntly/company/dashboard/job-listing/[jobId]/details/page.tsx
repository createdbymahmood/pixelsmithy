import {JobDescription as JobDetailsView} from '@job-huntly/components/applicant'
import {Stack} from '@mantine/core'
import React from 'react'

import {generateCompanyDashboardJobApplicantsMetadata} from '@/components/job-huntly/utils/metadata'

export const generateMetadata =
  generateCompanyDashboardJobApplicantsMetadata('Job Details')

export default function JobDetails() {
  return (
    <Stack>
      <JobDetailsView withApply={false} withReadMore={false} />
    </Stack>
  )
}
