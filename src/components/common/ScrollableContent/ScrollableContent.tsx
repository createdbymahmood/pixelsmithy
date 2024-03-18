import {Box} from '@mantine/core'
import type {ReactNode} from 'react'

export function ScrollableContent(props: {h: string; children: ReactNode}) {
  return (
    <Box h={props.h} style={{overflow: 'auto'}}>
      {props.children}
    </Box>
  )
}
