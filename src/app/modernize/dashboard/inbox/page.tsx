import {Inbox as InboxView} from '@/components/modernize/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Inbox',
})

export default function Inbox() {
  return <InboxView />
}
