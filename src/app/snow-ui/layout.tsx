'use client'

import type {ReactNode} from 'react'
import React from 'react'

import {MobileVersionNotice} from '@/components/common/MobileVersionNotice'
import {SnowUIProviders} from '@/components/SnowUI/layout/SnowUIProviders'

export default function Layout(props: {children: ReactNode}) {
  return (
    <SnowUIProviders>
      <MobileVersionNotice>{props.children}</MobileVersionNotice>
    </SnowUIProviders>
  )
}
