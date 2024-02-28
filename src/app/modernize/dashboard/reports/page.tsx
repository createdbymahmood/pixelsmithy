'use client'
import dynamic from 'next/dynamic'
import React from 'react'

// import {constructMetadata} from '@/utils/constructMetadata'

// export const metadata = constructMetadata({
//   title: 'Products',
// })

const CustomerGrowthReports = dynamic(
  () => import('@modernize/components').then((m) => m.CustomerGrowthReports),
  {
    ssr: false,
  },
)

export default function Reports() {
  return <CustomerGrowthReports />
}
