import type {ReactNode} from 'react'
import React from 'react'

interface SettingsLayoutProps {
  children: ReactNode
}

export function SettingsLayout({children}: SettingsLayoutProps) {
  return <div>{children}</div>
}
