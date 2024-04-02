import {ApplicantDashboard as ApplicantDashboardView} from '@job-huntly/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Dashboard',
})

export default function ApplicantDashboard() {
  return <ApplicantDashboardView />
}
