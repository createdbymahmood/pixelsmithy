import {ProjectUsers} from '@roscent/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Users',
})

export default function Users() {
  return <ProjectUsers />
}
