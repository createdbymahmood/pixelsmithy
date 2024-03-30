'use client'

import 'react-perfect-scrollbar/dist/css/styles.css'
import '@/lib/styles/global.scss'

import {ChakraProvider} from '@chakra-ui/react'
import type {ReactNode} from 'react'
import React from 'react'

import {PrelineTheme} from '@/components/preline/lib/ui/style/PrelineTheme'

interface PrelineProviders {
  children: ReactNode
}

export function PrelineProviders({children}: PrelineProviders) {
  return <ChakraProvider theme={PrelineTheme}>{children}</ChakraProvider>
}
