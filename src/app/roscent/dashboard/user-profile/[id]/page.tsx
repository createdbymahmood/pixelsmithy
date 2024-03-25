import React from 'react'

import {UserProfile as UserProfileView} from '@roscent/components'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'User Profile',
})

export default function UserProfile() {
  return <UserProfileView />
}
