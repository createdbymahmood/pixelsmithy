import {noop} from 'lodash-es'
import React from 'react'

import {Group} from '@/components/job-location/components/ui'
import {Badge} from '@/components/job-location/components/ui/badge'
import type {CheckboxProps} from '@/components/job-location/components/ui/checkbox'
import {Checkbox} from '@/components/job-location/components/ui/checkbox'

export interface JobFiltersCheckboxOption {
  label: string
  value: string
}

interface JobFiltersCheckboxProps extends JobFiltersCheckboxOption {
  isSelected: boolean
  onCheckedChange?: CheckboxProps['onCheckedChange']
}

export function JobFiltersCheckbox({
  isSelected,
  label,
  onCheckedChange = noop,
  value,
}: JobFiltersCheckboxProps) {
  return (
    <Group className='w-full' justify='between' noWrap>
      <Checkbox label={label} onCheckedChange={onCheckedChange} />
      <Badge variant={isSelected ? 'secondary' : 'disabled'}>{value}</Badge>
    </Group>
  )
}
