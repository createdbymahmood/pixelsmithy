import {CreateCouponForm} from '@/components/modernize/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Create coupon',
})

export default function CreateCoupon() {
  return <CreateCouponForm />
}
