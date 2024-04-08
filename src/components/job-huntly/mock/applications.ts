import type {JobType} from '@job-huntly/mock/jobs'
import type {FC, SVGProps} from 'react'

import DigitalOcean from './assets/logo/digital-ocean.svg'
import Divvy from './assets/logo/divvy.svg'
import Nomad from './assets/logo/nomad.svg'
import Packer from './assets/logo/packer.svg'
import Udacity from './assets/logo/udacity.svg'

export type ApplicationStatus = 'declined' | 'review' | 'shortlisted'
export interface Application {
  id: string
  role: string
  date: string
  status: ApplicationStatus
  logo: FC<SVGProps<SVGElement>>
  company: string
  type: JobType
  location: string
}

export const applications: Application[] = [
  {
    id: '1',
    date: '24 July 2021',
    role: 'Social Media Assistant',
    status: 'review',
    logo: Nomad,
    company: 'Nomad',
    location: 'Paris, France',
    type: 'full-time',
  },
  {
    id: '2',
    date: '23 July 2021',
    role: 'Social Media Assistant',
    status: 'shortlisted',
    logo: Udacity,
    company: 'Udacity',
    location: 'New York, USA',
    type: 'full-time',
  },
  {
    id: '3',
    date: '22 July 2021',
    role: 'Social Media Assistant',
    status: 'declined',
    logo: Packer,
    company: 'Packer',
    location: 'Madrid, Spain',
    type: 'full-time',
  },
  {
    id: '4',
    date: '14 July 2021',
    role: 'Social Media Assistant',
    status: 'review',
    logo: Divvy,
    company: 'Divvy',
    location: 'Madrid, Spain',
    type: 'full-time',
  },
  {
    id: '5',
    date: '10 July 2021',
    role: 'Social Media Assistant',
    status: 'shortlisted',
    logo: DigitalOcean,
    company: 'Digital Ocean',
    location: 'Madrid, Spain',
    type: 'full-time',
  },
]
