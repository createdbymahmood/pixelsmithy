import {RegistrationComplete} from '@/components/modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Registration completed',
})

export default function page() {
  return <RegistrationComplete />
}
