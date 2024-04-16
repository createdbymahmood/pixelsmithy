import {ApplicantDetailsLayout} from '@job-huntly/components/company/dashboard/ApplicantDetails/ApplicantDetailsLayout'
import type {ReactNode} from 'react'
import React from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return <ApplicantDetailsLayout>{children}</ApplicantDetailsLayout>
}
