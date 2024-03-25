'use client'

import {RoscentProviders} from '@roscent/layout/RoscentProviders'
import type {ReactNode} from 'react'
import React from 'react'

import {MobileVersionNotice} from '@/components/common/MobileVersionNotice'

export default function Layout(props: {children: ReactNode}) {
  return (
    <RoscentProviders>
      <MobileVersionNotice>{props.children}</MobileVersionNotice>
    </RoscentProviders>
  )
}
