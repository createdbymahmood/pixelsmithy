import type {ReactNode} from 'react'
import React from 'react'

interface JobLayoutProps {
  children: ReactNode
}

export function JobLayout({children}: JobLayoutProps) {
  return <div>JobLayout {children}</div>
}
