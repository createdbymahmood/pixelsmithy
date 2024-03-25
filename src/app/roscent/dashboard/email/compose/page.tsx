import {EmailCompose} from '@roscent/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Compose',
})

export default function Compose() {
  return <EmailCompose />
}
