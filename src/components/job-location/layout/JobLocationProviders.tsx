'use client'

import '@job-location/lib/style/globals.css'

import {cn} from '@job-location/utils/cn'
import type {ReactNode} from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export function JobLocationProviders({children}: RootLayoutProps) {
  return <div className={cn('min-h-screen bg-background')}>{children}</div>
}
