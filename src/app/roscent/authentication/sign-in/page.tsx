import React from 'react'

import {SignInForm} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Sign In',
})

export default function SignIn() {
  return <SignInForm />
}
