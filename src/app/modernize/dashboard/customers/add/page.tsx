import {AddCustomerForm} from '@modernize/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Add customer',
})

export default function page() {
  return <AddCustomerForm />
}
