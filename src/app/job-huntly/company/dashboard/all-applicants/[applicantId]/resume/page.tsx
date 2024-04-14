import {ApplicantDetailsResume as ApplicantDetailsResumeView} from '@job-huntly/components/company'
import React from 'react'

import {generateCompanyDashboardApplicantProfileMetadata} from '@/components/job-huntly/utils/metadata'

export const generateMetadata =
  generateCompanyDashboardApplicantProfileMetadata('Resume')

export default function ApplicantDetailsResume() {
  return <ApplicantDetailsResumeView />
}
