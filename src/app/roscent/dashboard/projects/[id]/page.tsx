'use client'

import {redirect} from 'next/navigation'

import {RoscentDashboardProjectsIdOverview} from '@/lib/declarative-routing'
import {useParams} from '@/lib/declarative-routing/hooks'

export default function Project() {
  const params = useParams(RoscentDashboardProjectsIdOverview)
  return redirect(RoscentDashboardProjectsIdOverview({id: params.id}))
}
