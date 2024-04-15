import {Applicants as ApplicantsView} from '@job-huntly/components/company'
import {Stack} from '@mantine/core'
import React from 'react'

import {generateCompanyDashboardJobApplicantsMetadata} from '@/components/job-huntly/utils/metadata'

export const generateMetadata =
  generateCompanyDashboardJobApplicantsMetadata('Applicants')

export default function Applicants() {
  return (
    <Stack pt='xl'>
      <ApplicantsView />
    </Stack>
  )
}
