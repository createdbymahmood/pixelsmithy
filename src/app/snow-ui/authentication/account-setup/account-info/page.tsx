import React from 'react'

import {AccountInfo as AccountInfoView} from '@/components/SnowUI/components/authentication/AccountSetup/components'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Info Setup',
})

export default function AccountInfo() {
  return <AccountInfoView />
}
