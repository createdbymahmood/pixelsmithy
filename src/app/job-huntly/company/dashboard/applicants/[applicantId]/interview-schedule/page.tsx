import {InterviewSchedule as InterviewScheduleView} from '@job-huntly/components/company'
import React from 'react'

import {generateCompanyDashboardApplicantProfileMetadata} from '@/components/job-huntly/utils/metadata'

export const generateMetadata =
  generateCompanyDashboardApplicantProfileMetadata('Interview Schedule')

export default function IntetrviewSchedule() {
  return <InterviewScheduleView />
}
