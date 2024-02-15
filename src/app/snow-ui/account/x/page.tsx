import {startCase} from 'lodash-es'
import type {Metadata} from 'next'
import React from 'react'

import {defaultLoadingScreenDelayMS} from '@/constants'
import {constructMetadata} from '@/utils/constructMetadata'
import {sleep} from '@/utils/sleep'

interface Props {
  params: {section: string}
}

const generateSectionTitle = (section: string) =>
  `Account ${startCase(section)}`

export function generateMetadata({params}: Props): Metadata {
  return constructMetadata({
    title: generateSectionTitle(params.section),
  })
}

export default async function Account() {
  await sleep(defaultLoadingScreenDelayMS)
  return <div>Salam</div>
}
