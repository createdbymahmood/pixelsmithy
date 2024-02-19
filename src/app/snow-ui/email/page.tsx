import React from 'react'

import {EmailService} from '@/components/SnowUI'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Email',
})

export default function Email() {
  return <EmailService />
}
