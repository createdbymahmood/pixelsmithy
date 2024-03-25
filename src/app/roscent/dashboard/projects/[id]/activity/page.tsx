import {ProjectActivity} from '@roscent/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Activity',
})

export default function Activity() {
  return <ProjectActivity />
}
