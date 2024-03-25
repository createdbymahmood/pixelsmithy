import {AddTeamMemberForm} from '@/components/dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Add Team Member',
})

export default function AddTeamMember() {
  return <AddTeamMemberForm />
}
