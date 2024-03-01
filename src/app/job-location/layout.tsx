import '@/lib/styles/global.scss'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

import type {ReactNode} from 'react'

export default function Layout(props: {children: ReactNode}) {
  return props.children
}
