import type {MantineColor} from '@mantine/core'
import type {FC, SVGProps} from 'react'

import Dropbox from './assets/logo/dropbox.svg'
import Nomad from './assets/logo/nomad.svg'
import Revolut from './assets/logo/revolut.svg'
import Terraform from './assets/logo/terraform.svg'

export type JobType = 'freelance' | 'full-time' | 'part-time'

export interface JobApplicationsInfo {
  applicantsCount: number
  capacity: number
}

export interface JobNeedsInfo {
  needs: number
  hired: number
}

export interface Job {
  id: string
  role: string
  company: string
  type: JobType
  location: string
  categories: Category[]
  applicationsInfo: JobApplicationsInfo
  logo: FC<SVGProps<SVGElement>>
  status: JobStatus
  datePosted: string
  dueDate: string
  needsInfo: JobNeedsInfo
}

export type JobStatus = 'closed' | 'live'
interface Category {
  label: string
  color: MantineColor
}

export const jobs: Job[] = [
  {
    id: '1',
    role: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Paris, France',
    applicationsInfo: {
      applicantsCount: 5,
      capacity: 10,
    },
    categories: [
      {
        color: 'yellow',
        label: 'marketing',
      },
      {
        color: 'primary',
        label: 'design',
      },
    ],
    logo: Nomad,
    type: 'full-time',
    status: 'live',
    datePosted: '20 May 2020',
    dueDate: '24 May 2020',
    needsInfo: {
      hired: 5,
      needs: 10,
    },
  },
  {
    id: '2',
    role: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Fransisco, USA',
    applicationsInfo: {
      applicantsCount: 2,
      capacity: 10,
    },
    categories: [
      {
        color: 'yellow',
        label: 'marketing',
      },
      {
        color: 'primary',
        label: 'design',
      },
    ],
    logo: Dropbox,
    type: 'full-time',
    status: 'closed',
    datePosted: '20 May 2020',
    dueDate: '24 May 2020',
    needsInfo: {
      hired: 5,
      needs: 10,
    },
  },
  {
    id: '3',
    role: 'Interactive Developer',
    company: 'Terraform',
    location: 'Hamburg, Germany',
    applicationsInfo: {
      applicantsCount: 8,
      capacity: 12,
    },
    categories: [
      {
        color: 'yellow',
        label: 'marketing',
      },
      {
        color: 'primary',
        label: 'design',
      },
    ],
    logo: Terraform,
    type: 'freelance',
    status: 'live',
    datePosted: '20 May 2020',
    dueDate: '24 May 2020',
    needsInfo: {
      hired: 5,
      needs: 10,
    },
  },
  {
    id: '4',
    role: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    applicationsInfo: {
      applicantsCount: 0,
      capacity: 10,
    },
    categories: [
      {
        color: 'yellow',
        label: 'marketing',
      },
      {
        color: 'primary',
        label: 'design',
      },
    ],
    logo: Revolut,
    type: 'part-time',
    status: 'closed',
    datePosted: '20 May 2020',
    dueDate: '24 May 2020',
    needsInfo: {
      hired: 5,
      needs: 10,
    },
  },
]
