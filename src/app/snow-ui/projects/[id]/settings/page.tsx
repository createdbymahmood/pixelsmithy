import {ProjectSettings} from '@/components/SnowUI'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Project Settings',
})

export default function Settings() {
  return <ProjectSettings />
}
