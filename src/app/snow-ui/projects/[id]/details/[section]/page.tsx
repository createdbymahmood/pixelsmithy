import {startCase} from 'lodash-es'
import type {Metadata} from 'next'

import {sleep} from '@/app/snow-ui/projects/page'
import {ProjectDetails as ProjectDetailsImpl} from '@/components/SnowUI/components/project/ProjectDetails/ProjectDetails'
import {defaultLoadingScreenDelayMS} from '@/constants'
import {constructMetadata} from '@/utils/constructMetadata'

interface Props {
  params: {section: string}
}

const generateSectionTitle = (section: string) =>
  `Project ${startCase(section)}`

export function generateMetadata({params}: Props): Metadata {
  return constructMetadata({
    title: generateSectionTitle(params.section),
  })
}

export default async function ProjectDetails() {
  await sleep(defaultLoadingScreenDelayMS)
  return <ProjectDetailsImpl />
}
