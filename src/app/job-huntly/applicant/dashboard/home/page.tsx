import {Home as HomeView} from '@job-huntly/components/applicant'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Dashboard',
})

export default function Home() {
  return <HomeView />
}
