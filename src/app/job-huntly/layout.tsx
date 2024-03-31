'use client'

import type {ReactNode} from 'react'

import {MobileVersionNotice} from '@/components/common/MobileVersionNotice'
import {JobHuntlyProviders} from '@/components/job-huntly/layout'

export default function Layout(props: {children: ReactNode}) {
  return (
    <JobHuntlyProviders>
      <MobileVersionNotice>{props.children}</MobileVersionNotice>
    </JobHuntlyProviders>
  )
}
