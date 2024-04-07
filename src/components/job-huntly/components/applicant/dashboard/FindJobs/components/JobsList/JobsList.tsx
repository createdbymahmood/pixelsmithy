'use client'

import {SimpleGrid, Stack as MantineStack} from '@mantine/core'
import {useToggle} from 'ahooks'
import Link from 'next/link'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {jobs} from '@/components/job-huntly/mock/jobs'
import {urls} from '@/constants'

import {GridJobCard, Header, StackJobCard} from './components'

export type UseJobsListStateReturnValue = ReturnType<typeof useJobsListState>

export enum JobsListType {
  Grid = 'GRID',
  Stack = 'STACK',
}

function useJobsListState() {
  const [type, {setLeft: setStack, setRight: setGrid}] = useToggle<
    JobsListType.Stack,
    JobsListType.Grid
  >(JobsListType.Stack, JobsListType.Grid)

  return {type, setGrid, setStack}
}

export function JobsList() {
  const state = useJobsListState()

  const content = (() => {
    if (state.type === JobsListType.Grid) {
      return (
        <SimpleGrid cols={{xxl: 3, xl: 2, md: 1, base: 1}}>
          {jobs.map((job) => {
            return (
              <Link
                key={job.id}
                href={urls.JobHuntly.applicant.dashboard.job(job.id)}
              >
                <GridJobCard {...job} />
              </Link>
            )
          })}
        </SimpleGrid>
      )
    }

    return (
      <MantineStack h='100%'>
        {jobs.map((job) => {
          return (
            <Link
              key={job.id}
              href={urls.JobHuntly.applicant.dashboard.job(job.id)}
            >
              <StackJobCard {...job} />
            </Link>
          )
        })}
      </MantineStack>
    )
  })()

  return (
    <MantineStack gap='xxxl' h='100%' w='100%'>
      <Header {...state} />
      <PerfectScrollbar>{content}</PerfectScrollbar>
    </MantineStack>
  )
}
