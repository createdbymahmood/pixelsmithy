import {Home as HomeView} from '@job-huntly/components/company'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Dashboard',
})

export default function Home() {
  return <HomeView />
}
