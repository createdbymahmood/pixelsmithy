import {CouponsList} from '@modernize/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Expired coupons',
})

export default function ExpiredCoupons() {
  return <CouponsList status='expired' />
}
