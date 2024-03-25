import {Projects as ProjectsPage} from '@roscent/components'
import {defaultLoadingScreenDelayMS} from '@/constants'
import {constructMetadata} from '@/utils/constructMetadata'
import {sleep} from '@/utils/sleep'

export const metadata = constructMetadata({
  title: 'Projects',
})

export default async function Projects() {
  await sleep(defaultLoadingScreenDelayMS)
  return <ProjectsPage />
}
