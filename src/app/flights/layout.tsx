'use client'

import {FlightProviders} from '@flights/layout'
import type {ReactNode} from 'react'
import React from 'react'

export default function Layout(props: {children: ReactNode}) {
  return <FlightProviders>{props.children}</FlightProviders>
}