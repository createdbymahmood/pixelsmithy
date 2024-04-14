import type {ReactNode} from 'react'
import React from 'react'

import {ApplicantDetailsLayout} from '@/components/job-huntly/components/company/dashboard/ApplicantDetails/components'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return <ApplicantDetailsLayout>{children}</ApplicantDetailsLayout>
}
