'use client'
import {Stack} from '@mantine/core'
import React, {Fragment, useState} from 'react'

import {ApplicantsPipeline, ApplicantsTable, Header} from './components'

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
  const content = (() => {
    switch (state.view) {
      case ApplicantsView.Table:
        return <ApplicantsTable />

      case ApplicantsView.Pipeline:
        return <ApplicantsPipeline />

      default:
        return <Fragment />
    }
  })()

  return (
    <Stack gap={0}>
      <Header state={state} />
      {content}
    </Stack>
  )
}
