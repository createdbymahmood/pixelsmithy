'use client'

import {Grid, GridItem} from '@chakra-ui/react'
import type {ReactNode} from 'react'
import React from 'react'

import {Sidebar} from './components'

interface PrelineLayoutProps {
  children: ReactNode
}

export function PrelineLayout({children}: PrelineLayoutProps) {
  return (
    <Grid gap={0} gridTemplateColumns={['0 auto', '260px auto']} h='100vh'>
      <GridItem overflowY='hidden'>
        <Sidebar />
      </GridItem>

      <GridItem px={2}>{children}</GridItem>
    </Grid>
  )
}
