'use client'

import {get} from 'lodash-es'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {useParams} from 'next/navigation'
import {Fragment} from 'react'
import type {ValuesType} from 'utility-types'

import type {projectDetailsSections} from '@/components/SnowUI'
import {
  ProjectBudget,
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
  const elementsMap: Record<
    ValuesType<typeof projectDetailsSections>,
    JSX.Element
  > = {
    activity: <Fragment />,
    budget: <ProjectBudget />,
    files: <Fragment />,
    settings: <ProjectSettings />,
    overview: <ProjectOverview />,
    targets: <ProjectTargets />,
    users: <ProjectUsers />,
  }

  const element = get(elementsMap, params.section, null)
  return element
}
