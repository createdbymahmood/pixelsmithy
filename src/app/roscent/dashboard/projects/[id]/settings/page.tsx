import {ProjectSettings} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Settings',
})

export default function Settings() {
  return <ProjectSettings />
}
