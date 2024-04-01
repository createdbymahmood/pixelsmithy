import type {FC, SVGProps} from 'react'

import Nomad from './assets/logo/nomad.svg'
import Packer from './assets/logo/packer.svg'

export type ApplicationStatus = 'declined' | 'review' | 'shortlisted'
export interface Application {
  id: string
  position: string
  info: string
  date: string
  status: ApplicationStatus
  logo: FC<SVGProps<SVGElement>>
}

export const applications: Application[] = [
  {
    id: '1',
    date: '24 July 2021',
    info: 'Nomad • Paris, France • Full-Time',
    position: 'Social Media Assistant',
    status: 'review',
    logo: Nomad,
  },
  {
    id: '2',
    date: '23 July 2021',
    info: 'Udacity • New York, USA • Full-Time',
    position: 'Social Media Assistant',
    status: 'shortlisted',
    logo: Nomad,
  },
  {
    id: '3',
    date: '22 July 2021',
    info: 'Packer • Madrid, Spain • Full-Time',
    position: 'Social Media Assistant',
    status: 'declined',
    logo: Packer,
  },
]
