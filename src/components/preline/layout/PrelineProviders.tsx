'use client'

import 'react-perfect-scrollbar/dist/css/styles.css'
import '@/lib/styles/global.scss'

import {ChakraProvider} from '@chakra-ui/react'
import {theme} from '@preline/lib/ui/style/theme'
import type {ReactNode} from 'react'
import React from 'react'

interface PrelineProviders {
  children: ReactNode
}

export function PrelineProviders({children}: PrelineProviders) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
