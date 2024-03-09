import {AddContactForm} from '@dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Add Contact',
})

export default function AddContact() {
  return <AddContactForm />
}
