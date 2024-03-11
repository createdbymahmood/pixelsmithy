import {ProjectUsers} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Users',
})

export default function Users() {
  return <ProjectUsers />
}
