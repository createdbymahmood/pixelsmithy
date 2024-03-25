import React from 'react'

import {VerificationForm} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Verification',
})

export default function Verification() {
  return <VerificationForm />
}
