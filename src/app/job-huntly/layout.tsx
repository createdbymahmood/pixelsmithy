'use client'

import {JobHuntlyProviders} from '@job-huntly/layout'
import type {ReactNode} from 'react'

import {MobileVersionNotice} from '@/components/common/MobileVersionNotice'

export default function Layout(props: {children: ReactNode}) {
  return (
    <JobHuntlyProviders>
      <MobileVersionNotice>{props.children}</MobileVersionNotice>
    </JobHuntlyProviders>
  )
}
