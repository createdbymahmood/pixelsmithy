import {CustomerInfo} from '@/components/modernize/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Customer',
})

export default function page() {
  return <CustomerInfo />
}
