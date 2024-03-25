'use client'

import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import type {ReactNode} from 'react'
import React from 'react'

import {inter} from '@/lib/styles/font/inter'

import {Alert, Button, Skeleton} from './_components'

const theme = extendTheme({
  components: {Button, Skeleton, Alert},
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
})

export default function Layout(props: {children: ReactNode}) {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
}
