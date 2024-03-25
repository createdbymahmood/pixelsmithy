import React from 'react'

import {ResetPasswordForm} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Reset Password',
})

export default function ResetPassword() {
  return <ResetPasswordForm />
}
