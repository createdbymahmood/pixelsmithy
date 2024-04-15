import {JobAnalytics as JobAnalyticsView} from '@job-huntly/components/company'
import React from 'react'

import {generateCompanyDashboardJobMetadata} from '@/components/job-huntly/utils/metadata'

export const generateMetadata =
  generateCompanyDashboardJobMetadata('JobAnalytics')

export default function JobAnalytics() {
  return <JobAnalyticsView />
}
