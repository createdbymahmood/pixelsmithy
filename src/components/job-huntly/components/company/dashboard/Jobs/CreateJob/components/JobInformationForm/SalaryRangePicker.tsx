import type {RangeSliderValue} from '@mantine/core'
import {
  Divider,
  Group,
  RangeSlider,
  rem,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import {useCallbackRef} from '@mantine/hooks'
import {produce} from 'immer'
import {gt, lt, omit, toNumber} from 'lodash-es'
import type {ChangeEvent} from 'react'
import {useState} from 'react'

import styles from './SalaryRangePicker.module.scss'

const validSalaryRange = {
  min: 0,
  max: 2000,
}

const defaultValue = {
  min: 500,
  max: 1500,
}

const useSalaryRangeSliderState = () => {
  const [range, setRange] = useState(defaultValue)

  const onMinInputChange = useCallbackRef(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = toNumber(e.target.value)
      if (isNaN(value)) return
      const isValidMinValue = gt(value, validSalaryRange.max)
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
      const isValidMaxValue = lt(value, validSalaryRange.min)
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

export function SalaryRangePicker() {
  const state = useSalaryRangeSliderState()

  const inputLeftSection = (
    <Group gap='xs'>
      <Text fw='600'>$</Text>{' '}
      <Divider color='neutrals.3' orientation='vertical' />{' '}
    </Group>
  )

  return (
    <Stack gap='xl' maw={rem(446)}>
      <Group justify='space-between'>
        <TextInput
          classNames={{input: styles.input}}
          fw='500'
          leftSection={inputLeftSection}
          maw={rem(107)}
          max={state.range.max}
          min={validSalaryRange.min}
          size='md'
          value={state.range.min}
          onChange={state.onMinInputChange}
        />

        <Text c='neutrals.4'>to</Text>

        <TextInput
          classNames={{input: styles.input}}
          leftSection={inputLeftSection}
          maw={rem(107)}
          max={validSalaryRange.max}
          min={state.range.min}
          size='md'
          value={state.range.max}
          onChange={state.onMaxInputChange}
        />
      </Group>

      <RangeSlider
        classNames={omit(styles, 'range')}
        label={null}
        max={validSalaryRange.max}
        min={validSalaryRange.min}
        value={Object.values(state.range) as RangeSliderValue}
        onChange={state.onRangeSliderValueChange}
      />
    </Stack>
  )
}
