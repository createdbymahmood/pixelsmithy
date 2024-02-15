'use client'

import {get} from 'lodash-es'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {useParams} from 'next/navigation'
import type {ValuesType} from 'utility-types'

import type {projectDetailsSections} from '@/components/SnowUI'
import {
  ProjectActivity,
  ProjectBudget,
  ProjectFiles,
  ProjectOverview,
  ProjectSettings,
  ProjectTargets,
  ProjectUsers,
} from '@/components/SnowUI'

interface QueryParams extends Params {
  section: ValuesType<typeof projectDetailsSections>
}

export function ProjectDetails() {
  const params = useParams<QueryParams>()
  const elementMap: Record<
    ValuesType<typeof projectDetailsSections>,
    JSX.Element
  > = {
    activity: <ProjectActivity />,
    budget: <ProjectBudget />,
    files: <ProjectFiles />,
    settings: <ProjectSettings />,
    overview: <ProjectOverview />,
    targets: <ProjectTargets />,
    users: <ProjectUsers />,
  }

  const element = get(elementMap, params.section, null)
  return element
}
