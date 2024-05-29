'use client'

import {SimpleGrid, Stack} from '@mantine/core'
import Link from 'next/link'
import React from 'react'

import type {Job} from '@/components/job-huntly/mock/jobs'
import {jobs} from '@/components/job-huntly/mock/jobs'
import type {
  ExploreConfig,
  ExploreListConfig,
  ExploreListHeaderConfig,
  ExploreSearchBoxConfig,
  ExploreSearchBoxFormConfig,
} from '@/components/job-huntly/modules'
import {ExploreListMode, ExploreModule} from '@/components/job-huntly/modules'
import {JobhuntlyApplicantDashboardJobsJobId} from '@/lib/declarative-routing'

import {GridJobCard} from './GridJobCard'
import {StackJobCard} from './StackJobsCard'

const filters = [
  {
    title: 'Type of Employment',
    elements: [
      {label: 'Full-time', count: '3'},
      {label: 'Part-time', count: '5'},
      {label: 'Remote', count: '2'},
      {label: 'Internship', count: '24'},
      {label: 'Contract', count: '3'},
    ],
  },
  {
    title: 'Categories',
    elements: [
      {label: 'Design', count: '24'},
      {label: 'Sales', count: '3'},
      {label: 'Marketing', count: '3'},
      {label: 'Business', count: '3'},
      {label: 'Human Resource', count: '6'},
      {label: 'Finance', count: '4'},
      {label: 'Engineering', count: '4'},
      {label: 'Technology', count: '5'},
    ],
  },
  {
    title: 'Job Level',
    elements: [
      {label: 'Entry Level', count: '57'},
      {label: 'Mid Level', count: '3'},
      {label: 'Senior Level', count: '5'},
      {label: 'Director', count: '12'},
      {label: 'VP or Above', count: '8'},
    ],
  },
  {
    title: 'Salary Range',
    elements: [
      {label: '$700 - $1000', count: '4'},
      {label: '$100 - $1500', count: '6'},
      {label: '$1500 - $2000', count: '10'},
      {label: '$3000 or above', count: '4'},
    ],
  },
]

type T = Job

const header: ExploreListHeaderConfig = {
  title: 'Jobs List',
  description: 'Showing 57 results',
  onSortChange() {
    /*  */
  },
}

const list: ExploreListConfig<T> = {
  header,
  elements: jobs,
  render(elements, listMode) {
    if (listMode === ExploreListMode.Grid) {
      return (
        <SimpleGrid cols={{xxl: 3, xl: 2, md: 1, base: 1}}>
          {jobs.map((job) => {
            return (
              <Link
                key={job.id}
                href={JobhuntlyApplicantDashboardJobsJobId({jobId: job.id})}
              >
                <GridJobCard {...job} />
              </Link>
            )
          })}
        </SimpleGrid>
      )
    }

    return (
      <Stack h='100%'>
        {jobs.map((job) => {
          return (
            <Link
              key={job.id}
              href={JobhuntlyApplicantDashboardJobsJobId({jobId: job.id})}
            >
              <StackJobCard {...job} />
            </Link>
          )
        })}
      </Stack>
    )
  },
}

const form: ExploreSearchBoxFormConfig = {
  controls: {
    search: {placeholder: 'Job title or keyword'},
    location: {placeholder: 'Location'},
  },
  onSubmit(values) {
    /*  */
  },
}

const searchBox: ExploreSearchBoxConfig = {
  form,
  text: 'Popular : UI Designer, UX Researcher, Android, Admin',
}

const config: ExploreConfig<T> = {
  filters,
  list,
  searchBox,
}

export function Jobs() {
  return <ExploreModule config={config} />
}
