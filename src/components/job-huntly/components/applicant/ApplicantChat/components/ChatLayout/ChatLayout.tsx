import type {ReactNode} from 'react'
import React from 'react'

interface ChatLayoutProps {
  children: ReactNode
}

export function ChatLayout({children}: ChatLayoutProps) {
  return <div>{children}</div>
}
