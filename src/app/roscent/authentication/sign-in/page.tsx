import React from 'react'

import {SignInForm} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Sign In',
})

export default function SignIn() {
  return <SignInForm />
}
