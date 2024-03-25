import {ProjectSettings} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Settings',
})

export default function Settings() {
  return <ProjectSettings />
}
