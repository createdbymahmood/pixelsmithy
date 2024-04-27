import {useCallbackRef} from '@mantine/hooks'
import {produce} from 'immer'
import {toNumber} from 'lodash-es'
import type {ChangeEvent} from 'react'
import {useState} from 'react'
import {z} from 'zod'

import {
  Box,
  Group,
  Input,
  Slider,
  Stack,
} from '@/components/job-location/components/ui'

const salaryRangeInitialValues = {
  min: 0,
  max: 1000,
}

const rangeValueSchema = z
  .number()
  .min(salaryRangeInitialValues.min)
  .max(salaryRangeInitialValues.max)

const useSalaryRangeSliderState = () => {
  const [range, setRange] = useState(salaryRangeInitialValues)

  const onMinInputChange = useCallbackRef(
    (e: ChangeEvent<HTMLInputElement>) => {
      try {
        const _value = toNumber(e.target.value)
        const value = rangeValueSchema.parse(_value)

        setRange(
          produce((draft) => {
            draft.min = value
          }),
        )
      } catch (error) {
        /*  */
      }
    },
  )

  const onMaxInputChange = useCallbackRef(
    (e: ChangeEvent<HTMLInputElement>) => {
      try {
        const _value = toNumber(e.target.value)
        const value = rangeValueSchema.parse(_value)

        setRange(
          produce((draft) => {
            draft.max = value
          }),
        )
      } catch (error) {
        /*  */
      }
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
    <Stack gap='lg'>
      <Slider
        defaultValue={Object.values(state.range)}
        max={salaryRangeInitialValues.max}
        min={salaryRangeInitialValues.min}
        step={1}
        onValueChange={state.onRangeSliderValueChange}
      />

      <Group gap='lg' noWrap>
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
      </Group>
    </Stack>
  )
}
