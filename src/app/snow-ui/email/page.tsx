import React from 'react'

import {EmailInbox} from '@/components/SnowUI'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Email',
})

export default function Email() {
  return <EmailInbox />
}
