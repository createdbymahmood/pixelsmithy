import {ResetPasswordForm} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Reset Password',
})

export default function ResetPassword() {
  return <ResetPasswordForm />
}
