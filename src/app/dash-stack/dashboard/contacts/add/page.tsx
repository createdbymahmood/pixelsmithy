import {AddContactForm} from '@/components/dash-stack/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Add Contact',
})

export default function AddContact() {
  return <AddContactForm />
}
