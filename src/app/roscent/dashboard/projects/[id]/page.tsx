'use client'

import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {redirect, useParams} from 'next/navigation'

import {urls} from '@/constants'

interface QueryParams extends Params {
  id: string
}

export default function ProjectDetails() {
  const params = useParams<QueryParams>()
  return redirect(urls.roscent.projects.overview(params.id))
}
