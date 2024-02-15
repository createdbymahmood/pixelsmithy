import {get} from 'lodash-es'
import type {Metadata} from 'next'
import type {ValuesType} from 'utility-types'

import type {projectDetailsSections} from '@/components/SnowUI'
import {ProjectDetails} from '@/components/SnowUI/components/project/ProjectDetails/ProjectDetails'
import {constructMetadata} from '@/utils/constructMetadata'

interface Props {
  params: {section: string}
}

export function generateMetadata({params}: Props): Metadata {
  const section = params.section

  const metadataMap: Record<
    ValuesType<typeof projectDetailsSections>,
    Metadata
  > = {
    activity: constructMetadata({title: 'Project Activity'}),
    budget: constructMetadata({title: 'Project Budget'}),
    files: constructMetadata({title: 'Project Files'}),
    overview: constructMetadata({title: 'Project Overview'}),
    settings: constructMetadata({title: 'Project Settings'}),
    targets: constructMetadata({title: 'Project Targets'}),
    users: constructMetadata({title: 'Project Users'}),
  }

  const metadata = get(metadataMap, section)
  return metadata
}

export default ProjectDetails
