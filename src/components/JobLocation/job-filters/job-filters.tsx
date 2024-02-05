'use client'

import {Accordion, ActionIcon, Box, Drawer} from '@mantine/core'
import {useDisclosure, useMediaQuery} from '@mantine/hooks'
import {IconMenu2} from '@tabler/icons-react'

import {SalaryRange} from '@/components/JobLocation/job-filters/components/filters/salary-range'
import {SeniorityLevel} from '@/components/JobLocation/job-filters/components/filters/seniority-level'
import {TypeOfEmployment} from '@/components/JobLocation/job-filters/components/filters/type-of-employment'
import {vars} from '@/lib/ui/theme'

function useMobileDevice() {
  return useMediaQuery(`(max-width: ${vars.breakpoints.sm})`, false, {
    getInitialValueInEffect: true,
  })
}

export function JobFilters() {
  const isMobile = useMobileDevice()
  const [opened, {open, close}] = useDisclosure(false)

  const content = (
    <Accordion defaultValue={['typeOfEmployment']} multiple unstyled>
      <TypeOfEmployment />
      <SeniorityLevel />
      <SalaryRange />
    </Accordion>
  )

  if (isMobile)
    return (
      <Box>
        <ActionIcon color='black' variant='transparent' onClick={open}>
          <IconMenu2 />
        </ActionIcon>

        <Drawer
          maw={200}
          opened={opened}
          size='xs'
          title='Filters'
          onClose={close}
        >
          {content}
        </Drawer>
      </Box>
    )
  return <Box mt={60}>{content}</Box>
}
