import React from 'react'

import {SignUpForm} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Sign Up',
})

export default function SignUp() {
  return <SignUpForm />
}
