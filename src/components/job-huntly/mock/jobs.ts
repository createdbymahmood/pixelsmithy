import type {MantineColor} from '@mantine/core'
import type {FC, SVGProps} from 'react'

import Dropbox from './assets/logo/dropbox.svg'
import Nomad from './assets/logo/nomad.svg'
import Revolut from './assets/logo/revolut.svg'
import Terraform from './assets/logo/terraform.svg'

export type JobType = 'full-time' | 'part-time'

export interface JobApplicationsInfo {
  applicantsCount: number
  capacity: number
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
}

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
    type: 'full-time',
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
    type: 'full-time',
  },
]
