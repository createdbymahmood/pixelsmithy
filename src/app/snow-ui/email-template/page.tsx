import React from 'react'

import {EmailTemplate as EmailTemplateView} from '@/components/SnowUI'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Email Template',
})

export default function EmailTemplate() {
  return <EmailTemplateView />
}
