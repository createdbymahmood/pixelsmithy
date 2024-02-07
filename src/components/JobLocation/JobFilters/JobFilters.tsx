'use client'
import {Accordion, ActionIcon, Box, Drawer, rem} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {IconMenu2} from '@tabler/icons-react'

import {SalaryRange} from '@/components/JobLocation/JobFilters/components/filters/SalaryRange'
import {SeniorityLevel} from '@/components/JobLocation/JobFilters/components/filters/SeniorityLevel'
import {TypeOfEmployment} from '@/components/JobLocation/JobFilters/components/filters/TypeOfEmployment'
import {JobFiltersCTA} from '@/components/JobLocation/JobFilters/components/JobFiltersCTA'
import {useMobileDevice} from '@/hooks/useMobileDevice'

export function JobFilters() {
  const isMobile = useMobileDevice()
  const [opened, {open, close}] = useDisclosure(false)

  const content = (
    <Accordion
      defaultValue={['typeOfEmployment', 'seniorityLevel', 'salaryRange']}
      multiple
      unstyled
    >
      <TypeOfEmployment />
      <SeniorityLevel />
      <SalaryRange />
      <JobFiltersCTA />
    </Accordion>
  )

  if (isMobile)
    return (
      <Box>
        <ActionIcon color='black' variant='transparent' onClick={open}>
          <IconMenu2 />
        </ActionIcon>

        <Drawer
          maw={rem(200)}
          opened={opened}
          size='xs'
          title='Filters'
          onClose={close}
        >
          {content}
        </Drawer>
      </Box>
    )
  return <Box>{content}</Box>
}
