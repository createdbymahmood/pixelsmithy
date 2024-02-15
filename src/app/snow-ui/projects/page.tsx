import {Projects as ProjectsPage} from '@/components/SnowUI'
import {defaultLoadingScreenDelayMS} from '@/constants'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Projects',
})

export const sleep = (
  ms: number,
  data: unknown = undefined,
): Promise<unknown> =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(() => resolve(data), ms))

export default async function Projects() {
  await sleep(defaultLoadingScreenDelayMS)
  return <ProjectsPage />
}
