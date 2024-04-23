import {useCallbackRef} from '@mantine/hooks'
import {produce} from 'immer'
import {gt, lt, toNumber} from 'lodash-es'
import type {ChangeEvent} from 'react'
import {useState} from 'react'

import {
  Box,
  Input,
  Slider,
  Stack,
} from '@/components/job-location/components/ui'

const salaryRangeInitialValues = {
  min: 0,
  max: 1000,
}

const useSalaryRangeSliderState = () => {
  const [range, setRange] = useState(salaryRangeInitialValues)

  const onMinInputChange = useCallbackRef(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = toNumber(e.target.value)
      if (isNaN(value)) return
      const isValidMinValue = gt(value, salaryRangeInitialValues.max)
      if (isValidMinValue) return

      setRange(
        produce((draft) => {
          draft.min = value
        }),
      )
    },
  )

  const onMaxInputChange = useCallbackRef(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = toNumber(e.target.value)
      if (isNaN(value)) return
      const isValidMaxValue = lt(value, salaryRangeInitialValues.min)
      if (isValidMaxValue) return

      setRange(
        produce((draft) => {
          draft.max = value
        }),
      )
    },
  )

  const onRangeSliderValueChange = useCallbackRef(
    ([min, max]: [number, number]) => {
      setRange(
        produce((draft) => {
          draft.max = toNumber(max)
          draft.min = toNumber(min)
        }),
      )
    },
  )

  return {
    range,
    onMinInputChange,
    onMaxInputChange,
    onRangeSliderValueChange,
  }
}

export function JobFiltersSalaryRange() {
  const state = useSalaryRangeSliderState()
  return (
    <Stack direction='col' gap='lg'>
      <Slider
        defaultValue={Object.values(state.range)}
        max={salaryRangeInitialValues.max}
        min={salaryRangeInitialValues.min}
        step={1}
        onValueChange={state.onRangeSliderValueChange}
      />

      <Stack gap='lg'>
        <Input
          className='rounded-xl text-center text-gray-500'
          label='Min'
          max={state.range.max}
          min={salaryRangeInitialValues.min}
          value={state.range.min}
          onChange={state.onMinInputChange}
        />

        <Box className='mt-4 text-gray-500'>-</Box>

        <Input
          className='rounded-xl text-center text-gray-500'
          label='Max'
          max={salaryRangeInitialValues.max}
          min={state.range.min}
          value={state.range.max}
          onChange={state.onMaxInputChange}
        />
      </Stack>
    </Stack>
  )
}
