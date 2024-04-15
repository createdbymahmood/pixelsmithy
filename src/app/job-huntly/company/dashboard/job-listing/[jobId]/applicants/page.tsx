import {JobApplicants as JobApplicantsView} from '@job-huntly/components/company'
import React from 'react'

import {generateCompanyDashboardJobApplicantsMetadata} from '@/components/job-huntly/utils/metadata'

export const generateMetadata =
  generateCompanyDashboardJobApplicantsMetadata('Applicants')

export default function Applicants() {
  return <JobApplicantsView />
}
