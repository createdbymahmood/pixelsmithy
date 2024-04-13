'use client'

import type {MantineSpacing} from '@mantine/core'
import {Divider, Grid, Stack} from '@mantine/core'
import React from 'react'

function Header() {
  return <div>Header</div>
}

function TechStack() {
  return <div>TechStack</div>
}

function Profile() {
  return <div>Profile</div>
}

function Contact() {
  return <div>Contact</div>
}

function Gallery() {
  return <div>Gallery</div>
}

function OfficeLocations() {
  return <div>OfficeLocations</div>
}

function Team() {
  return <div>Team</div>
}

function Benefits() {
  return <div>Benefits</div>
}

function OpenPositions() {
  return <div>OpenPositions</div>
}

const gutter: MantineSpacing = 'xxxl'

export function CompanyProfile() {
  return (
    <Stack gap={gutter}>
      <Header />

      <Divider />

      <Grid gutter={gutter}>
        <Grid.Col span={{xl: 9, md: 8}}>
          <Stack gap={gutter}>
            <Profile />
            <Divider />
            <Contact />
            <Divider />
            <Gallery />
            <Divider />
            <Team />
            <Divider />
            <Benefits />
            <Divider />
            <OpenPositions />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{xl: 3, md: 4}}>
          <Stack gap={gutter}>
            <TechStack />
            <Divider />
            <OfficeLocations />
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
