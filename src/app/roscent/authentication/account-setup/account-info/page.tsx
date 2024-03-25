import {AccountInfo as AccountInfoView} from '@roscent/components/authentication/AccountSetup/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Info Setup',
})

export default function AccountInfo() {
  return <AccountInfoView />
}
