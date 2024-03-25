import {CouponsList} from '@/components/modernize/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'All coupons',
})

export default function AllCoupons() {
  return <CouponsList />
}
