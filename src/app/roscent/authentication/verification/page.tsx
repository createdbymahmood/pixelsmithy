import React from 'react'

import {VerificationForm} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Verification',
})

export default function Verification() {
  return <VerificationForm />
}
