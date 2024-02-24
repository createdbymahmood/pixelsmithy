import React from 'react'

import {SignInForm} from '@/components/SnowUI/components/authentication/SignIn'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Sign In',
})

export default function SignIn() {
  return <SignInForm />
}
