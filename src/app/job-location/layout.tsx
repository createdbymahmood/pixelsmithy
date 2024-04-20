import {JobLocationProviders} from '@job-location/layout'
import type {ReactNode} from 'react'

export default function Layout(props: {children: ReactNode}) {
  return <JobLocationProviders>{props.children}</JobLocationProviders>
}
