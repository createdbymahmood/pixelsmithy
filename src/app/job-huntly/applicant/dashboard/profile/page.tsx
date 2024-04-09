import {Profile as ProfileView} from '@job-huntly/components/applicant'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Profile',
})

export default function Profile() {
  return <ProfileView />
}
