'use client'

import {get} from 'lodash-es'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {useParams} from 'next/navigation'
import React, {Fragment} from 'react'
import type {ValuesType} from 'utility-types'

import type {projectDetailsSections} from '@/components/SnowUI'
import {ProjectOverview} from '@/components/SnowUI'
import {ProjectTargets} from '@/components/SnowUI/components/project/ProjectTargets/ProjectTargets'

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
    budget: <Fragment />,
    files: <Fragment />,
    settings: <Fragment />,
    overview: <ProjectOverview />,
    targets: <ProjectTargets />,
    users: <Fragment />,
  }

  const element = get(elementsMap, params.section, null)
  return element
}
