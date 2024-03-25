import {OrdersList} from '@/components/modernize/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Orders',
})

export default function Orders() {
  return <OrdersList />
}
