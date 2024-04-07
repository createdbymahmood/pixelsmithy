import type {MantineColor} from '@mantine/core'
import type {FC, SVGProps} from 'react'

import Nomad from './assets/logo/nomad.svg'

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
  categories: JobCategory[]
  applicationsInfo: JobApplicationsInfo
  logo: FC<SVGProps<SVGElement>>
}

interface JobCategory {
  label: string
  color: MantineColor
}
export const jobs: Job[] = [
  {
    id: '1',
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
    role: 'Social Media Assistant',
    type: 'full-time',
  },
]
