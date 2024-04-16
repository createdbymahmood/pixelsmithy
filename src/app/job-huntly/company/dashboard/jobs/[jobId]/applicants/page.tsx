import {Applicants as ApplicantsView} from '@job-huntly/components/company'
import {Stack} from '@mantine/core'
import React from 'react'

import {generateCompanyDashboardJobMetadata} from '@/components/job-huntly/utils/metadata'

export const generateMetadata =
  generateCompanyDashboardJobMetadata('Applicants')

export default function Applicants() {
  return (
    <Stack pt='xl'>
      <ApplicantsView />
    </Stack>
  )
}
