import {Anchor, Checkbox, Group, rem, Text} from '@mantine/core'
import Link from 'next/link'
import React from 'react'

import {RoscentDashboard} from '@/lib/declarative-routing'

export function TermsOfUse() {
  return (
    <Group gap='xs'>
      <Checkbox size='xs' />
      <Group gap={rem(3)}>
        <Text c='dimmed' size='sm'>
          I Accept the
        </Text>

        <Anchor
          c='indigo.4'
          component={Link}
          href={RoscentDashboard()}
          size='sm'
          underline='never'
        >
          Terms
        </Anchor>
      </Group>
    </Group>
  )
}
