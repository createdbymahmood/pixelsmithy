import React from 'react'

import {EmailTemplate as EmailTemplateView} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Email Template',
})

export default function EmailTemplate() {
  return <EmailTemplateView />
}
