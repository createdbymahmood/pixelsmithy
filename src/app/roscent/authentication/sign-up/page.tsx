import React from 'react'

import {SignUpForm} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Sign Up',
})

export default function SignUp() {
  return <SignUpForm />
}
