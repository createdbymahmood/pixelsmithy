'use client'
import {Stack} from '@mantine/core'
import React, {useState} from 'react'

import {ApplicantsTable, Header} from './components'

export enum ApplicantsView {
  Table = 'Table View',
  Pipeline = 'Pipeline View',
}

function useApplicantsViewState() {
  const [view, setView] = useState<ApplicantsView>(ApplicantsView.Table)
  return {view, setView}
}

export type UseApplicantsViewStateReturn = ReturnType<
  typeof useApplicantsViewState
>

export function Applicants() {
  const state = useApplicantsViewState()
  return (
    <Stack gap={0}>
      <Header state={state} />
      <ApplicantsTable />
    </Stack>
  )
}
