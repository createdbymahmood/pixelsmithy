import React from 'react'

import {AccountSetup as AccountSetupView} from '@/components/SnowUI'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Setup',
})

export default function AccountSetup() {
  return <AccountSetupView />
}
