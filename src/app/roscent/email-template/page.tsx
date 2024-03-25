import {EmailTemplate as EmailTemplateView} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Email Template',
})

export default function EmailTemplate() {
  return <EmailTemplateView />
}
