import React from 'react'

import {ForgotPasswordForm} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Forgot Password',
})

export default function ForgotPassword() {
  return <ForgotPasswordForm />
}
