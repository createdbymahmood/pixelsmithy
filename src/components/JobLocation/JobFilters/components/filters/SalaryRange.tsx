import type {RangeSliderValue} from '@mantine/core'
import {Accordion, Box, Input, NumberInput, RangeSlider} from '@mantine/core'
import {useCallbackRef} from '@mantine/hooks'
import {produce} from 'immer'
import {toNumber} from 'lodash-es'
import {useState} from 'react'

import {AccordionItem} from '@/components/JobLocation/JobFilters/components/AccordionItem'

import styles from './SalaryRange.module.scss'

type NumberInputValue = number | string

const salaryRangeInitialValues = {
  min: 0,
  max: 1000,
}

const useSalaryRangeSliderState = () => {
  const [range, setRange] = useState(salaryRangeInitialValues)

  const onMinInputChange = useCallbackRef((value: NumberInputValue) => {
    setRange(
      produce((draft) => {
        draft.min = toNumber(value)
      }),
    )
  })

  const onMaxInputChange = useCallbackRef((value: NumberInputValue) => {
    setRange(
      produce((draft) => {
        draft.max = toNumber(value)
      }),
    )
  })

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

export function SalaryRange() {
  const state = useSalaryRangeSliderState()
  return (
    <AccordionItem _key='salaryRange' title='Salary Range'>
      <Accordion.Panel>
        <RangeSlider
          max={salaryRangeInitialValues.max}
          min={salaryRangeInitialValues.min}
          value={Object.values(state.range) as RangeSliderValue}
          onChange={state.onRangeSliderValueChange}
        />

        <Box className={styles.rangeWrapper}>
          <Input.Wrapper label='Min'>
            <NumberInput
              max={state.range.max}
              min={salaryRangeInitialValues.min}
              value={state.range.min}
              onChange={state.onMinInputChange}
            />
          </Input.Wrapper>

          <Box mt={26}>-</Box>

          <Input.Wrapper label='Max'>
            <NumberInput
              max={salaryRangeInitialValues.max}
              min={state.range.min}
              value={state.range.max}
              onChange={state.onMaxInputChange}
            />
          </Input.Wrapper>
        </Box>
      </Accordion.Panel>
    </AccordionItem>
  )
}
