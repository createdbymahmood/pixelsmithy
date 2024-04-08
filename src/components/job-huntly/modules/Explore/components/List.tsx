'use client'

import type {ExploreListConfig} from '@job-huntly/modules/Explore'
import {ExploreListMode} from '@job-huntly/modules/Explore'
import {Stack as MantineStack} from '@mantine/core'
import {useToggle} from 'ahooks'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {ListHeader} from './ListHeader'

export type UseExploreListStateReturnValue = ReturnType<
  typeof useExploreListState
>

function useExploreListState() {
  const [type, {setLeft: setGrid, setRight: setStack}] = useToggle<
    ExploreListMode.Grid,
    ExploreListMode.Stack
  >(ExploreListMode.Grid, ExploreListMode.Stack)

  return {type, setGrid, setStack}
}

interface ListProps<T> extends ExploreListConfig<T> {}

export function List<T>(props: ListProps<T>) {
  const state = useExploreListState()
  const content = props.render(props.elements, state.type)
  return (
    <MantineStack gap='xxxl' h='100%' w='100%'>
      <ListHeader state={state} {...props.header} />
      <PerfectScrollbar>{content}</PerfectScrollbar>
    </MantineStack>
  )
}
