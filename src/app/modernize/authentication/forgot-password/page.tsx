import {ForgotPasswordForm} from '@modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Forgot Password',
})

export default function page() {
  return <ForgotPasswordForm />
}
