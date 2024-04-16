import SettingsLayout from '@job-huntly/components/company/dashboard/Settings/SettingsLayout/SettingsLayout'
import type {ReactNode} from 'react'
import React from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return <SettingsLayout>{children}</SettingsLayout>
}
