'use client'

import {DashStackProviders} from '@dash-stack/layout/DashStackProviders'
import type {ReactNode} from 'react'
import React from 'react'

import {MobileVersionNotice} from '@/components/common/MobileVersionNotice'

export default function Layout(props: {children: ReactNode}) {
  return (
    <DashStackProviders>
      <MobileVersionNotice>{props.children}</MobileVersionNotice>
    </DashStackProviders>
  )
}
