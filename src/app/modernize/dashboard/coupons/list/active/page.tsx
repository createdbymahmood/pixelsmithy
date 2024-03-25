import {CouponsList} from '@modernize/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Active coupons',
})

export default function ActiveCoupons() {
  return <CouponsList status='active' />
}
