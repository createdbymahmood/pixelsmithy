'use client'

import {
  JobFilters,
  JobsList,
  Navbar,
  SideNav,
} from '@job-location/components/compound'

import {Container, Group, Stack} from '@/components/job-location/components/ui'
import {useResponsiveVariant} from '@/components/job-location/utils/useResponsiveVariant'

export default function JobLocation() {
  return (
    <Stack align='start'>
      <Navbar />

      <Container>
        <Group
          align='stretch'
          className='flex-wrap md:flex-nowrap'
          gap={useResponsiveVariant({base: 'sm', md: 'xl'})}
        >
          <JobFilters />
          <JobsList />
        </Group>
      </Container>

      <SideNav />
    </Stack>
  )
}
