import {Box, Button, Divider, SimpleGrid, Stack} from '@mantine/core'
import {Plus} from '@phosphor-icons/react'
import React from 'react'

import type {PerksAndBenefitsCardProps} from '@/components/job-huntly/components/applicant'
import {PerksAndBenefitsCard} from '@/components/job-huntly/components/applicant'
import {
  FormHeader,
  FormSection,
} from '@/components/job-huntly/components/common/form'

function FormView() {
  const buttonLeftSection = <Box className='icon-size-md' component={Plus} />

  const perksAndBenefits: PerksAndBenefitsCardProps[] = [
    {
      title: 'Full Healthcare',
      description:
        'We believe in thriving communities and that starts with our team being happy and healthy.',
    },
    {
      title: 'Unlimited Vacation',
      description:
        'We believe you should have a flexible schedule that makes space for family, wellness, and fun.',
    },
    {
      title: 'Skill Development',
      description:
        "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
    },
  ]

  return (
    <FormSection
      description='Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees'
      title='Perks and Benefits'
    >
      <Stack align='flex-start'>
        <Button leftSection={buttonLeftSection} size='sm' variant='outline'>
          Add Benefit
        </Button>

        <SimpleGrid cols={{lg: 2, xs: 1}} w='100%'>
          {perksAndBenefits.map((item) => {
            return <PerksAndBenefitsCard key={item.title} {...item} />
          })}
        </SimpleGrid>
      </Stack>
    </FormSection>
  )
}

export function PerksAndBenefitsForm() {
  return (
    <Stack>
      <FormHeader
        description='List out your top perks and benefits.'
        title='Basic Information'
      />
      <Divider />
      <FormView />
    </Stack>
  )
}
