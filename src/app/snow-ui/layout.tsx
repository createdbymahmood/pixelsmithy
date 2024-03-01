'use client'
import '@/lib/styles/global.scss'
import '@mantine/core/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@mantine/dates/styles.css'

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
