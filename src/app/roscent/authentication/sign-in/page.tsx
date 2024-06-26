import {SignInForm} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Sign In',
})

export default function SignIn() {
  return <SignInForm />
}
