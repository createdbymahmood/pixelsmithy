import type {MantineColor} from '@mantine/core'
import type {FC, SVGProps} from 'react'

import Stripe from './assets/logo/stripe.svg'
import Truebill from './assets/logo/truebill.svg'

interface Category {
  label: string
  color: MantineColor
}

export interface Company {
  id: string
  name: string
  description: string
  jobsCount: number
  categories: Category[]
  logo: FC<SVGProps<SVGElement>>
}

export const companies: Company[] = [
  {
    id: '1',
    name: 'Stripe',
    jobsCount: 7,
    logo: Stripe,

    description:
      'Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools...',
    categories: [
      {
        label: 'Business',
        color: 'green',
      },
      {
        label: 'Payment Gateway',
        color: 'primary',
      },
    ],
  },
  {
    id: '1',
    name: 'Truebill',
    jobsCount: 7,
    logo: Truebill,

    description:
      'Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...',
    categories: [
      {
        label: 'Business',
        color: 'green',
      },
    ],
  },
]
