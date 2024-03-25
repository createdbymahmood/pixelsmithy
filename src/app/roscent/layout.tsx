'use client'

import type {ReactNode} from 'react'
import React from 'react'

import {MobileVersionNotice} from '@/components/common/MobileVersionNotice'
import {RoscentProviders} from '@/components/roscent/layout/RoscentProviders'

export default function Layout(props: {children: ReactNode}) {
  return (
    <RoscentProviders>
      <MobileVersionNotice>{props.children}</MobileVersionNotice>
    </RoscentProviders>
  )
}
