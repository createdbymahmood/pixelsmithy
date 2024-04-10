import {LoginSettings as LoginSettingsView} from '@job-huntly/components/applicant'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Profile Settings',
})

export default function LoginDetails() {
  return <LoginSettingsView />
}
