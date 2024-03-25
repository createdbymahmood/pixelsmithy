import React from 'react'

import {ForgotPasswordForm} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Forgot Password',
})

export default function ForgotPassword() {
  return <ForgotPasswordForm />
}
