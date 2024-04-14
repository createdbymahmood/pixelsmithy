import {ApplicantDetailsProfile as ApplicantDetailsProfileView} from '@job-huntly/components/company'
import React from 'react'

import {generateCompanyDashboardApplicantProfileMetadata} from '@/components/job-huntly/utils/metadata'

export const generateMetadata = generateCompanyDashboardApplicantProfileMetadata

export default function ApplicantDetailsProfile() {
  return <ApplicantDetailsProfileView />
}
