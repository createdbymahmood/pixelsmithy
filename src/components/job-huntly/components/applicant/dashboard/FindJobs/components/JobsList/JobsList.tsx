'use client'

import {Stack} from '@mantine/core'
import React from 'react'

import {jobs} from '@/components/job-huntly/mock/jobs'

import {Header, StackJobCard} from './components'

export function JobsList() {
  const list = jobs.map((job) => {
    return <StackJobCard {...job} key={job.id} />
  })

  return (
    <Stack gap='xxxl' w='100%'>
      <Header />

      {list}
    </Stack>
  )
}
