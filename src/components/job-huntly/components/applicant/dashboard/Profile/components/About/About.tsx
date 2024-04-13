import {EditButton, ProfileSection} from '@job-huntly/components/common'
import {Stack, Text} from '@mantine/core'
import React from 'react'

export function About() {
  return (
    <ProfileSection action={<EditButton />} title='About Me'>
      <Stack>
        <Text c='neutrals.5'>
          I’m a product designer + filmmaker currently working remotely at
          Twitter from beautiful Manchester, United Kingdom. I’m passionate
          about designing digital products that have a positive impact on the
          world.
        </Text>

        <Text c='neutrals.5'>
          For 10 years, I’ve specialised in interface, experience & interaction
          design as well as working in user research and product strategy for
          product agencies, big tech companies & start-ups.
        </Text>
      </Stack>
    </ProfileSection>
  )
}
