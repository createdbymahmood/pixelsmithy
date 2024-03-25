'use client'

import type {ReactNode} from 'react'
import React from 'react'

import {FlightProviders} from '@/components/flights/layout'

export default function Layout(props: {children: ReactNode}) {
  return <FlightProviders>{props.children}</FlightProviders>
}
