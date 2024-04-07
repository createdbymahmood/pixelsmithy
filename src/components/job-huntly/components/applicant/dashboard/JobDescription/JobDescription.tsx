'use client'

import {Stack} from '@mantine/core'
import {head} from 'lodash-es'
import React from 'react'

import {jobs} from '@/components/job-huntly/mock/jobs'

import {Header} from './components'

export function JobDescription() {
  return (
    <Stack gap='xxxl'>
      <Header job={head(jobs)!} />
    </Stack>
  )
}
