import {VerificationForm} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Verification',
})

export default function Verification() {
  return <VerificationForm />
}
