import type {RangeSliderValue} from '@mantine/core'
import {Accordion, Box, Input, RangeSlider} from '@mantine/core'
import {useCallbackRef} from '@mantine/hooks'
import {produce} from 'immer'
import {gt, lt, omit, toNumber} from 'lodash-es'
import type {ChangeEvent} from 'react'
import {useState} from 'react'

import {AccordionItem} from '@/components/JobLocation/JobFilters/components/AccordionItem'

import styles from './SalaryRange.module.scss'

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

export function SalaryRange() {
  const state = useSalaryRangeSliderState()
  return (
    <AccordionItem _key='salaryRange' title='Salary Range'>
      <Accordion.Panel>
        <RangeSlider
          classNames={omit(styles, 'range')}
          max={salaryRangeInitialValues.max}
          min={salaryRangeInitialValues.min}
          value={Object.values(state.range) as RangeSliderValue}
          onChange={state.onRangeSliderValueChange}
        />

        <Box className={styles.range}>
          <Input.Wrapper label='Min'>
            <Input
              classNames={{input: styles.input}}
              max={state.range.max}
              min={salaryRangeInitialValues.min}
              value={state.range.min}
              onChange={state.onMinInputChange}
            />
          </Input.Wrapper>

          <Box mt={26}>-</Box>

          <Input.Wrapper label='Max'>
            <Input
              classNames={{input: styles.input}}
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
