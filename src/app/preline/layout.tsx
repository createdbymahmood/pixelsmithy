import type {ReactNode} from 'react'
import React from 'react'

import {PrelineLayout, PrelineProviders} from '@/components/preline/layout'

export default function Layout(props: {children: ReactNode}) {
  return (
    <PrelineProviders>
      <PrelineLayout>{props.children}</PrelineLayout>
    </PrelineProviders>
  )
}
