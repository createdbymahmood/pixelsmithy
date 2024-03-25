import {EmailConfirmationForm} from '@modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Email confirmation',
})

export default function page() {
  return <EmailConfirmationForm />
}
