'use client'

import {Stack} from '@mantine/core'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {jobs} from '@/components/job-huntly/mock/jobs'

import {Header, StackJobCard} from './components'

export function JobsList() {
  const list = jobs.map((job) => {
    return <StackJobCard {...job} key={job.id} />
  })

  return (
    <Stack gap='xxxl' h='100%' w='100%'>
      <Header />

      <PerfectScrollbar>
        <Stack h='100%'>{list}</Stack>
      </PerfectScrollbar>
    </Stack>
  )
}
