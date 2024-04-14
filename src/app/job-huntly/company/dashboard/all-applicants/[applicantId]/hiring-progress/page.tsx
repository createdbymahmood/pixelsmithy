import {ApplicantDetailsHiringProgress as ApplicantDetailsHiringProgressView} from '@job-huntly/components/company'
import React from 'react'

import {generateCompanyDashboardApplicantProfileMetadata} from '@/components/job-huntly/utils/metadata'

export const generateMetadata =
  generateCompanyDashboardApplicantProfileMetadata('Hiring Progress')

export default function ApplicantDetailsHiringProgress() {
  return <ApplicantDetailsHiringProgressView />
}
