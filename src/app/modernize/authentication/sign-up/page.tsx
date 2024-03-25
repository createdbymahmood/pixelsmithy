import {SignUpForm} from '@modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Sign Up',
})

export default function SignUp() {
  return <SignUpForm />
}
