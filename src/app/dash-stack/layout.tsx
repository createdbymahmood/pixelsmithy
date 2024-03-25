'use client'

import type {ReactNode} from 'react'
import React from 'react'

import {MobileVersionNotice} from '@/components/common/MobileVersionNotice'
import {DashStackProviders} from '@/components/dash-stack/layout/DashStackProviders'

export default function Layout(props: {children: ReactNode}) {
  return (
    <DashStackProviders>
      <MobileVersionNotice>{props.children}</MobileVersionNotice>
    </DashStackProviders>
  )
}
