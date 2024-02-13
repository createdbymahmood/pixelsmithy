'use client'

import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {useParams} from 'next/navigation'
import React from 'react'
import type {ValuesType} from 'utility-types'

import type {projectDetailsSections} from '@/components/SnowUI'
import {ProjectOverview} from '@/components/SnowUI'

interface QueryParams extends Params {
  section: ValuesType<typeof projectDetailsSections>
}

export function ProjectDetails() {
  const params = useParams<QueryParams>()
  const element = (() => {
    switch (params.section) {
      case 'overview':
        return <ProjectOverview />

      default:
        break
    }
  })()
  return element
}
