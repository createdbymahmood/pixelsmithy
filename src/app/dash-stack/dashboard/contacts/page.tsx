import {Contacts as ContactsView} from '@dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Contacts',
})

export default function Contacts() {
  return <ContactsView />
}
